import mongoose from 'mongoose'
const validator = require('validator')

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
          if (!validator.isEmail(value)) {
            throw new Error("Invalid Email");
          }
        },
      },
      password: {
        type: String,
        required: true, 
        trim: true,
        lowercase: true,
      },
      role: {
        type: String,
        enum:['user','admin'],
        default: 'user' 
      },
      firstname: {
        type: String,
        trim: true,
        maxLength: 100,
      },
      lastname: {
        type: String,
        trim: true,
        maxLength: 100,
      },
      date: {
        type: Date,
        default: Date.now
      },
});


const User = mongoose.model('User',userSchema);

//we will create the pre for hashing 

//models to compare candidatePassword and user.password

module.exports = { User }