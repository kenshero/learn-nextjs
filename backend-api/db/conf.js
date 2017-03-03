var mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/learnnextjs');
// Connection URL
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB Connected");
});

var Posts = mongoose.model('posts', {
    title: String,
    content: String
});

module.exports = {
    Posts
}