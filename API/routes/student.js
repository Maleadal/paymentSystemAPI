const express = require('express');
const router = express.Router();

const {
    getStudent, 
    getStudents,
    getStudentByQuery, 
    getStudentByCode, 
    getTransaction,
    createTransaction,
    updateTransaction
} = require('../controllers/student');

router.route('/transaction').get(getTransaction).post(createTransaction).put(updateTransaction);
router.get('/query', getStudentByQuery);
router.get('/students', getStudents);
router.get('/:code', getStudentByCode);
router.get('/:course/:year/:section', getStudent);

module.exports = router;