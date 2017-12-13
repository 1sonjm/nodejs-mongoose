var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    publishedDate: { type: Date, default: Date.now  }
}//, { collection: 'COLLECTION_NAME' } // if custom collection name want use
);

module.exports = mongoose.model('book', bookSchema);
