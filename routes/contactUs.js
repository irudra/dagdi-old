var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	console.log('Inside contactUs page');
	var errors = [];
	res.render('contactUs',{
		errors:errors
	});
});

module.exports = router;