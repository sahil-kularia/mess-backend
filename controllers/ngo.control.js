const Ngo = require("../models/ngo.model");

// Get all NGOs
exports.getAllNgos = async (req, res) => {
  try {
    const ngos = await Ngo.find().sort({ createdAt: -1 });
    res.json(ngos);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Create new NGO
exports.createNgo = async (req, res) => {
  try {
    const newNgo = new Ngo(req.body);
    const savedNgo = await newNgo.save();
    res.status(201).json(savedNgo);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};
