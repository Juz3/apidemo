const checkForPrime = require("./primeCalc.js");

const express = require("express");
const router = express.Router();

const calculateSum = (numberArray) => {
  let sum = 0;

  for (const num of numberArray) {
    console.log(num);

    if (!isNaN(parseInt(num, 10))) {
      sum += parseInt(num, 10);
    }
  }

  console.log("sum:", sum);

  return sum;
};

// GET api/sumandcheck/:numberArray
router.get("/:numbers", async (req, res) => {
  try {
    const nums = req.params.numbers;

    console.log("debug nums", nums);
    const numberArray = nums.split(",");
    console.log("debug numberArray", numberArray);

    const sum = calculateSum(numberArray);

    const isPrime = checkForPrime(sum);

    console.log("debug sum, isprime", sum, isPrime);

    const sumText = `Sum of given numbers is ${sum}. `;

    const primeText = isPrime
      ? `This is a prime number.`
      : `This is not a prime number.`;

    const body = sumText + primeText;
    res.status(200).send(body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
