const express = require('express');
const route = express.Router();

const { getallstudents, studentsetfood } = require('../controllers/student.control');

// Route to get all students and their food preferences
route.get('/all', getallstudents); 

// Route to set food preferences for a student
route.post('/food', studentsetfood);

module.exports = route;