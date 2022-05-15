const checkForPrime = require("./primeCalc.js");

const express = require("express");
const router = express.Router();

const calculateSum = (numberArray) => {
  let sum = 0;

  for (const num of numberArray) {
    if (!isNaN(parseInt(num, 10))) {
      sum += parseInt(num, 10);
    }
  }

  return sum;
};

router.get("/:numbers", async (req, res) => {
  try {
    const nums = req.params.numbers;

    const numberArray = nums.split(",");
    const sum = calculateSum(numberArray);
    const isPrime = checkForPrime(sum);

    const resp = { result: sum, isPrime: isPrime };

    res.status(200).send(resp);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
