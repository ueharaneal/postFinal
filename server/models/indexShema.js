const mongoose = require('mongoose');

const indexSchema = mongoose.model({

    ///FIGURE OUT HOW TO CREATE A RELATION WITH THE POST SCHEMA 
    postId: {type:String},
    volCodeIndexZero: {type: Number},
    volCodeIndexOne: {type: Number},
    volCodeIndexTwo: {type: Number},
    volCodeIndexThree: {type: Number},
    durCodeIndexZero: {type: Number},
    durCodeIndexOne: {type: Number},
    durCodeIndexTwo: {type: Number},
    durCodeIndexThree: {type: Number},
})


module.exports  = mongoose.model('index',indexSchema);