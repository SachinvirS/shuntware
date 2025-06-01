const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Sample user for demonstration
const users = [
  {
    id: 1,
    email: 'admin@demo.com',
    passwordHash: bcrypt.hashSync('Admin@123', 10),
    role: 'admin'
  }
];

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });
  const isValid = bcrypt.compareSync(password, user.passwordHash);
  if (!isValid) return res.status(400).json({ message: 'Invalid credentials' });
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token, role: user.role });
};
