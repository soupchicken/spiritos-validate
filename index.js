const signUp = require('./forms/signUp');
const asyncUsername = require('./_asyncUsername');
const asyncEmail = require('./_asyncEmail');
const passwords = require('./_passwords');
const Profile = require('./models/Profile');
module.exports = {
  passwords,
  Models: {
    Profile
  },
  forms: {
    signUp
  },
  async: {
    username:asyncUsername,
    email:asyncEmail
  }
}
