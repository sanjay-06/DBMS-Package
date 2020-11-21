var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
const model = require('../models/studmodel');

router.use(bodyParser.json());

router.get('/',async(req,res)=> {
  let row = await model.findAll();
  console.log(row);
  res.json(row);
});
module.exports = router;
