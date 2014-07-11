exports.index = function(req, res) {
  res.render('index');
  console.log(req.session);
 }