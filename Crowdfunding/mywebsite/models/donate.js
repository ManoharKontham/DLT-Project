const mongoose = require("mongoose")

const DonateSchema = mongoose.Schema({
   campaigname: {
      type: "String"
     },
     
   donationAmount : {
      type: "String"
     }
   
})

module.exports = mongoose.model("Donate", DonateSchema)