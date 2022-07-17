"use strict";

const app = require('../app');
const PORT = 8080; // port 번호

app.app.listen(PORT, function(){
    console.log('listening on 8080')
});