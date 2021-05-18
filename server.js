const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const expressValidator = require("express-validator");
require("dotenv").config();
// const routes = require("./routes/user");
const app = express();
const PORT = process.env.SERVER_PORT || 3001;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve statice assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
// app.use(routes);

//connect to the mongo DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected");
  });

mongoose.connection.on("error", (error) => {
  console.log(`DB connection error: ${error.message}`);
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});