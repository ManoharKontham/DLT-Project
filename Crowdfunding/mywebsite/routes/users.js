var express = require('express');
const User = require("../models/users") 
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post("/", async (req, res) => {
  const user = new User({
	  email_address: req.body.email_address,
    password: req.body.password,
    ethereum_address : req.body.ethereum_address,
    aadhar_number : req.body.aadhar_number,
    phone_number : req.body.phone_number
	})
  try{
    await user.save()
    res.send(user)
  }
  catch(error){
    
    res.send("failed")
  }
})

module.exports = router;
