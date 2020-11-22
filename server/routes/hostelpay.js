var express = require('express');
var router = express.Router();
var bodyParser=require('body-parser');
var sequelize=require('../connection/dbconnection');
var {QueryTypes}=require('sequelize');
router.use(bodyParser.json());
function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }
/* GET users listing. */
router.post('/:id/update',async(req,res)=> {
  await sequelize.query("UPDATE HostelStatus SET  Status = 'PAID' WHERE StudentId='"+req.params.id+"'", { type: QueryTypes.SELECT })
  res.send(200).end();
});
router.post('/:id/update/rooms',async(req,res)=> {
    const rand= between(1, 40);
    console.log(rand);
    await sequelize.query("INSERT INTO hostels(StudentId,Block, RoomNo) VALUES ('"+req.params.id+"',"+"'b'"+","+rand+")", { type: QueryTypes.SELECT })
    await sequelize.query("UPDATE students SET ResidentStatus='Hosteller' WHERE StudentId='"+req.params.id+"'", { type: QueryTypes.SELECT })
    res.send(200).end();
  });
router.get('/:id',async(req,res)=> {
    const row=await sequelize.query("SELECT * FROM HostelStatus WHERE StudentId='"+req.params.id+"'", { type: QueryTypes.SELECT })
    console.log(row);
    res.json(row).end()
  });
module.exports = router;
