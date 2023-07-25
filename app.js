const express = require('express')
const bodyParser = require("body-parser")
const ejs = require('ejs')
const mongoose = require('mongoose')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(express.static("public"))

// const uri = "mongodb+srv://TAMUSAwad:DBpassword1@webapplicationdevelopme.la1fec2.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB database
mongoose.connect('mongodb+srv://TAMUSAwad:DBpassword1@webapplicationdevelopme.la1fec2.mongodb.net/finalProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});




// Data Schema
const violationsSchema = { 
  state: String, 
  plateNumber: String, 
  date: String, 
  location: String, 
  infraction: String,
  blank: String,
}

const Violation = mongoose.model('Violation', violationsSchema);


app.get('/', (req, res) => {
  Violation.find({}, function(err, violations){
    res.render('employees', {
      violationsList: violations
    })
  })
})



app.get("/", function(req, res) { res.sendFile(__dirname + "/employees.ejs") })

app.post("/", function(req, res){ let newViolation = new Violation({ 
  state: req.body.state, 
  plateNumber: req.body.platenumber, 
  date: req.body.date, 
  location: req.body.location, 
  infraction: req.body.infraction }); 
  newViolation.save(); res.redirect('/'); })

// Links
app.get('/', (req, res) => { 
  res.render('index'); 
})

app.get('/about', (req, res) => { 
  res.render('about'); 
})

app.get('/contact', (req, res) => { 
  res.render('contact'); 
})

app.get('/lookup', (req, res) => { 
  res.render('lookup'); 
})
    
app.get('/employees', (req, res) => { 
  res.render('employees.ejs'); 
})

app.get('/', function(req, res) { 
  res.sendFile(__dirname + "/employees.ejs") 
})




// Start the server
const port = 2020;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});











