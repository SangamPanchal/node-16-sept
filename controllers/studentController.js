const mongoose = require('mongoose');
const student = require('../models/student');
async function addStudent(req, res) {
    try {
        console.log(req.body, 'req.body')
        let newStudent = new student(req.body);
        await newStudent.save();
        console.log("Data saved successfully");
        res.end("added....")
    } catch (err) {
        console.log(err);
    }
}
async function getStudents(req, res) {
    try {
        let students = await student.find({});
        console.log(students, 'students');
        res.send(students)
    } catch (err) {

    }
}
module.exports = {
    addStudent,
    getStudents
}