var express = require('express');
var router = express.Router();
var user=require('../models/staffmodel');

/* GET users listing. */
router.post('/',async(req,res)=> {
  console.log(req.body);
  let row = await user.findOne({where:{StaffId:req.body.username}});
  let row1 = await user.findOne({where:{Password:req.body.password}});
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