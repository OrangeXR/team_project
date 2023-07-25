const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Set up body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb+srv://TAMUSAwad:DBpassword1@webapplicationdevelopme.la1fec2.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a mongoose schema and model for your data (e.g., a simple 'Item' model)
const itemSchema = new mongoose.Schema({
  state: String,
  plateNumber: String,
});

const Item = mongoose.model('Item', itemSchema);

// Start the server
const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});






























const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')

const app = express()
app.use(express.json())

let db

connectToDb((err) => {
    if(!err) {
        app.listen(3030, () => {
            console.log('app listening on port 3030')
        })
        db = getDb()
    }
})
 
const uri = "mongodb+srv://TAMUSAwad:DBpassword1@webapplicationdevelopme.la1fec2.mongodb.net/";

app.post('', (req, res) => {

})

const sch={
    state:String,
    plateNumber:String
  }
  const monmodel = mongoose.model("violation", sch);
  
  
  
  client.db("finalProject").collection("violation").find(
    {
        state: { $gte: ca },
        plateNumber: { $gte: 1111111 }
    }
  );
  
  
  