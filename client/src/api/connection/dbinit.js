var user=require('../models/usermodel');
function init()
{
    await user.sync();
}

init();
