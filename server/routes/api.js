var express = require("express");
require("dotenv").config();
var request = require("request");
var router = express.Router();

router.post("/", function (req, res, next) {
  request(req.body.url, function (error, response, body) {
    res.send(body);
  });
});

router.post("/google", async function (req, res, next) {
  request(
    req.body.url + process.env.GOOGLE_API_KEY,
    function (error, response, body) {
      res.send(body);
    }
  );
});

router.post("/openweathermap", async function (req, res, next) {
  request(
    req.body.url + process.env.OPEN_WEATHER_API_KEY,
    function (error, response, body) {
      res.send(body);
    }
  );
});
module.exports = router;
