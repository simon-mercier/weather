var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  next(createError(404));
});

router.get("/google", function (req, res, next) {
  next(createError(404));
});

router.get("/openweathermap", function (req, res, next) {
  next(createError(404));
});
module.exports = router;
