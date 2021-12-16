const mongoose = require("mongoose")

const schema = mongoose.Schema({
	Username: String,
	Password: String,
   
})

module.exports = mongoose.model("Users", schema)