function PIDGenerator(Postnumber) {
  //Expect INT input
  // Convert the Postnumber to a hex string
  let hexString = Postnumber.toString(16);

  // Ensure the hex string has exactly 6 characters
  while (hexString.length < 6) {
    hexString = "0" + hexString;
  }

  // Calculate the digital root of the hex string
  let digitalRoot = hexString.toString();

  while (digitalRoot.length > 1) {
    let sum = 0;
    for (const digit of digitalRoot) {
      sum += parseInt(digit, 16);
    }
    digitalRoot = sum.toString(16);
  }

  return hexString + digitalRoot;
}

// Example usage:
//const Postnumber = 162; // Replace this with your Postnumber
//const result = PIDGenerator(Postnumber);
//console.log(result); // Output will be a string with the format "XXXXXXXXD", where "XXXXXXXX" is a 6-character hex string and "D" is the digital root

//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________

// THIS ONE WORKS

function PID2VolCodes(PID) {
  //Expect String Hex PID Input
  const numVol = 4;
  const numIndexes = 5;

  // MANDATORY (Though 4 and 6 seem to be more reasonable of values)
  // NumVol < 8
  // numIndex < 9

  // Check input to be correct
  if (
    typeof PID !== "string" ||
    PID.length !== 7 ||
    !/^[0-9A-Fa-f]{7}$/.test(PID)
  ) {
    return "Invalid PID input";
  }

  // CHECK Digital Root of PID
  let digitalRoot = PID.substring(0, 6);

  while (digitalRoot.length > 1) {
    let sum = 0;
    for (const digit of digitalRoot) {
      sum += parseInt(digit, 16);
    }
    digitalRoot = sum.toString(16);
  }

  const lastDigitOfPID = PID[PID.length - 1];

  if (digitalRoot !== lastDigitOfPID) {
    return "The digital root and the last digit of PID are different.";
  }

  // Two-digit numbers ordered from Mult with salt and Tao
  // input as a string

  var VolumeSalt = 49591523;
  var lotsofpish =
    "314159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488";
  var PIDHash = "";

  //Making a Number with lots of digits
  // It is a peice of PI times 2 times the Volume/Duration salt times the PID value in base 10 (Post Number)

  for (let t = 0; t < lotsofpish.length - 12; t += 12) {
    const chunk = lotsofpish.substring(t, t + 12);
    const chunkValueofTao = parseInt(chunk, 10) * 2;
    const calculation = (
      parseInt(PID.substring(0, 6), 16) *
      VolumeSalt *
      chunkValueofTao
    ).toString();
    PIDHash += calculation.padStart(12, "0");
  }

  //console.log(PIDHash);

  const Nums10_99 = new Set();

  let i = 0;
  while (Nums10_99.size < 90 && i < PIDHash.length - 1) {
    const twoDigitNumber = parseInt(PIDHash[i] + PIDHash[i + 1]);
    if (!Nums10_99.has(twoDigitNumber) && twoDigitNumber > 9) {
      Nums10_99.add(twoDigitNumber);
    }
    i += 1; // Increment by 1 to skip to the next pair of digits
  }
  // Convert the Set back to an array
  const Nums10_99Array = [...Nums10_99];

  if (
    parseInt(numVol.toString() + numIndexes.toString(), 10) >
    Nums10_99Array.length
  ) {
    console.log("You've asked for too many Volume Codes");
  }

  // Create OutputCodes Array
  let OutputCodes = new Array(numVol);
  for (let j = 0; j < numVol; j++) {
    OutputCodes[j] = new Array(numIndexes);
  }

  // Fill in OutputCodes
  for (let r = 0; r < numVol; r++) {
    for (let c = 0; c < numIndexes; c++) {
      let concatenatedString = r.toString() + c.toString();
      let z = parseInt(concatenatedString, 10); // 10 is the radix (base) for parsing integers

      OutputCodes[r][c] = Nums10_99Array[z];
    }
  }

  // Return the result
  return OutputCodes;
}

// Example usage

//const response2 = PID2VolCodes("1111138");
//console.log(response2); // Log the result to the browser console

//});

//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________

// THIS ONE WORKS

