require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("AnimalHub Server Running");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
