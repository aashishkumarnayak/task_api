const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Define routes for tasks
router.post('/create-task', todoController.createTask);
router.post('/create-subtask', todoController.createSubtask);
router.get('/user-tasks', todoController.getUserTasks);
router.get('/user-subtasks', todoController.getUserSubtasks);
router.put('/update-task/:id', todoController.updateTask);
router.put('/update-subtask/:id', todoController.updateSubtask);
router.delete('/delete-task/:id', todoController.deleteTask);
router.delete('/delete-subtask/:id', todoController.deleteSubtask);

router.post('/create-user', todoController.createUser);
router.get('/get-users', todoController.getUsers);
router.put('/update-user/:id', todoController.updateUser);
router.delete('/delete-user/:id', todoController.deleteUser);

module.exports = router;
