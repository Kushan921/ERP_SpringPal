const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authRepo = require('../repository/authRepo');

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// User registration function
async function register(req, res) {
  const { username, password, email, role } = req.body;

  try {

    const existingUser = await authRepo.findUserByUsernameOrEmail(username, email);
    
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this username or email' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = {
      username,
      email,
      password: hashedPassword,
      role: role || 'logistic'
    };

    const createdUser = await authRepo.createUser(newUser);

    return res.status(201).json({
      message: 'User registered successfully!',
      user: {
        id: createdUser._id,
        username: createdUser.username,
        email: createdUser.email,
        role: createdUser.role,
      }
    });

  } catch (err) {
    return res.status(500).json({ message: 'Registration failed: ' + err.message });
  }
}


async function login(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await authRepo.findUserByEmail(email);
    
    if (!user) {
      return res.status(400).json({ message: 'User not found!' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials!' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' } // Token expiration time
    );

    return res.status(200).json({
      message: 'Login successful!',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      }
    });

  } catch (err) {
    return res.status(500).json({ message: 'Login failed: ' + err.message });
  }
}

module.exports = {
  register,
  login
};
