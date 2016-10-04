var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feature1Schema = new Schema({
    text: String,
});

var Feature1 = mongoose.model('Feature1', feature1Schema);
module.exports = Feature1;