var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feature2Schema = new Schema({
    text: String,
});

var Feature2 = mongoose.model('Feature2', feature2Schema);
module.exports = Feature2;