const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/task-li', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 console.log("Mongo db is running");
 
});

module.exports = db;