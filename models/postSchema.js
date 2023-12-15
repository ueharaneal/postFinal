const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    postId: {type: String},
    volCodeArray: [[{type: Number}]],
    volCodeIndex: {type: Number},
    durCodeArray:[[{type: Number}]],
    durCodeIndex: {type: Number},
    adminCode: {type:String}
})

const Post =  mongoose.model('Post', postSchema);



module.exports = postSchema;