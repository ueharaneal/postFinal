require('dotenv').config();
const connectDB = require('./db');
const initializeScript = require('./initializeFolder/initializeScript')
connectDB();


//changeable 
initializeScript(2);



