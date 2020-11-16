var user=require('../models/usermodel');
var fee=require('../models/feesmodel');
function init()
{
    await user.sync();
    await fee.sync();
}

init();
