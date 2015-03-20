module.exports.post = function post (req, res, next) {
  var options = {
    msg: 'Isotopo'
  };
  res.json({ request: req.body });
};
