const express = require("express");
const db = require("./database/db")
require("dotenv").config()

const app = express();
db.connectToMongoDB()

const PORT = process.env.PORT || 3700;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

