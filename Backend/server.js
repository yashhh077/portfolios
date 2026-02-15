const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Router = require("./Route/routes");
const CONNECTDB = require("./database/db");
const ContactSubmission = require("./database/user");

require("dotenv").config();

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
CONNECTDB();
app.use("/", Router);
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}`);
});
