const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const Connection = require('mysql/lib/Connection');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'note',
    port: 3306,
});



app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())

app.get('/',function(req, res, next) {
    // res.send("API is working properly");
    let queryString = 'select * from notelist';
    pool.getConnection((err,connection) => {
        if(err) throw err;
        connection.query(queryString,(err,rows) =>{
            if(err) throw err;
            res.json(rows);
        })
    });
});

app.post('/', function(req,res){
    // const {note} = req.body;
    const notes = req.body.data;
    console.log(notes);

    let queryString = 'insert into notelist set note = ?';
    pool.getConnection((err,connection) => {
        if(err) throw err;
        connection.query(queryString,[notes],(err,rows) =>{
            if(err) console.log(err);
            console.log(notes+"inserted");
        })
    });
    res.status(200);
});

app.listen(3004);