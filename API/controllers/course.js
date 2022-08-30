const CourseModel = require('../models/course');

const getCourse = (req, res) => {
    console.log(`getting courses`);
    CourseModel.GetCourses((err, courses) => {
        if(err){
            res.send(`There is an Error fetching the data: ${err}`);
            console.log(`Error in: ${__dirname} which is ${err}`);
        } else {
            console.log(`Successfullt retrieved the data`);
            res.json(courses);
            console.log(courses);
        }
    })
}

module.exports = {
    getCourse
}