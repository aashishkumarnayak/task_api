const cron = require('node-cron');
const { Task, User } = require('../models/todoModel');
const twilio = require('twilio');

const accountSid = 'YOUR_TWILIO_ACCOUNT_SID';
const authToken = 'YOUR_TWILIO_AUTH_TOKEN';
const twilioPhoneNumber = 'YOUR_TWILIO_PHONE_NUMBER';

const client = new twilio(accountSid, authToken);

// Define cron job for voice calling
cron.schedule('0 * * * *', async () => {
    try {
        // Your logic for voice calling using Twilio goes here
    } catch (error) {
        console.error('Error in voice calling cron job:', error);
    }
});
