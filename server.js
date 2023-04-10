const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/api");

mongoose.connect(
  "mongodb+srv://admin-Arunn:arunn123@cluster0.hcckn.mongodb.net/roughNote?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/", routes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3003;
}
app.listen(port);
