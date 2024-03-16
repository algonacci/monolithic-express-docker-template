const path = require("path");
const express = require("express");
const morgan = require("morgan");
const nunjucks = require("nunjucks");

const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

// Routes
const indexRouter = require("./routes/index/index.router");

app.use("/", indexRouter);

// Routes Not Found
const notFoundHandler = require("./middlewares/errors");
app.use(notFoundHandler);

module.exports = app;
