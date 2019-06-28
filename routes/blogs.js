const express = require("express");
const router = express.Router();
const blogDB = require("../models/blog");
const categoryIcons = require("../data/category-icon");

// Index page
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

// New Blog Form
router.get("/new", (req, res, next) => {
	res.render("blog/new", {
		title: "Create New Blog",
		styles: {
			custom: ["/stylesheets/materialize-select.css"]
		},
		scripts: ["/javascripts/materialize-select.js"]
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

router.get("/:id", async (req, res, next) => {
	let foundBlog;
	try {
		foundBlog = await blogDB.findById(req.params.id);
	} catch (error) {
		next(error);
	}
	return !foundBlog
		? next(new Error("Blog not found"))
		: res.render("blog/show", {
				title: foundBlog.name,
				foundBlog,
				categoryIcon: categoryIcons[foundBlog.category]
		  });
});

module.exports = router;
