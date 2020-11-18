var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var hostelfee=require('../models/hostelfeemodel');

router.use(bodyParser.json());
/* GET users listing. */
router.get('/',async(req,res)=> {
  let row = await hostelfee.findAll();
  console.log(row);
  res.json(row);
});
module.exports = router;
