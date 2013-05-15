
/*
 * GET home page.
 */

exports.user = require("./user");

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

