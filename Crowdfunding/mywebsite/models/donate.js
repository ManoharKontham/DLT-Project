const mongoose = require("mongoose")

const DonateSchema = mongoose.Schema({
	id: {
       type: "String",
       unique: true
    },
	campaigname: {
        type: "String"
     },
   
     donationAmount : {
        type: "String"
     }
   
})

module.exports = mongoose.model("Donate", DonateSchema)