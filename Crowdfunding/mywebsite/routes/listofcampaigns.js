var express = require('express');
const Campaign = require('../models/campaigns');
var router = express.Router();

/* GET listing. */
router.get('/', function(req, res, next) {
  //es.send('respond with a resource');
  //res.render('campaign',{title:"List"})
  Campaign.find({}, function(err, rows){
    console.log(rows)
  res.render('listofcampaigns',{title:"Create Campaign", listCampaigns:rows})
});
});



module.exports = router;
