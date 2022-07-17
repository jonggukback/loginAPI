"use strict";

// const User = require('../../models/User');

/*============== MongoDB 연결 ==============*/
let memberDB;
const MongoClient = require('mongodb').MongoClient; // mongodb
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
    mypage : (req,res)=>{
        res.render('home/mypage');
    }
}

const process = {
    signin: (req, res) =>{
        // const user = new User(req.body);
        // const respones = user.login();
        // console.log(respones);
        // return res.json(respones);
        const id = req.body.id,
            pw = req.body.pw;
        memberDB.collection('login').findOne({ id : id }, (err,result)=>{
            if (err) return console.log("에러가 발생했습니다: "+err);

            if (!result) return res.json({
                success: false,
                msg: "존재하지 않는 아이디입니다.",
            })

            if(result.pw === pw){
                return res.json({
                    success: true,
                })
            }else {
                return res.json({
                    success: false,
                    msg: "비밀번호가 맞지 않습니다.",
                })
            }
        });
    },
    signup: (req,res) =>{
        const result = req.body;
        console.log(result);
        memberDB.collection('login').insertOne(result, (err,result)=>{
            console.log(result);
            if (!result) return res.json({ success: false, msg: "가입이 실패 했습니다",});
            return res.json({ success: true,});
        })
        
    },
} 
module.exports = {
    views,
    process,
};