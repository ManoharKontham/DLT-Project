const mongoose = require("mongoose")

const schema = mongoose.Schema({
	email_address: {
       type: "String"
    },
    password: {
        type: "String"
     },
    ethereum_address: {
        type: "String",
        unique : true
     },
    aadhar_number : {
        type: "String",
        unique : true
     },
    phone_number : {
        type: "String",
        unique : true
     }
})

module.exports = mongoose.model("Users", schema)