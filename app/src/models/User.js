"use strict";

/*============== MongoDB 연결 ==============*/
let memberDB;
const MongoClient = require('mongodb').MongoClient; // mongodb
MongoClient.connect('mongodb+srv://admin:12qwaszx@cluster0.q2bjw.mongodb.net/member?retryWrites=true&w=majority', 
(err, client)=>{
    if (err) return console.log("에러입니다: "+err);
    memberDB = client.db('member');
})

class User {
    constructor(body){
        this.body = body
    }

    async login(){
        const body = this.body;
        const user = await memberDB.collection('login').findOne({ id : body.id })
        if(!user) {
            return { success: false, msg: "존재하지 않는 아이디입니다." };
        }
        if (user.pw === body.pw){
            return  { success: true };
        }else {
            return  { success: false, msg: "로그인에 실패하셨습니다", };
        }
    }

    async signup(){
        const body = this.body;
        const user = await memberDB.collection('login').findOne({ id : body.id })
        if(user === null){
            memberDB.collection('login').insertOne(body);
            return { success: true, };
        }else{
            return { success: false, msg: "가입에 실패 했습니다." }
        }
    }
}

module.exports = User;
