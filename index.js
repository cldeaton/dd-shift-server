var express    = require("express"),
    app        = express(),
    shiftBy    = require("dd-shiftby"),
    bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//GET request
app.get('/shift', function (req, res){
  var arr = [1,2,3];
  res.send('Welcome to the shift server. Here we will shift an array usign dd-shiftby. ' + arr + ('  and the shifted array: ') + arr.shiftBy(1));
});

// POST request
app.post('/shift', function (req, res){
  var array = req.body.array;
  var amount = req.body.amount;
  res.send(array.shiftBy(amount));
});

// Error Handling



//listening Route
app.listen(process.env.PORT || 4000, function(){
    var port = process.env.PORT || 4000;
    console.log("Server has started on port " + port + "!!");
});
