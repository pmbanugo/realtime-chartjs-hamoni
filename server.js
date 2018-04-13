var express = require("express");
var bodyParser = require("body-parser");
var Hamoni = require("hamoni-sync");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let voteData = [
  { candidate: "Peter Mbanugo", vote: 0 },
  { candidate: "Angela Daniels", vote: 0 },
  { candidate: "Rose Philly", vote: 0 },
  { candidate: "James Crump", vote: 0 }
];

let statePrimitive;

app.post("/vote", function(req, res) {
  var voterId = req.body.voterId;
  var candidate = req.body.candidate;
  console.log(candidate);

  //TODO: save vote to a database

  //Update vote chart state
  voteData.forEach(data => {
    if (data.candidate === candidate) data.vote = data.vote + 1;
  });

  console.log(voteData);
  state.update(voteData);

  res.sendStatus(201);
});

app.use(express.static(__dirname + "/public"));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`app listening on port ${port}!`);
});

let hamoni = new Hamoni("ACCOUNT_ID", "APP_ID");

hamoni
  .connect()
  .then(() => {
    console.log("connected to Hamoni sync");
    createState();
  })
  .catch(console.log);

function createState() {
  hamoni
    .createObject("election", voteData)
    .then(statePrimitive => {
      console.log("election state created");
      state = statePrimitive;
    })
    .catch(error => console.log(error) || getState());
}

function getState() {
  hamoni
    .get("election")
    .then(statePrimitive => {
      console.log("election state retrieved");
      state = statePrimitive;
      voteData = statePrimitive.get();
    })
    .catch(console.log);
}
