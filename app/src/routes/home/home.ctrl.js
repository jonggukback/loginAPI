"use strict";

const User = require('../../models/User');

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
    signin: async (req, res) =>{
        const user = new User(req.body);
        const respones = await user.login();
        console.log(respones);
        return res.json(respones);
    },
    signup: async (req,res) =>{
        const user = new User(req.body);
        const respones = await user.signup();
        console.log(respones);
        return res.json(respones);
    },
}

module.exports = {
    views,
    process,
};