var express = require('express');
const Campaign = require('../models/campaigns');
const Donate = require('../models/donate');
var router = express.Router();


/* GET listing. */
router.get('/', function(req, res, next) {
  //es.send('respond with a resource');
  res.render('donate',{title:"Donation"})
});


router.post("/", async (req, res) => {
    const donate = new Donate({
        id: req.body.id,
        campaigname: req.body.campaigname,
        donationAmount : req.body.donationAmount,
    });
    try{
        await donate.save()
        res.send("Donated Sucessfully")
    }
    catch(error){
        res.send("failed")
    }
});

module.exports = router;
