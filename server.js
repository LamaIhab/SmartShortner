const express = require("express");
const mongoose = require("mongoose");
const links = require('./routes/links.route')

// create the app
const app = express();
app.use(express.json());
app.use('/',links)

// connect to mongoDB
const db = require("./config/keys.js").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.log(error));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on ${port}`));
