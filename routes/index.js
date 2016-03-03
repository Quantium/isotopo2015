var express = require('express');
var router = express.Router();
var contact = require('./contact');
var metrics = require('datadog-metrics');
metrics.init({ host: 'isotopo', prefix: 'website_' });

router.get('/', function(req, res, next) {
  var options = {
    title: 'Isotopo'
  };
  res.render('index', { title: 'Isotopo' });
  metrics.increment('pageview.index');
});

router.post('/contact', contact.post);


module.exports = router;
