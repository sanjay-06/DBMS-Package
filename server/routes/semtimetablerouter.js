var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
const semtimetable = require('../models/semtimetablemodel');

router.use(bodyParser.json());
/* GET users listing. */
router.get('/',async(req,res)=> {
  let row = await semtimetable.findAll();
  console.log(row);
  res.json(row);
});
module.exports = router;
