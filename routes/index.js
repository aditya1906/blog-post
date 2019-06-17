const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
	res.render("index", {
		title: "Blog Post",
		styles: {
			custom: ["/stylesheets/slider.css"]
		}
	});
});

router.get("/blogs", (req, res, next) => {
	res.render("blog/index", {
		title: "Blogs",
		scripts: ["/javascripts/scroll-transition.js"]
	});
});

module.exports = router;
