import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Auth from '../module/AuthModule.js';


export const Register = async (req, res) => {
  const { email, password, name } = req.body;

  // 1. validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // 2. check duplicate
    const exists = await Auth.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    // 3. create user
    const hashedPass = await bcrypt.hash(password, 10);
    const user = new Auth({ email, password: hashedPass, name });
    await user.save();

    // 4. send token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(201).json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;

  // 1. validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // 2. find user
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 3. compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // 4. issue token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
