"use strict";

const express = require("express");
const router = express.Router();
module.exports = router;

const ctrl = require('./home.ctrl');

/*============== 로그인 페이지 ==============*/
router.get('/',ctrl.views.signin);
router.post('/',ctrl.process.signin);

/*============== 회원가입 페이지 ==============*/
router.get('/signup',ctrl.views.signup);

router.post('/register', (req,res)=>{
    console.log(req);
})
