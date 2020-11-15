var express = require('express');
var router = express.Router();
var user=require('../models/usermodel');

/* GET users listing. */
router.post('/',async(req,res)=> {
  console.log(req.body);
  let row = await user.findOne({where:{username:req.body.username}});
  if(!row)
	{
		console.log("Invalid username");
		res.status(404).end();
		return;
  }
  res.status(200).end();
  console.log(row);
});
module.exports = router;
