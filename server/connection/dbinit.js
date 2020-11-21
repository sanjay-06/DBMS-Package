var user=require('../models/usermodel');
var fee=require('../models/feesmodel');
var attendance=require('../models/attendancemodel');
var marks1=require('../models/markmodel1');
var marks2=require('../models/markmodel2');
const hostelfee = require('../models/hostelfeemodel');
const hostelallot = require('../models/hostelallot');
const semtimetable = require('../models/semtimetablemodel');
const staffUser =require('../models/staffmodel');
const semmodel=require('../models/semmodel');
const paystatus=require('../models/paymodel');
const studmodel=require('../models/studmodel')

function init()
{
    await user.sync();
    await fee.sync();
    await attendance.sync();
    await marks1.sync();
    await marks2.sync();
    await hostelfee.sync();
    await hostelallot.sync();
    await semtimetable.sync();
    await staffUser.sync();
    await semmodel.sync();
    await paystatus.sync();
    await studmodel.sync();
}

init();
