const { text } = require('body-parser');
const dbConn = require('../config.js');

const Student = (student) => {
    this.code = student.code;
    this.fullname = student.full_name;
    this.sex = student.sex;
    this.section = student.section;
    this.Paid = student.isPaid;
    this.date_and_time = student.DateAndTime
}
Student.Getstudent = (course, year, section, result) => {
    dbConn.query(`Select student.code, student.full_name, sex, concat(course.code, '-', year.year, section.name) as Section, transaction.isPaid
    FROM section, student, year, course, transaction
    WHERE year.id = section.year_id and 
    section.student_code = student.code AND
    transaction.student_code = student.code and
    course.id = year.course_id and
    course.code = '${course}' and year.year = ${year} and section.name = '${section}' order by student.full_name`, (student_err, student_res) => {
        if(student_err){
            console.log('Error in query: ', student_err);
        } else if(student_res.length !== 0){
            console.log('data received');
            result(null, student_res)
        }
        else{
            console.log(`No student under ${course}${year}-${section}`);
            result(null, {'message': `${course}${year}-${section} doesn't Have students`});
        }
    })
}
Student.getStudentByName = (name, result) => {
    dbConn.query(`Select student.code, student.full_name, sex, concat(course.code, '-', year.year, section.name) as Section, transaction.isPaid
    FROM section, student, year, course, transaction
    WHERE year.id = section.year_id and 
    section.student_code = student.code AND
    transaction.student_code = student.code and
    course.id = year.course_id and
                (lower(full_name) LIKE '%${name}%') order by student.full_name`, (studentInfo_err, studentInfo_res) => {
                    if(studentInfo_err){
                        console.log('Error in query: ', studentInfo_err);
                        result(null, {'message': `Error in query: ${studentInfo_err}`});
                    } else if(studentInfo_res.length !== 0){
                        console.log('data received');
                        result(null, studentInfo_res)
                    }
                    else{
                        console.log(`No student with the name of ${name}`);
                        result(null, {'message': `No student with the name of ${name}`});
                    }
                })
}
Student.getStudentByCode = (code, result) => {
    dbConn.query(`Select student.code, student.full_name, sex, concat(course.code, '-', year.year, section.name) as Section, transaction.isPaid
    FROM section, student, year, course, transaction
    WHERE year.id = section.year_id and 
    section.student_code = student.code AND
    transaction.student_code = student.code and
    course.id = year.course_id and
                student.code = '${code}' order by student.full_name`, (studentInfo_err, studentInfo_res) => {
                    if(studentInfo_err){
                        console.log('Error in query: ', studentInfo_err);
                        result(null, {'message': `Error in query: ${studentInfo_err}`});
                    } else if(studentInfo_res.length !== 0){
                        console.log('data received');
                        result(null, studentInfo_res)
                    }
                    else{
                        console.log(`No student with the Code of ${code}`);
                        result(null, {'message': `No student with the Code of ${code}`});
                    }
                })
}
Student.getStudentByQueryName = (name, result) => {
    dbConn.query(`Select student.code, student.full_name, sex, concat(course.code, '-', year.year, section.name) as Section, transaction.isPaid
    FROM section, student, year, course, transaction
    WHERE year.id = section.year_id and 
    section.student_code = student.code AND
    transaction.student_code = student.code and
    course.id = year.course_id and
                (lower(full_name) LIKE '%${name}%') order by student.full_name`, (studentInfo_err, studentInfo_res) => {
                    if(studentInfo_err){
                        console.log('Error in query: ', studentInfo_err);
                        result(null, {'message': `Error in query: ${studentInfo_err}`});
                    } else if(studentInfo_res.length !== 0){
                        console.log('data received');
                        result(null, studentInfo_res)
                    }
                    else{
                        console.log(`No student with the name of ${name}`);
                        result(null, {'message': `No student with the name of ${name}`});
                    }
                })
}

Student.getStudentByQueryCode = (code, result) => {
    dbConn.query(`Select student.code, student.full_name, sex, concat(course.code, '-', year.year, section.name) as Section, transaction.isPaid
    FROM section, student, year, course, transaction
    WHERE year.id = section.year_id and 
    section.student_code = student.code AND
    transaction.student_code = student.code and
    course.id = year.course_id and
                (lower(student.code) LIKE '%${code}%') order by student.full_name`, (studentInfo_err, studentInfo_res) => {
                    if(studentInfo_err){
                        console.log('Error in query: ', studentInfo_err);
                        result(null, {'message': `Error in query: ${studentInfo_err}`});
                    } else if(studentInfo_res.length !== 0){
                        console.log('data received');
                        result(null, studentInfo_res)
                    }
                    else{
                        console.log(`No student with the name of ${code}`);
                        result(null, {'message': `No student with the name of ${code}`});
                    }
                })
}


