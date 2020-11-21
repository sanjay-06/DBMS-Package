var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var sequelize=require('../connection/dbconnection');
var {QueryTypes}=require('sequelize');
router.use(bodyParser.json());
/* GET users listing. */
router.post('/:id',async(req,res)=> {
  await sequelize.query("UPDATE payments SET  PaymentStatus = 'PAID' WHERE StudentId='"+req.params.id+"'", { type: QueryTypes.SELECT })
  res.send(200).end();
});
module.exports = router;
