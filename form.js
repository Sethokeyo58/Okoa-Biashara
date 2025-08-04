function calculateLoan() {
  const amountNeeded = parseFloat(document.getElementById('amountNeeded').value);
  const paymentDays = parseInt(document.getElementById('paymentDays').value);

  if (isNaN(amountNeeded) || amountNeeded <= 0) {
    alert("Please enter a valid loan amount.");
    return;
  }

  if (isNaN(paymentDays) || paymentDays <= 0) {
    alert("Please enter a valid number of payment days.");
    return;
  }

  // Assuming Amount Qualified = amountNeeded (you can adjust this logic)
  document.getElementById('amountQualified').value = amountNeeded.toFixed(2);

  // Calculate repayment amount including 10% interest
  const interestRate = 0.10;
  const repaymentAmount = amountNeeded + (amountNeeded * interestRate);
  document.getElementById('repaymentAmount').value = repaymentAmount.toFixed(2);

  // Calculate daily payment amount (repayment divided by number of days)
  const dailyPayment = repaymentAmount / paymentDays;
  document.getElementById('dailyPayment').value = dailyPayment.toFixed(2);
}