var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ImageSchema = new Schema({
  ImageURL:{type: String,required: true},
  Title:{type: String,required: true},
  Content:{type: String,required: true},
  Heading:{type: String,required: true},

});

mongoose.model('Image',ImageSchema);