require('dotenv').config();
const connectDB = require('./db');
const initializeScript = require('./initializeFolder/initializeScript')
connectDB();

initializeScript(1);



