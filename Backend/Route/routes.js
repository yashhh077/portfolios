const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../database/admin");
const project = require("../database/useproject");
const ContactSubmission = require("../database/user");
const auth = require("../middleware/auth");

const Router = express.Router();

Router.post("/register-admin", async (req, res) => {
  try {
    const { email, password } = req.body;

    let admin = await Admin.findOne({ email });
    if (admin) return res.status(400).json({ msg: "Admin already exists" });

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    admin = new Admin({ email, password: hashPassword });
    await admin.save();

    res.status(201).json({ msg: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Error in registration", error: err.message });
  }
});

// ========================
// 🔑 Admin Login
// ========================
Router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ msg: "Email not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET || "mysecret",
      { expiresIn: "1h" },
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: "Error in login", error: err.message });
  }
});

// ✅ Tere contact / project waale routes niche waise hi rehne chahiye

Router.post("/submit-contact", async (req, res) => {
  try {
    const { firstname, lastname, email, phoneNumber, messageText } = req.body;
    const newSubmission = new ContactSubmission({
      firstname,
      lastname,
      email,
      phoneNumber,
      messageText,
    });
    await newSubmission.save();
    res.status(201).json({
      message: "form is submit!",
      submission: newSubmission,
    });
  } catch (error) {
    console.error("something error", error);
    res.status(500).json({
      message: "connection is worst",
      error: error.message,
    });
  }
});

Router.get("/contact", async (req, res) => {
  try {
    const contact = await ContactSubmission.find();
    res.status(200).json(contact);
  } catch (err) {
    res.status(403).json({ error: err });
  }
});

Router.post("/addproject", async (req, res) => {
  try {
    const { title, description, techStack, link, image } = req.body; // <-- image yaha le
    const Addproject = new project({
      title,
      description,
      techStack,
      link,
      image, // <-- save kar
    });
    await Addproject.save();
    res.status(201).json({
      message: "Project added successfully",
      submission: Addproject,
    });
  } catch (err) {
    res.status(403).json({
      msg: "project can't upload",
      Error: err,
    });
  }
});

Router.get("/shoproject", async (req, res) => {
  try {
    const projects = await project.find();
    res.status(200).json({ msg: "successfully displayed project", projects });
  } catch (err) {
    res.status(403).json({
      msg: "project can't upload",
      Error: err,
    });
  }
});

Router.delete("/contact/delete/:id", async (req, res) => {
  try {
    const contact = await ContactSubmission.findByIdAndDelete(req.params.id); // <-- yaha id pass karo
    if (!contact) {
      return res.status(404).json({ msg: "Project not found" });
    }
    res.status(200).json({ msg: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({
      msg: "Something went wrong while deleting project",
      Error: err,
    });
  }
});

Router.delete("/delete/:id", async (req, res) => {
  try {
    const Project = await project.findByIdAndDelete(req.params.id); // <-- yaha id pass karo
    if (!Project) {
      return res.status(404).json({ msg: "Project not found" });
    }
    res.status(200).json({ msg: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({
      msg: "Something went wrong while deleting project",
      Error: err,
    });
  }
});

module.exports = Router;
