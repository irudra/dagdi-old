var express = require('express');
var router = express.Router();
var request = require('request');

router.post('/', function(req, res){
    
    request.post({url:'http://192.168.1.3:8079/oauth/token?username=rohit&password=rohit&grant_type=password', headers:{'Accept':'application/json','Authorization':'Basic Y2xpZW50T25lOnBhc3N3b3JkT25l'}}, function callback(error, response, body){
        if (error){
            console.log(error);
            throw error;
        }
        console.log(response);
        var hello = JSON.parse(body);
        console.log("logged in user " + hello.access_token);
    });

    res.redirect("/");
});

module.exports = router;