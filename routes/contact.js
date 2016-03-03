var metrics = require('datadog-metrics');
metrics.init({ host: 'isotopo', prefix: 'website_' });
module.exports.post = function post (req, res, next) {
  var options = {
    msg: 'Isotopo'
  };
  res.json({ request: req.body });
  metrics.increment('pageview.contact_form');
};
