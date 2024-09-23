const User = require('../models/userModel');


async function findUserByUsernameOrEmail(username, email) {
  try {
    const user = await User.findOne({ $or: [{ username }, { email }] });
    return user;
  } catch (err) {
    throw new Error('Error finding user: ' + err.message);
  }
}

// Find a user by email (for login)
async function findUserByEmail(email) {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    throw new Error('Error finding user by email: ' + err.message);
  }
}

async function createUser(userData) {
  try {
    const newUser = new User(userData);
    return await newUser.save();
  } catch (err) {
    throw new Error('Error creating user: ' + err.message);
  }
}

module.exports = {
  findUserByUsernameOrEmail,
  findUserByEmail,
  createUser
};
