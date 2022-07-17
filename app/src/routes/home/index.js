"use strict";

const express = require("express");
const router = express.Router();
module.exports = router;

const ctrl = require('./home.ctrl');

const MongoClient = require('mongodb').MongoClient; // mongodb

/*============== MongoDB 연결 ==============*/
let memberDB
MongoClient.connect('mongodb+srv://admin:12qwaszx@cluster0.q2bjw.mongodb.net/test?retryWrites=true&w=majority', 
(err, client)=>{
    if (err) return console.log(err);
    memberDB = client.db('member');
})

/*============== 로그인 페이지 ==============*/
router.get('/',ctrl.views.signin);
router.post('/',ctrl.process.signin);

/*============== 회원가입 페이지 ==============*/
router.get('/signup',ctrl.views.signup);

router.post('/register', (req,res)=>{
    console.log(req);
    
})
