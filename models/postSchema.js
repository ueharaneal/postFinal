const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    postId: {type: String},
    volCodeArray: [[{type: Number}]],
    volCodeIndex: {type: Number},
    durCodeArray:[[{type: Number}]],
    durCodeIndex: {type: Number},
    adminCode: {type:String}
})

module.exports = mongoose.model('Post', postSchema);

