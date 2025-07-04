const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

const courses = [
    { id: 1, title: 'DevOps Basics' },
    { id: 2, title: 'AWS Cloud' },
    { id: 3, title: 'Docker and Kubernetes' }
];

router.get('/', authMiddleware, (req, res) => {
    res.json(courses);
});

module.exports = router;
