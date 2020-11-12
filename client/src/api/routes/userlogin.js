var express=require('express');
var mysql = require('mysql');
var Sequelize=require('sequelize');
var router=express.Router();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "ecampus"
  });
router.post("/",function(req,res,next){
    con.connect(function(err) {
        if (err) throw err;
        con.query("select * from studentslogin", function (err, result, fields) {
          if (err) throw err;
          res.json(result);
        });
      });
});
module.exports=router;