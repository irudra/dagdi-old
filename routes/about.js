var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	console.log('Inside About page');
	var errors = [];
	res.render('about',{
		errors:errors
	});
});

module.exports = router;