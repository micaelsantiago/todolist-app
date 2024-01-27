const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksController');

router.get('/tasks', tasksController.getAll);
router.post('/create', tasksController.create);
router.put('/update/:id', tasksController.update);

module.exports = router;