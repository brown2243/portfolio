const express = require("express");
const User = require("../schemas/user");
const Comment = require("../schemas/comment");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const SECRET_TOKEN = require("../jwt");

router.route("/login").post(async (req, res, next) => {
  try {
    const user = await User.find({ id: req.body.id });
    console.log(user);
    if (user[0] !== undefined) {
      if (bcrypt.compareSync(req.body.pwd, user[0].pwd)) {
        // 여기서 jwt코인 발급해줘야함
        console.log("jwt");
        const token = jwt.sign({ userID: user._id }, SECRET_TOKEN, {
          expiresIn: "7d",
        });

        res.json(user);
      } else res.send("비밀번호 오류");
      // res.status(500).json({ error: "아이디 오류" });
    } else {
      res.send("아이디가 없음");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.route("/user").post(async (req, res, next) => {
  try {
    const encryptedPassowrd = bcrypt.hashSync(req.body.pwd, 10); // sync
    const user = await User.create({
      id: req.body.id,
      pwd: encryptedPassowrd,
      name: req.body.name,
      age: req.body.age,
    });
    console.log(user);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/:id/comments", async (req, res, next) => {
  try {
    const comments = await Comment.find({ commenter: req.params.id }).populate(
      "commenter"
    );
    console.log(comments);
    res.json(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
