var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var sequelize=require('../connection/dbconnection');
var {QueryTypes}=require('sequelize');
router.use(bodyParser.json());
/* GET users listing. */
router.get('/:id/tmarks',async(req,res)=> {
  const row = await sequelize.query("select t.StudentId,t.subjectId,t.CA1_Mark,t.CA2_Mark,t.Assignment_Mark,t.Tutorial_Mark from tmarks t,subjects s where s.staffid='"+req.params.id+"'AND s.subjectid=t.subjectid group by (t.studentid)", { type: QueryTypes.SELECT });
  console.log(row);
  res.json(row);
}); 
router.get('/:id/lmarks',async(req,res)=> {
  const row = await sequelize.query("select t.StudentId,t.subjectId,t.Lab1_Mark,t.Lab2_Mark,t.LabFinal_Mark,t.Package_Mark from lmarks t,subjects s where s.staffid='"+req.params.id+"'AND s.subjectid=t.subjectid group by (t.studentid)", { type: QueryTypes.SELECT });
  console.log(row);
  res.json(row);
});
module.exports = router;