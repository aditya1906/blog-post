const express = require("express");
const router = express.Router();
const blogDB = require("../models/blog");
const categoryIcons = require("../data/category-icon");

// Show page
router.get("/", async (req, res, next) => {
	let blogPosts;
	try {
		blogPosts = await blogDB
			.find({})
			.sort("-_id")
			.exec();
	} catch (error) {
		next(error);
	}
	res.render("blog/index", {
		title: "Blogs",
		blogPosts,
		categoryIcons,
		styles: {
			cdn: ["https://unpkg.com/aos@2.3.1/dist/aos.css"]
		},
		scripts: [
			"https://unpkg.com/aos@2.3.1/dist/aos.js",
			"/javascripts/scroll-transition.js"
		]
	});
});

// Create new Blog
router.get("/new", (req, res, next) => {
	res.render("blog/new", {
		title: "Create New Blog"
	});
});

//Add New Blog to Database
router.post("/", (req, res, next) => {
	blogDB.create(req.body, (err, blog) => {
		if (err || !blog) {
			console.log(err, blog);
		} else {
			console.log(blog);
			res.redirect("/blogs");
		}
	});
});

module.exports = router;
