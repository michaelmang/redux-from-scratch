var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var streamSchema = new Schema({
  image: String,
  name: String,
  viewers: Number
});

var Streams = mongoose.model('Streams', streamSchema);

module.exports = Streams;
