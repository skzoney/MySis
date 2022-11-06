const mongoose = require('mongoose');
const app = require('./app');
const url = process.env.MONGODB_URI;
// const url = "mongodb://localhost:27017/mydb"
mongoose.connect(url, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
