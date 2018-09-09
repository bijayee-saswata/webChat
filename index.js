var express = require('express');
var app = express();

var server = app.listen(5000, function () {
  console.log("listening to port 5000");
});

app.use(express.static('public'));
