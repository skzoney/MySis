const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSchema = new Schema({
  userName: {type: String, require: true},
  dateSet: {type: Date, require: true},
});

const timeSetDate = mongoose.model('calendar_set', timeSchema);

module.exports = timeSetDate;