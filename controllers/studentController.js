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
async function getStudentsByRollNo(req,res) {
    try {
        let rollNo = parseInt(req.params.rollNo);
        console.log(rollNo,'rollNo')
        let student2 = await student.findOne({rollNo: rollNo});
        console.log(student2,'students');
        res.send(student2)
    } catch (err) {
        console.log(err,'err');
        
    }
}
async function getStudents(req, res) {
    try {
        let students = await student.find({});
        console.log(students, 'students');
        res.send(students)
    } catch (err) {
        console.log(err,'err');
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentsByRollNo
}