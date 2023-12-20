const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    postId: {type: String},
    volCodeArray: [[{type: Number}]],
    volCodeIndexZero: {type: Number},
    volCodeIndexOne: {type: Number},
    volCodeIndexTwo: {type: Number},
    volCodeIndexThree: {type: Number},
    durCodeArray:[[{type: Number}]],
    durCodeIndexZero: {type: Number},
    durCodeIndexOne: {type: Number},
    durCodeIndexTwo: {type: Number},
    durCodeIndexThree: {type: Number},
    adminCode: {type:String}
})

module.exports = mongoose.model('Post', postSchema);

