var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var hostelallot=require('../models/hostelallot');

router.use(bodyParser.json());
/* GET users listing. */
router.get('/',async(req,res)=> {
  let row = await hostelallot.findAll();
  console.log(row);
  res.json(row);
});
module.exports = router;
