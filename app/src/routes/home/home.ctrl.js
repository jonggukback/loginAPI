"use strict";

const signin = (req,res) => {
    res.render('home/login');
};

const signup = (req,res)=>{
    res.render('home/signup');
};

module.exports = {
    signin,
    signup,
};