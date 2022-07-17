"use strict";

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
    },
} 
module.exports = {
    views,
    process,
};