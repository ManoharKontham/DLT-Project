const mongoose = require("mongoose")

const loginSchema = mongoose.Schema({
	email_address: {
       type: "String",
       unique: true
    },
	password: {
        type: "String",
        unique: true
     }
})

module.exports = mongoose.model("login", loginSchema)