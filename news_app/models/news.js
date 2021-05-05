const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: String,
        default: new Date().toString()
    }
});

exports.News = mongoose.model('news', newsSchema)
