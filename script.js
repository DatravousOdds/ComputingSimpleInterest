

while(true) {
  // Define the variables needed for the program
  let princpleAmount = prompt("Enter the principle: ");
  let annualRateOfInterest = prompt("Enter the rate of interest: ");
  let numberOfYears = prompt("Enter the number of years: ");

  if(isNaN(princpleAmount) || isNaN(annualRateOfInterest) || isNaN(numberOfYears)) {
    console.error(new Error("Invalid input. Please enter a valid number."));
  }
}


// Define the variables needed for the program
// let princpleAmount = prompt("Enter the principle: ");
// let annualRateOfInterest = prompt("Enter the rate of interest: ");
// let numberOfYears = prompt("Enter the number of years: ");

// Convert into numerical values
princpleAmount = parseFloat(princpleAmount);
annualRateOfInterest = parseFloat(annualRateOfInterest) / 100;
numberOfYears = parseFloat(numberOfYears);

// Error checking
console.log("Principle Amount: " + princpleAmount);
console.log("rate of interest: ", annualRateOfInterest);
console.log("Number of years: ", numberOfYears);

// Compute the simple interest
let endOfInvesment = princpleAmount * (1 + annualRateOfInterest * numberOfYears)
endOfInvesment = Math.ceil(endOfInvesment * 100) / 100;

// Error Checking
console.log(
  "The end of investment is: " + endOfInvesment
)
// Display results
console.log(`After ${numberOfYears} years at $${annualRateOfInterest * 100}% the investment will be worth ${endOfInvesment}`)