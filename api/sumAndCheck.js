const express = require("express");
const router = express.Router();

// GET api/sumandcheck

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/:numbers", async (req, res) => {
  try {
    const nums = req.params.numbers;

    console.log(nums);

    const body = `given numbers: ${nums}`;
    res.status(200).send(body);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
