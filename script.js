let princpleAmount = "";
let annualRateOfInterest = "";
let numberOfYears = "";
let endOfInvestment = 0.00;
let simpleInterest = "";

const calculateSimpleInterest = (princpleAmount, annualRateOfInterest, numberOfYears) => {

  // Convert into numerical values
  princpleAmount = parseFloat(princpleAmount);
  annualRateOfInterest = parseFloat(annualRateOfInterest) / 100;
  numberOfYears = parseFloat(numberOfYears);



  // Compute the simple interest
  endOfInvestment = princpleAmount * (1 + annualRateOfInterest * numberOfYears)


  return Math.round(endOfInvestment) * 100 / 100;
}

while (true) {
  // Define the variables needed for the program
  princpleAmount = prompt("Enter the principle: ");
  annualRateOfInterest = prompt("Enter the rate of interest: ");
  numberOfYears = prompt("Enter the number of years: ");

  if (isNaN(princpleAmount) || isNaN(annualRateOfInterest) || isNaN(numberOfYears)) {
    alert("Invalid input. Please enter a valid numbers for all input.");
  } else {
    endOfInvestment = calculateSimpleInterest(princpleAmount, annualRateOfInterest, numberOfYears);


    // Error Checking
    console.log(`The end of investment is: 4${endOfInvestment}`);

    // yearly results
    let yearlyResults = princpleAmount * annualRateOfInterest;
    console.log(`The yearly results are: ${yearlyResults}`);

    // Display results
    alert(`After ${numberOfYears} years at ${annualRateOfInterest}% the investment will be worth $${endOfInvestment.toFixed(2)}`)

    alert(`This is the amount at the end of the year: $${yearlyResults.toFixed(2)}`);
    break;
  }


}



