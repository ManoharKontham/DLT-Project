var express = require('express');
const Campaign = require('../models/campaigns');
var router = express.Router();

/* GET listing. */
router.get('/', function(req, res, next) {
  //es.send('respond with a resource');
  Campaign.find({}, function(err, rows){
      console.log(rows)
    res.render('campaign',{title:"Create Campaign"})
  });
  
});


router.post("/", async (req, res) => {
    const campaign = new Campaign({
        id: req.body.id,
        campaigname: req.body.campaigname,
        username : req.body.username,
        startDate : req.body.startDate,
        totalAmount : req.body.totalAmount,
        deadline : req.body.deadline,
        ethereumAddress : req.body.ethereumAddress
    })
    try{
        await campaign.save()
        res.send(campaign)
    }
    catch(error){
        res.send("failed")
    }
})

module.exports = router;
