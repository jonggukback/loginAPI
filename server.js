const express = require('express') // express
const app = express(); // express
app.use(express.urlencoded({extended: true})); // body-parse
const MongoClient = require('mongodb').MongoClient; // mongodb
app.set('view engine', 'ejs'); // ejs

/*============== MongoDB 연결 ==============*/
let memberDB
MongoClient.connect('mongodb+srv://admin:12qwaszx@cluster0.q2bjw.mongodb.net/test?retryWrites=true&w=majority', 
(err, client)=>{
    if (err) return console.log(err);

    memberDB = client.db('member');

    app.listen('8080', function(){
        console.log('listening on 8080')
    });
})

/*============== 로그인 페이지 ==============*/
app.get('/',(req,res)=>{
    res.render('login.ejs');
})

/*============== 회원가입 페이지 ==============*/
app.get('/signup',(req,res)=>{
    res.render('signup.ejs');
})

app.post('/register', (req,res)=>{
    console.log(req);
    res.redirect('/signup');
})