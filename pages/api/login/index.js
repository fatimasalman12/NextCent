import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Read users data from the JSON file
    const filePath = path.join(process.cwd(), 'data', 'users-data.json');
    const fileData = fs.readFileSync(filePath);
    const users = JSON.parse(fileData);

    // Find the user with the provided email and password
    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
}

