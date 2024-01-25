const cron = require('node-cron');
const { Task } = require('../models/todoModel');

// Define cron job to change priority of tasks based on due_date
cron.schedule('0 0 * * *', async () => {
    try {
        // Your logic to change priority of tasks based on due_date goes here
    } catch (error) {
        console.error('Error in task priority cron job:', error);
    }
});
