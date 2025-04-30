const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    rollno: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        minlength: 3
    },
    course: {
        type: String
    },
    section: {
        type: String
    }
},
    { timestamps: true }
);

const studentdata = new mongoose.model('student', studentSchema);
module.exports = studentdata;