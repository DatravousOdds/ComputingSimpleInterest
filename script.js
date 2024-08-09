let princpleAmount = prompt("Enter the principle: ");
let annualRateOfInterest = prompt("Enter the rate of interest: ");
let numberOfYears = prompt("Enter the number of years: ");

annualRateOfInterest = parseFloat(annualRateOfInterest);
console.log("rate of interest: ", annualRateOfInterest);
let endOfInvesment = princpleAmount * (1 + annualRateOfInterest * numberOfYears)
console.log(endOfInvesment);

console.log(`After ${numberOfYears} years at ${annualRateOfInterest}% the investment will be worth ${enOfInvesment}`)