Student.getStudentByQueryNameAndCode = (name, code, result) => {
    dbConn.query(`Select student.code, student.full_name, sex, concat(course.code, '-', year.year, section.name) as Section, transaction.isPaid
    FROM section, student, year, course, transaction
    WHERE year.id = section.year_id and 
    section.student_code = student.code AND
    transaction.student_code = student.code and
    course.id = year.course_id and
                (lower(student.code) LIKE '%${code}%') and
                (lower(student.full_name) LIKE '%${name}%') order by student.full_name`, (studentInfo_err, studentInfo_res) => {
                    if(studentInfo_err){
                        console.log('Error in query: ', studentInfo_err);
                        result(null, {'message': `Error in query: ${studentInfo_err}`});
                    } else if(studentInfo_res.length !== 0){
                        console.log('data received');
                        result(null, studentInfo_res)
                    }
                    else{
                        console.log(`No student with the name of ${name}`);
                        result(null, {'message': `No student with the name of ${name}`});
                    }
                })
}
Student.getStudents = (result) => {
    dbConn.query(`Select student.code, student.full_name, sex, concat(course.code, '-', year.year, section.name) as Section, transaction.isPaid
    FROM section, student, year, course, transaction
    WHERE year.id = section.year_id and 
    section.student_code = student.code AND
    transaction.student_code = student.code and
    course.id = year.course_id and
                course.id = year.course_id order by student.full_name`, (studentInfo_err, studentInfo_res) => {
                    if(studentInfo_err){
                        console.log('Error in query: ', studentInfo_err);
                        result(null, {'message': `Error in query: ${studentInfo_err}`});
                    } else if(studentInfo_res.length !== 0){
                        console.log('data received');
                        result(null, studentInfo_res)
                    }
                    else{
                        console.log(`No student with the Code of ${code}`);
                        result(null, {'message': `No student with the Code of ${code}`});
                    }
                })
}

Student.getStudentByPay = (isPaid, result) => {
    dbConn.query(`Select student.code, student.full_name, sex, concat(course.code, '-', year.year, section.name) as Section, transaction.isPaid
    FROM section, student, year, course, transaction
    WHERE year.id = section.year_id and 
    section.student_code = student.code AND
    transaction.student_code = student.code and
    course.id = year.course_id and
    transaction.isPaid = ${isPaid} order by student.full_name`, (studentInfo_err, studentInfo_res) => {
        if(studentInfo_err){
            console.log('Error in query: ', studentInfo_err);
            result(null, {'message': `Error in query: ${studentInfo_err}`});
        } else if(studentInfo_res.length !== 0){
            console.log('data received');
            result(null, studentInfo_res)
        }
        else{
            console.log(`No student with the Code of ${code}`);
            result(null, {'message': `No student with the isPaid of ${isPaid}`});
        }
    })
}
Student.CreateTransaction = (student_code, isPaid, result) => {
    const date = new Date();
    const current_date_and_time = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    dbConn.query(`INSERT INTO transaction (id, student_code, isPaid, DateCreated, DateUpdated) 
    VALUES (NULL, '${student_code}', '${isPaid}', '${current_date_and_time}', '${current_date_and_time}');`, (trans_status_err, trans_status_res) => {
        if(trans_status_err){
            console.log('Error in query: ', trans_status_err);
            result(null, {'message': `Error in query: ${trans_status_err}`});
        } else {
            result(null, {'message': `Data Successfully inserted`});
            console.log('Full Information status: ',trans_status_res);
        }
    })
}
Student.UpdateTransaction = (student_code, isPaid, result) => {
    const date = new Date();
    const current_date_and_time = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
    dbConn.query(`UPDATE transaction SET isPaid = ${isPaid}, DateUpdated = '${current_date_and_time}' WHERE transaction.student_code = '${student_code}';`, (trans_status_err, trans_status_res) => {
        if(trans_status_err){
            console.log('Error in query: ', trans_status_err);
            result(null, {'message': `Error in query: ${trans_status_err}`});
        } else if(trans_status_res.affectedRows !== 0){
            result(null, {'id': `${student_code}`,'message': `Data Successfully Updated`});
            console.log('Full Information status: ',trans_status_res);
        } else {
            result(null, {'id': `${student_code}`,'message': `Update Failed`});
            console.log('Full Information status: ',trans_status_res);
        }
    })
}
module.exports = Student;