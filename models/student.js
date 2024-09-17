const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    rollNo: { type: Number },
    name: { type: String },
    fatherName: { type: String },
    aadharCardNumber: { type: String },
    mobileNumber: { type: String },
})
module.exports = mongoose.model('student',StudentSchema)