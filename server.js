const mongoose = require('mongoose');
const app = require('./app');
// const url = process.env.MONGODB_URI;
const url = "mongodb+srv://skzoney:PWIuYNiogIYbldz4@cluster0.vinm9oq.mongodb.net/?retryWrites=true&w=majority"
// const url = "mongodb://localhost:27017/"
mongoose.connect(url, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
