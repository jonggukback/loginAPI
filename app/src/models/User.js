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

    login(){
        const body = this.body;
        memberDB.collection('login').findOne({ id : body.id }, (err,result)=>{
            if (err) return {success: false, msg: "데이터를 불러오지 못했습니다."};

            if (!result) return {success: false, msg: "존재하지 않는 아이디입니다."};

            if( result.pw === body.pw ){
                console.log("로그인 성공");
                return { success: true };
            }else {
                console.log("비밀번호가 틀렸습니다.");
                return { success: false, msg: "로그인에 실패하셨습니다", };
            }
        })
    }
}

module.exports = User;