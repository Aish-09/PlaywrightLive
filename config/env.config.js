// config/env.config.js
require('dotenv').config();

module.exports = {
  baseUrl: process.env.BASE_URL || 'https://automationexercise.com',
  testUser: {
    // You can set these in a local .env file or GitHub Secrets
    email: process.env.TEST_USER_EMAIL || '',
    password: process.env.TEST_USER_PASSWORD || '',
    username: process.env.TEST_USER_NAME || '',
    phonenumber : process.env.TEST_USER_PHONE || ''
  }
};