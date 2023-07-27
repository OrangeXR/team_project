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
mongoose.Promise = global.Promise; 
const itemSchema = new mongoose.Schema({
  state: String,
  plateNumber: String,
});

const Item = mongoose.model('Item', itemSchema);


// Start the server
const port = 2020;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



