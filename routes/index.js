var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var options = {
    title: 'Isotopo'
  };
  res.render('index', { title: 'Isotopo' });
});

module.exports = router;
