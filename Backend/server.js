const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Router = require("./Route/routes");
const CONNECTDB = require("./database/db");
const ContactSubmission = require("./database/user");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

CONNECTDB();
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
