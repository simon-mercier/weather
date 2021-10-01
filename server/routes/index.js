var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  next(createError(404));
});

module.exports = router;
