var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	console.log('Inside Events page');
	var errors = [];
	res.render('events',{
		errors:errors
	});
});

module.exports = router;