const mongoose = require('mongoose');
const Student = require('../models/students.model');

// ✅ GET all students + total unique counts per meal (per day)
const getallstudents = async (req, res) => {
  try {
    const students = await Student.find();

    let breakfastcount = 0;
    let lunchcount = 0;
    let dinnercount = 0;

    // Set to track unique rollno per date
    const uniqueSet = new Set();

    students.forEach((s) => {
      const dateStr = new Date(s.date).toISOString().slice(0, 10);
      const key = `${s.rollno}_${dateStr}`;

      if (!uniqueSet.has(key)) {
        uniqueSet.add(key);

        if (s.breakfast) breakfastcount++;
        if (s.lunch) lunchcount++;
        if (s.dinner) dinnercount++;
      }
    });

    res.status(200).json({
      students,
      breakfastcount,
      lunchcount,
      dinnercount
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};

// ✅ POST/UPDATE student meal for today only
const studentsetfood = async (req, res) => {
  const { rollno, breakfast, lunch, dinner } = req.body;
  const today = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'

  try {
    const existing = await Student.findOne({
      rollno,
      date: today
    });

    if (existing) {
      existing.breakfast = breakfast;
      existing.lunch = lunch;
      existing.dinner = dinner;
      await existing.save();
      return res.status(200).json({ message: 'Food preferences updated for today' });
    } else {
      const newEntry = new Student({
        rollno,
        breakfast,
        lunch,
        dinner,
        date: today
      });
      await newEntry.save();
      return res.status(201).json({ message: 'New food entry saved for today' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error setting food preferences', error });
  }
};

module.exports = {
  getallstudents,
  studentsetfood
};
