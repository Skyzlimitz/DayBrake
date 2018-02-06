var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const https = require("https");
const url =
  "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Skyzlimitz/?api_key=RGAPI-d7ec28fd-84ec-44ec-89ef-0f3d4e10bc50";
req =https.get(url, response => {
  response.setEncoding("utf8");
  let body = "";
  response.on("data", data => {
    body += data;
  });
  response.on("end", () => {
    body = JSON.parse(body);
    res.send(
      body
    );
  });
});
});

module.exports = router;
