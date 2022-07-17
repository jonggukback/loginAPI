"use strict";

const express = require('express') // express
const app = express(); // express
app.use(express.urlencoded({extended: true})); // body-parse
app.set('view engine', 'ejs'); // ejs
app.set('views', './src/views'); // ejs

const home = require("./src/routes/home") // 라우팅
app.use('/',home); // 미들웨어

module.exports = app;
