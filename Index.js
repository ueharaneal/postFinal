
const initializeScript = require('./initializeFolder/initializeScript.js');
const createPost = require("./initializeFolder/createPost.js")

// Function to update the PID object
function updatePID(PID) {
  // Get user input for volume and duration from the form
  const volumeInput = parseFloat(document.getElementById("volume").value);
  const durationInput = parseFloat(document.getElementById("duration").value);

  // Check if the user inputs are valid numbers
  if (!isNaN(volumeInput) && !isNaN(durationInput)) {
    // Update the PID object with the user's inputs
    PID.volume = volumeInput;
    PID.duration = durationInput;

    // Display the updated PID object
    console.log(PID);

    // Call initializeScript with the updated PID
    const codes = initializeScript(PID);
    console.log(codes);
  } else {
    // Handle invalid input
    alert("Please enter valid numbers for volume and duration.");
  }
}

//adding event listener for post input number
document
  .getElementById("inputPID")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the selected PID from the dropdown
    const selectedPID = document.getElementById("pid").value;

    // Store the selected PID in a variable or pass it directly to initializeScript
    // For example, you can call initializeScript here with the selectedPID
    const codes = initializeScript(selectedPID);
    console.log(codes);
  });

// Add an event listener to the form submit button
document
  .getElementById("inputForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Call the updatePID function to update the PID object and call initializeScript
    updatePID(selectedPID);

    // Resetting the Form after submission
    document.getElementById("inputForm").reset();
  });
