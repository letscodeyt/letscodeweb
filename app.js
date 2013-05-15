
/**
 * Module dependencies.
 */

var express = require('express');
var swig = require('swig');
var cons = require('consolidate');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({
	src: __dirname + '/public'
}));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', routes.user.list);


// handle general errors
/*app.error(function(err, req, res, next) {
	console.log(err);
	res.status(500);
	res.render('error-500', {
		title: "Error 500",
		error: err
	});
});*/
// fixme: error handler

// handle 404 errors - last route so no others caught the path
app.use(function(req, res, next) {
	console.log(req)
	res.status(404);
	res.render('error-404', { title: "Error 404", url: req.url })
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
