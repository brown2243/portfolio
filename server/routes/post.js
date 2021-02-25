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

router.route("/detail").post(async (req, res, next) => {
  try {
    const post = await Post.find({ _id: req.body.id });
    console.log("post는", post);
    res.status(200).json(post[0]);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.route("/detail/update").patch(async (req, res, next) => {
  try {
    const post = await Post.update(
      { _id: req.body.id },
      { title: req.body.title, content: req.body.content }
    );
    console.log("update Post", post);
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
router.route("/detail/delete").post(async (req, res, next) => {
  try {
    const post = await Post.deleteOne({ _id: req.body.id });
    console.log("delete Post", post);
    res.status(200).json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
