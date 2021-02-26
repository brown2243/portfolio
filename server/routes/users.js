const express = require("express");
const User = require("../schemas/user");
const Comment = require("../schemas/comment");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const SECRET_TOKEN = require("../jwt");

// 토큰으로 로그인 유무 체크
router.route("/").post(async (req, res, next) => {
  try {
    const getTOKEN = req.body.token;
    const ObjID = jwt.verify(getTOKEN, SECRET_TOKEN).ObjID;
    const user = await User.find({ _id: ObjID });
    console.log(user);
    res.status(200).json(user[0]);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 로그인
router.route("/login").post(async (req, res, next) => {
  try {
    console.log("로그인");
    const user = await User.find({ id: req.body.id });

    if (user.length) {
      console.log("비밀번호 체크");
      if (bcrypt.compareSync(req.body.pwd, user[0].pwd)) {
        // 여기서 jwt코인 발급해줘야함
        console.log("jwt 발송");
        const token = jwt.sign({ ObjID: user[0]._id }, SECRET_TOKEN, {
          expiresIn: "1d",
        });
        res.json(token);
      } else res.status(200).send("비밀번호 오류입니다");
    } else {
      res.status(200).send("아이디가 존재하지 않습니다.");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 회원가입 (비밀번호는 bcrypt로 암호화)
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

// router.get("/:id/comments", async (req, res, next) => {
//   try {
//     const comments = await Comment.find({ commenter: req.params.id }).populate(
//       "commenter"
//     );
//     console.log(comments);
//     res.json(comments);
//   } catch (err) {
//     console.error(err);
//     next(err);
//   }
// });

module.exports = router;
