// config/env.config.js
require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL || 'https://automationexercise.com',
  testUser: {
    // You can set these in a local .env file or GitHub Secrets
    email: process.env.TEST_USER_EMAIL || 'varam89915@agaexpress.com',
    password: process.env.TEST_USER_PASSWORD || 'XetKm34@NLnWMH!',
    username: process.env.TEST_USER_NAME || 'Aishwarya',
    phonenumber : process.env.TEST_USER_PHONE || '919652770456'
  }
};