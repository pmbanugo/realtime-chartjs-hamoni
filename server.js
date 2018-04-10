var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/vote", function(req, res) {
  var voterId = req.body.voterId;
  var party = req.body.party;

  res.sendStatus(201);
});

app.use(express.static(__dirname + "/public"));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`app listening on port ${port}!`);
});
