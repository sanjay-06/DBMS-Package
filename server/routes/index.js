var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie.id='hello'
  console.log(req.cookies['id'])
  res.send();
});

module.exports = router;
