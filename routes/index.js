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

// Show page
router.get("/blogs", (req, res, next) => {
	res.render("blog/index", {
		title: "Blogs",
		styles: {
			cdn: ["https://unpkg.com/aos@2.3.1/dist/aos.css"]
		},
		scripts: ["https://unpkg.com/aos@2.3.1/dist/aos.js", "/javascripts/scroll-transition.js"]
	});
});

// Create new Blog
router.get("/blogs/new", (req, res, next) => {
	res.render("blog/new", {
		title: "Create New Blog",
	})
});

//Add New Blog to Database
router.post("/blogs", (req, res, next) => {
	blogDB.create(req.body, (err, blog) => {
		if(err || !blog) {
			console.log(err, blog);
		} else {
			console.log(blog);
		}
	})
	// res.send(req.body);
});

module.exports = router;
