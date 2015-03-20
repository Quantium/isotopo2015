var express = require('express');
var router = express.Router();
var contact = require('./contact');

router.get('/', function(req, res, next) {
  var options = {
    title: 'Isotopo'
  };
  res.render('index', { title: 'Isotopo' });
});

router.post('/contact', contact.post);


module.exports = router;
