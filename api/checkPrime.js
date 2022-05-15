const express = require("express");
const router = express.Router();

const checkForPrime = require("./primeCalc.js");

// GET api/checkprime/:num
router.get("/:number", async (req, res) => {
  try {
    const number = req.params.number;

    console.log(number, checkForPrime(number));

    const isPrime = checkForPrime(number);

    const resp = { isPrime: isPrime };

    res.status(200).send(resp);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
