const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB is now connected')
    } catch (err){
        console.error("MongoDB connection Error", err);
        process.exit(1);
    }
}

module.exports = connectDB;``