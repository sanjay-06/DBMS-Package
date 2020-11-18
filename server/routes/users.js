var express = require('express');
var router = express.Router();
var user=require('../models/usermodel');

/* GET users listing. */
router.post('/',async(req,res)=> {
  console.log(req.body);
  let row = await user.findOne({where:{StudentId:req.body.username}});
  let row1 = await user.findOne({where:{Student_Password:req.body.password}});
  if(!row)
	{
		res.status(404).end();
		return;
  }
  if(!row1)
	{
		res.status(404).end();
		return;
  }
  res.status(200).end();
  console.log(row);
});
module.exports = router;