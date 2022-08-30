const {text} = require('body-parser');
const dbConn = require('../config.js');
const Course = (course) => {
    this.name = course.name;
    this.code = course.code;
}

Course.GetCourses = (result) => {
    dbConn.query(`Select * 
        From course`, (course_err, course_res) => {
            if(course_err){
                console.log(`Error in query: `, course_err);
                result(null, student_err);
            } else if(course_res.length !== 0){
                console.log('data received');
                result(null, course_res);
            } else {
                console.log('no data receive');
                result(null, 'no data receive');
            }
        })
}

module.exports = Course;