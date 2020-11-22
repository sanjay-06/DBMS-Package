var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
const semmodal = require('../models/semmodel');
const { route } = require('./pay');
var express = require('express');
var sequelize=require('../connection/dbconnection');
var {QueryTypes}=require('sequelize');
router.use(bodyParser.json());

router.get('/:id',async(req,res)=> {
  let row = await semmodal.findAll({where:{StudentId:req.params.id}});
  console.log(row);
  res.json(row);
  res.send(200).end();
});
router.get('/:id/cgpa',async(req,res)=> {
  let row=await sequelize.query("select StudentId,TRUNCATE(sum(credit*Gradepoint)/sum(credit),2) as cgpa,Result from semresults where StudentId='"+req.params.id+"'", { type: QueryTypes.SELECT });
  console.log(row);
  res.json(row);
  res.send(200).end();
});

module.exports = router;
