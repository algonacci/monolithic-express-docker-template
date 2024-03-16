const express = require("express");
const router = express.Router();

// Middleware
const compression = require("compression");
const cache = require('./../../middlewares/cache')
const limit = require("./../../middlewares/rateLimiter")

// Controller
const index = require("./index.controller");

// Routes
router.route("/").get(index.getIndexPage);

// // EXAMPLE TO USE MIDDLEWARE CACHE/COMPRESSION/LIMITER, Delete/Adjust if understand
// router.route("/test").get(limit(10) ,index.helloIndex); //Set limiter 10 request/minutes
// router.route("/test").get(compression(), cache('1 minutes'),index.getData); //Set compression and cache


module.exports = router;
