"use strict";

/*============== MongoDB 연결 ==============*/
const MongoClient = require('mongodb').MongoClient; // mongodb
let memberDB;
MongoClient.connect('mongodb+srv://admin:12qwaszx@cluster0.q2bjw.mongodb.net/member?retryWrites=true&w=majority', 
(err, client)=>{
    if (err) return console.log("에러입니다: "+err);
    memberDB = client.db('member');
})

const views = {
    signin : (req,res) => {
        res.render('home/login');
    },
    signup : (req,res)=>{
        res.render('home/signup');
    },
}

const process = {
    signin: (req, res) =>{
        console.log(req.body);
        const id = req.body.id,
            pw = req.body.pw;
        memberDB.collection('login').findOne({ id : id }, (err,result)=>{
            if (err) return console.log("에러가 발생했습니다: "+err);
            if (!result) return console.log("존재하지 않는 아이디입니다:");
            if(result.pw === pw){
                console.log("로그인 성공");
                return res.json({
                    success: true,
                })
            }else {
                console.log("비밀번호가 틀렸습니다.");
                return res.json({
                    success: false,
                    msg: "로그인에 실패하셨습니다",
                })
            }

        });
    },
} 
module.exports = {
    views,
    process,
};