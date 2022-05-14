const express = require("express");
const router = express.Router();

const checkForPrime = require("./primeCalc.js");

// GET api/checkprime/:num
router.get("/:number", async (req, res) => {
  try {
    const number = req.params.number;

    console.log(number, checkForPrime(number));

    const isPrime = checkForPrime(number);

    const responseText = isPrime
      ? `Given number ${number} is a prime number.`
      : `Given number ${number} is not a prime number.`;

    res.status(200).send(responseText);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
