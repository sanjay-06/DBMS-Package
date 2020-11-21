var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
const mark = require('../models/markmodel');
router.use(bodyParser.json());
/* GET users listing. */
router.get('/:id',async(req,res)=> {
  let row = await mark.findAll({where:{StudentId:req.params.id}});
  console.log(row);
  res.json(row);
});
module.exports = router;