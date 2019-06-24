const express = require("express");
const router = express.Router();
const blogDB = require("../models/blog");

/* GET home page. */
router.get("/", (req, res, next) => {
	res.render("index", {
		title: "Blog Post",
		styles: {
			custom: ["/stylesheets/slider.css"]
		}
	});
});

module.exports = router;
