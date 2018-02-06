var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var BASE_URL = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Skyzlimitz';
var API_OPTIONS = {
    headers: {
        accept: 'application/json',
        'X-Riot-Token': 'RGAPI-233dd092-abfe-49f2-b5f9-77357a82d822'
    },
};
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (app.get('env') === 'development') {
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
}
else {
    app.listen(8080, function () {
        console.log('Example app listening on port 8080!');
    });
}
module.exports = app;
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/champions', function(req, res) {
    const https = require("https");
const url =
  "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/Skyzlimitz/?api_key=RGAPI-d7ec28fd-84ec-44ec-89ef-0f3d4e10bc50";
req =https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(
      body
    );
  });
});
req.setHeader('X-Riot-Token', 'RGAPI-d7ec28fd-84ec-44ec-89ef-0f3d4e10bc50')
  });