const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
	//once the indexes are in  sync remove the indexs from this schema
	//create a function that increments the indexs
	//the indexes should increment independently
	postId: { type: String },
	postName: { type: String, unique: true },
	volCodeArray: [[{ type: Number }]],
	volCodeIndexZero: { type: Number },
	volCodeIndexOne: { type: Number },
	volCodeIndexTwo: { type: Number },
	volCodeIndexThree: { type: Number },
	durCodeArray: [[{ type: Number }]],
	durCodeIndexZero: { type: Number },
	durCodeIndexOne: { type: Number },
	durCodeIndexTwo: { type: Number },
	durCodeIndexThree: { type: Number },
	adminCode: { type: String },
})

module.exports = mongoose.model("Post", postSchema)
