var user=require('../models/usermodel');
var fee=require('../models/feesmodel');
var attendance=require('../models/attendancemodel');
var marks=require('../models/markmodel');
const hostelfee = require('../models/hostelfeemodel');
const hostelallot = require('../models/hostelallot');
const semtimetable = require('../models/semtimetablemodel');

function init()
{
    await user.sync();
    await fee.sync();
    await attendance.sync();
    await marks.sync();
    await hostelfee.sync();
    await hostelallot.sync();
    await semtimetable.sync();
}

init();
