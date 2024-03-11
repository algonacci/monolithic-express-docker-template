const express = require("express");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const path = require("path");

const app = express();
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

const indexRouter = require("./routes/index/index.router");

app.use("/", indexRouter);

const notFoundHandler = require("./middlewares/errors");
app.use(notFoundHandler);

module.exports = app;
