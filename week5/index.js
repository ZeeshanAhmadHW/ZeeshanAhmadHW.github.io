const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const app = express();
const path = require('path');
const db = mysql.createConnection({host:process.env.DATABASE_HOST,user:process.env.DATABASE_USER
                                  ,password:process.env.DATABASE_PASSWORD,database:process.env.DATABASE});
dotenv.config({path:'./.env'});
const pubDir = path.join(__dirname,'./public');
const port = 5000;

db.connect((error)=>{
    if (error){
        console.log(error)
    }else{
        console.log('mysql connected...')
    }
});

app.use(express.static(pubDir));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.set('view engine','hbs');

app.use('/',require('./routes/pages'));
app.use('/auth',require('./routes/auth'));

app.listen(port, () => {
    console.log(`server started on port ${port}`)
});