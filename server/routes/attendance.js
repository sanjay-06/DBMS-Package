var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
const attendance = require('../models/attendancemodel');

router.use(bodyParser.json());
/* GET users listing. */
router.get('/:id',async(req,res)=> {
  let row = await attendance.findAll({where:{StudentId:req.params.id}});
  console.log(row);
  res.json(row);
});
module.exports = router;
