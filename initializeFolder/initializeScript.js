const { PID2DurCodes, PIDGenerator, PID2VolCodes, PID2ADMIN } = require("./AccessCodeGeneration.js");
const createPost = require("./createPost.js");

function convertToArrayOfNumbers(input) {
  if (typeof input === 'string') {
    try {
      const parsed = JSON.parse(input);
      if (Array.isArray(parsed)) {
        return parsed.map(element => {
          if (Array.isArray(element)) {
            return element.map(number => Number(number));
          } else {
            return Number(element);
          }
        });
      }
      throw new TypeError('Input is not an array');
    } catch (error) {
      console.error('Error converting input to an array of numbers:', error);
      throw error;
    }
  } else if (Array.isArray(input)) {
    return input;
  } else {
    throw new TypeError('Input must be a string or an array');
  }
}

function initializeScript(postNumber) {
  const postID = PIDGenerator(postNumber);
  const volCode = PID2VolCodes(postID);
  const durCode = PID2DurCodes(postID);
  const adminCode = PID2ADMIN(postID);

  const volCodeArray = convertToArrayOfNumbers(volCode)
  const durCodeArray = convertToArrayOfNumbers(durCode)

  createPost(postID, volCodeArray, durCodeArray, adminCode);
}


module.exports = initializeScript;
