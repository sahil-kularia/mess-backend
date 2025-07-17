const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  name: String,
  location: String,
  phone: String,
  people: Number,
  foodRequired: {
    rice: Number,
    dal: Number,
    wheat: Number,
  },
}, { timestamps: true });

const Ngo = mongoose.model("Ngo", ngoSchema);
module.exports = Ngo;
