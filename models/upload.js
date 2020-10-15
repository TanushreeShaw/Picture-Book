const mongoose = require('mongoose');

mongoose.connect("<database url>", { useNewUrlParser:true, useUnifiedTopology:true })

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback() {
    console.log("db connected");
});

var uploadSchema = new mongoose.Schema({
    imagename: String
})

var uploadModel = mongoose.model('image', uploadSchema)

module.exports = uploadModel;