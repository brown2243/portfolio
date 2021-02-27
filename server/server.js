const express = require("express");
// const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

const connect = require("./schemas");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/post");

const app = express();

app.set("port", process.env.PORT || 5000);
connect();

app.use(morgan("dev"));
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/", indexRouter);
app.use("/board", cors("http://localhost:3000"), usersRouter);
app.use("/board", cors("http://localhost:3000"), postsRouter);

app.post("/", (req, res) => {
  res.send("hello express");
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
