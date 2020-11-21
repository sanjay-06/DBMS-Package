var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
const mark1 = require('../models/markmodel1');
const mark2 = require('../models/markmodel2');
router.use(bodyParser.json());
/* GET users listing. */
router.get('/:id/tmarks',async(req,res)=> {
  let row1 = await mark1.findAll({where:{StudentId:req.params.id}});
  console.log(row1);
  res.json(row1);
});
router.get('/:id/lmarks',async(req,res)=> {
  let row2 = await mark2.findAll({where:{StudentId:req.params.id}});
  console.log(row2);
  res.json(row2);
});
module.exports = router;