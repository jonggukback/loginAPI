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
router.post('/signup', ctrl.process.signup);

/*============== 마이 페이지 ==============*/
router.get('/mypage',ctrl.views.mypage);