var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
const paymodel = require('../models/paymodel');

router.use(bodyParser.json());
/* GET users listing. */
router.get('/:id',async(req,res)=> {
  console.log("hello")
  let row = await paymodel.findAll({where:{StudentId:req.params.id}});
  console.log(row);
  res.json(row);
});
module.exports = router;
