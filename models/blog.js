const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	name: String,
	image: String,
	category: String,
	description: String
});

const blog = mongoose.model("blog", blogSchema);

module.exports = blog;
