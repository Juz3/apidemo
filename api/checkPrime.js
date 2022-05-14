const express = require("express");
const router = express.Router();

// GET api/checkprime

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/:number", async (req, res) => {
  try {
    const number = req.params.number;

    console.log(number);

    const body = `given number: ${number}`;
    res.status(200).send(body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