function PID2DurCodes(PID) {
  //Expect String Hex PID Input
  const numDur = 4;
  const numIndexes = 5;

  // MANDATORY (Though 4 and 6 seem to be more reasonable of values)
  // numDur < 8
  // numIndex < 9

  // Check input to be correct
  if (
    typeof PID !== "string" ||
    PID.length !== 7 ||
    !/^[0-9A-Fa-f]{7}$/.test(PID)
  ) {
    return "Invalid PID input";
  }

  // CHECK Digital Root of PID
  let digitalRoot = PID.substring(0, 6);

  while (digitalRoot.length > 1) {
    let sum = 0;
    for (const digit of digitalRoot) {
      sum += parseInt(digit, 16);
    }
    digitalRoot = sum.toString(16);
  }

  const lastDigitOfPID = PID[PID.length - 1];

  if (digitalRoot !== lastDigitOfPID) {
    return "The digital root and the last digit of PID are different.";
  }

  // Two-digit numbers ordered from sha256(PID)
  // input as a string

  var DurationSalt = 53137619;
  var lotsofpish =
    "314159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196442881097566593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488";
  var PIDHash = "";

  //Making a Number with lots of digits
  // It is a peice of PI times 2 times the Volume/Duration salt times the PID value in base 10 (Post Number)

  for (let t = 0; t < lotsofpish.length - 12; t += 12) {
    const chunk = lotsofpish.substring(t, t + 12);
    const chunkValueofTao = parseInt(chunk, 10) * 2;
    const calculation = (
      parseInt(PID.substring(0, 6), 16) *
      DurationSalt *
      chunkValueofTao
    ).toString();
    PIDHash += calculation.padStart(12, "0");
  }

  //console.log(PIDHash);

  const Nums10_99 = new Set();

  let i = 0;
  while (Nums10_99.size < 90 && i < PIDHash.length - 1) {
    const twoDigitNumber = parseInt(PIDHash[i] + PIDHash[i + 1]);
    if (!Nums10_99.has(twoDigitNumber) && twoDigitNumber > 9) {
      Nums10_99.add(twoDigitNumber);
    }
    i += 1; // Increment by 1 to skip to the next pair of digits
  }
  // Convert the Set back to an array
  const Nums10_99Array = [...Nums10_99];

  if (
    parseInt(numDur.toString() + numIndexes.toString(), 10) >
    Nums10_99Array.length
  ) {
  }

  // Create OutputCodes Array
  let OutputCodes = new Array(numDur);
  for (let j = 0; j < numDur; j++) {
    OutputCodes[j] = new Array(numIndexes);
  }

  // Fill in OutputCodes
  for (let r = 0; r < numDur; r++) {
    for (let c = 0; c < numIndexes; c++) {
      let concatenatedString = r.toString() + c.toString();
      let z = parseInt(concatenatedString, 10); // 10 is the radix (base) for parsing integers

      OutputCodes[r][c] = Nums10_99Array[z];
    }
  }

  // Display some information in alerts
  /*
      alert(Nums10_99Array.length);
      alert(Nums10_99Array);
      alert(i);
      */

  // Return the result
  return OutputCodes;
}

// Example usage
// const response = PID2DurCodes("1111138");
//console.log(response); // Log the result to the browser console

//});

//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//WORKS AND RUNNING 9-3-2023
function PID2PostNumber(PID) {
  // Check input to be correct
  if (
    typeof PID !== "string" ||
    PID.length !== 7 ||
    !/^[0-9A-Fa-f]{7}$/.test(PID)
  ) {
    return "Invalid PID input";
  }
  // CHECK Digital Root of PID

  PID = PID.toString(16);

  const FirstSix = PID.substring(0, 6);
  let digitalRoot = FirstSix;

  while (digitalRoot.length > 1) {
    let sum = 0;
    for (const digit of digitalRoot) {
      sum += parseInt(digit, 16);
    }
    digitalRoot = sum.toString(16);
  }

  const lastDigitOfPID = PID[PID.length - 1];

  if (digitalRoot !== lastDigitOfPID) {
    return "The digital root and the last digit of PID are different.";
  }
  return parseInt(FirstSix, 16);
}
// Example usage:
//console.log(PID2PostNumber("0000a2c"));

//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________

//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________

function PID2ADMIN(PID) {
  // Expect String Hex PID Input
  const PIDstr = PID.toString(16);

  // Calculate Volume Codes and Duration Codes (functions not defined here)
  const VolCodes = PID2VolCodes(PID);
  const DurCodes = PID2DurCodes(PID);

  let VolPart = 0;
  let DurPart = 0;

  const allNumbersVolume = new Set();

  // Add all two-digit numbers (10 to 99) to the set.
  for (let i = 10; i <= 99; i++) {
    allNumbersVolume.add(i);
  }

  // Create a copy of allNumbersVolume for Duration
  const allNumbersDuration = new Set(allNumbersVolume);

  // Remove numbers from the sets based on Volume Codes
  for (const row of VolCodes) {
    for (const num of row) {
      allNumbersVolume.delete(num);
    }
  }

  // If there are any numbers left in the set, calculate the median for VolPart
  if (allNumbersVolume.size > 0) {
    const sortedVolumeArray = Array.from(allNumbersVolume).sort(
      (a, b) => a - b
    );
    const middleIndex = Math.floor(sortedVolumeArray.length / 2);
    if (sortedVolumeArray.length % 2 === 1) {
      VolPart = sortedVolumeArray[middleIndex];
    } else {
      // If there's an even number of elements, take the average and round up
      VolPart = Math.ceil(
        (sortedVolumeArray[middleIndex - 1] + sortedVolumeArray[middleIndex]) /
          2
      );
    }
  } else {
    return "No missing two-digit numbers in Volume array";
  }

  // Remove numbers from the sets based on Duration Codes
  for (const row of DurCodes) {
    for (const num of row) {
      allNumbersDuration.delete(num);
    }
  }

  // If there are any numbers left in the set, calculate the median for DurPart
  if (allNumbersDuration.size > 0) {
    const sortedDurationArray = Array.from(allNumbersDuration).sort(
      (a, b) => a - b
    );
    const middleIndex = Math.floor(sortedDurationArray.length / 2);
    if (sortedDurationArray.length % 2 === 1) {
      DurPart = sortedDurationArray[middleIndex];
    } else {
      // If there's an even number of elements, take the average and round up
      DurPart = Math.ceil(
        (sortedDurationArray[middleIndex - 1] +
          sortedDurationArray[middleIndex]) /
          2
      );
    }
  } else {
    return "No missing two-digit numbers in Duration array";
  }

  // Create the AdminCode by concatenating VolPart and DurPart
  const AdminCode = VolPart.toString(10) + DurPart.toString(10);
  return AdminCode;
}

module.exports = {
  PIDGenerator,
  PID2VolCodes,
  PID2DurCodes,
  PID2PostNumber,
  PID2ADMIN
};