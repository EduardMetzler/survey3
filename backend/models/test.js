const mongoose = require('mongoose');

var test = mongoose.model('test',{
    theme:{type:String},
  
}) 

module.exports = {test}