/* Demo App REST API */
const express = require("express");

const checkPrime = require("./api/checkPrime");
const sumAndCheck = require("./api/sumAndCheck");

const app = express();
const port = 5000;

app.use(express.json({ extended: true }));

app.use("/api/checkprime", checkPrime);
app.use("/api/sumandcheck", sumAndCheck);

app.get("/api", (req, res) => {
  res.send("Api root");
});

app.listen(port, () => {
  console.log(`REST API Demo listening on port ${port}`);
});
