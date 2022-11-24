const express = require("express");
const db = require("./database/db");
const HomepageRouter = require("./routes/homepageRoutes");
require("dotenv").config();

const app = express();
db.connectToMongoDB();

const PORT = process.env.PORT || 3700;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("<h2>Lets Countdown!</h2>");
});

app.use("/", HomepageRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
