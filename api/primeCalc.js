const checkForPrime = (number) => {
  for (let i = 2, squareRoot = Math.sqrt(number); i <= squareRoot; i++)
    if (number % i === 0) return false;
  return number > 1;
};

module.exports = checkForPrime;
