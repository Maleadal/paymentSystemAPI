const Student = require('../models/student');
const StudentModel = require('../models/student');

const getStudent = (req, res) => {
    const {course, year, section} = req.params;
    console.log(`get student section of ${course}-${year}${section}`);
    StudentModel.Getstudent(course, year, section, (err, student_detail) => {
        if(err){
            res.send(`There is an Error fetching the data: ${err}`);
            console.log(`Error in: ${__dirname} which is ${err}`);
        } else {
            console.log(`Succesfully retrieved the data`);
            res.status(200).json(student_detail);
        }
    })
}
const getStudentByQuery = (req, res) => {
    const {name, code} = req.query;
    console.log(`looking for student with name of ${name ? name : code}`);
    if(name && code){
        StudentModel.getStudentByQueryNameAndCode(name, code, (err, student) => {
            if(err){
                res.send(`There is an Error fetching the data: ${err}`);
                console.log(`Error in: ${__dirname} which is ${err}`);
            } else {
                console.log(`Succesfully retrieved the data`);
                res.status(200).json(student);
            }
        })
    }
    else if(name){
        StudentModel.getStudentByQueryName(name, (err, student) => {
            if(err){
                res.send(`There is an Error fetching the data: ${err}`);
                console.log(`Error in: ${__dirname} which is ${err}`);
            } else {
                console.log(`Succesfully retrieved the data`);
                res.status(200).json(student);
            }
        })
    }
    else if(code){
        StudentModel.getStudentByQueryCode(code, (err, student) => {
            if(err){
                res.send(`There is an Error fetching the data: ${err}`);
                console.log(`Error in: ${__dirname} which is ${err}`);
            } else {
                console.log(`Succesfully retrieved the data`);
                res.status(200).json(student);
            }
        })
    }
    
}
const getStudentByCode = (req, res) => {
    const {code} = req.params;
    console.log(`looking for student with Code of ${code}`);
    StudentModel.getStudentByCode(code, (err, student) => {
        if(err){
            res.send(`There is an Error fetching the data: ${err}`);
            console.log(`Error in: ${__dirname} which is ${err}`);
        } else {
            console.log(`Succesfully retrieved the data`);
            res.status(200).json(student);
        }
    })
}
const getTransaction = (req, res) => {
    const {isPaid} = req.query;
    console.log(`looking for students with Code of ${isPaid}`);
    StudentModel.getStudentByPay(isPaid, (err, student) => {
        if(err){
            res.send(`There is an Error fetching the data: ${err}`);
            console.log(`Error in: ${__dirname} which is ${err}`);
        } else {
            console.log(`Succesfully retrieved the data`);
            res.status(200).json(student);
        }
    })
}
const createTransaction = (req, res) => {
    const {student_code, isPaid} = req.body;
    console.log(`Create transaction StudentCode: ${student_code}, isPaid: ${isPaid}`);
    StudentModel.CreateTransaction(student_code, isPaid, (err, student) => {
        if(err){
            res.send(`There is an Error fetching the data: ${err}`);
            console.log(`Error in: ${__dirname} which is ${err}`);
        } else {
            console.log(`Succesfully Created a Transaction`);
            res.status(200).json(student);
        }
    })
}
const updateTransaction = (req, res) => {
    const {student_code, isPaid} = req.query;
    console.log(`Update transaction with student code of ${student_code} to have isPaid: ${isPaid} and`);
    StudentModel.UpdateTransaction(student_code, isPaid, (err, student) => {
        if(err){
            res.send(`There is an Error fetching the data: ${err}`);
            console.log(`Error in: ${__dirname} which is ${err}`);
        } else {
            console.log(`Succesfully Updated a Transaction`);
            res.status(200).json(student);
        }
    })
}

const getStudents = (req, res) => {
    const {code} = req.params;
    console.log(`looking for student with Code of ${code}`);
    StudentModel.getStudents((err, student) => {
        if(err){
            res.send(`There is an Error fetching the data: ${err}`);
            console.log(`Error in: ${__dirname} which is ${err}`);
        } else {
            console.log(`Succesfully retrieved the data`);
            res.status(200).json(student);
        }
    })
}
module.exports = {
    getStudent,
    getStudents,
    getStudentByQuery,
    getStudentByCode,
    getTransaction,
    createTransaction,
    updateTransaction,
}