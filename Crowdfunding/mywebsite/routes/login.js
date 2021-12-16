var express = require('express');
const login = require('../models/login');
var router = express.Router();
const User = require('../models/users');
const Campaign = require('../models/campaigns');

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('index',{title: "Login Page"})
});


router.post('/',function(req,res,next){
  var email = req.body.email;
  var password = req.body.password;
  // CAll DB and fetech ur password and emial
  User.find({'email_address': email}, function(err, rows){
    console.log(rows[0].password)
    if (rows[0].password.toString().trim() === password){
      Campaign.find({}, function(err, rows){
        console.log(rows)
      res.render('listofcampaigns',{title:"Create Campaign", listCampaigns:rows})
    });
      //res.render('listofcampaigns',{title:"Welcome to CROWD FUNDING", listCampaigns:[]})
    }else{
      res.send("Wrong Password")
    }
  });
  
});

module.exports = router;