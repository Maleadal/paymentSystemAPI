const express = require('express');
const app = express();

//static express
app.use(express.static('./methods-public'));

//parse form data
app.use(express.urlencoded({ extended:false }));

// parse json
app.use(express.json());

const port = process.env.PORT || 8000;
const student = require('./routes/student');
const course = require('./routes/course');
app.get('/', (req, res) => {
    res.send('Home Page');
})

app.use('/student', student);
app.use('/course', course);

app.listen (port, ()=>{
    console.log(`Express is running at port ${port}`);
});