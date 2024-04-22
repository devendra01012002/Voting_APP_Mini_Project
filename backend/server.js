const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

mongoose
  .connect("mongodb://127.0.0.1:27017/VotingApp")
  .then(() => {
    console.log("Database connection established!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // req.body
const PORT = 8080;

// Import the router files

// Use the routers
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);

app.listen(PORT, () => {
  console.log("listening on port 8080");
});
