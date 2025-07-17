const express = require('express');
const route = express.Router();

const { getallstudents, studentsetfood } = require('../controllers/student.control');

// Route to get all students and their food preferences
route.get('/all', getallstudents); 

// Route to set food preferences for a student
route.post('/food', studentsetfood);

module.exports = route;


export default async function handler(req, res) {
  // ✅ Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "https://thaparmess.netlify.app");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Your actual data response
  res.status(200).json({
    students: [
      // your data here
    ]
  });
}
