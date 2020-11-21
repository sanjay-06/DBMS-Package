var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
const semmodal = require('../models/semmodel');

router.use(bodyParser.json());

router.get('/:id',async(req,res)=> {
  let row = await semmodal.findAll({where:{StudentId:req.params.id}});
  console.log(row);
  res.json(row);
});
module.exports = router;
