const express = require("express");
const Post = require("../schemas/post");
const Comment = require("../schemas/comment");
const router = express.Router();
const jwt = require("jsonwebtoken");
const SECRET_TOKEN = require("../jwt");

router.route("/write").post(async (req, res, next) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      writer: req.body.writer,
      content: req.body.content,
    });
    console.log(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.route("/post").post(async (req, res, next) => {
  try {
    const posts = await Post.find({});
    res
      .status(200)
      .json([posts.length, posts.slice(posts.length - 4, posts.length)]);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
router.route("/post/part").post(async (req, res, next) => {
  try {
    const postAll = await Post.find({});
    const postSliced = postAll.slice(req.body.start, req.body.end);
    res.status(200).json(postSliced);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
