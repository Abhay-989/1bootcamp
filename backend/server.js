
import express from "express";
import cors from 'cors';
import jwt from 'jsonwebtoken';
const app = express();
const PORT = 5000;

const allowedNames = ['vedant jaiswal','yashika lawani','vivek kumar','prachi agrawal','aryan saxena','priyanshi khandelwal','tanushree dhote','priyanshi rana','shivani gupta','anshul sharma','aman mittal','deependra yadav','vivek kumar more','pallagani padamsri','saurya singh','jatin chandel','gaurav barwalt','naincy priya','shristi saxena','soumya sridhi','saurabh yadav','ayush kumar','dhanvi shah','arunima pathak','rahul agrawal','prerna chaursiya','surbhi sreejith','rishabh sonkar','akash anand','tanvi sundarkar','parth arora','nishant tiwari','pratham raghav','abhishek yadav','hemant rajput','akshita sahu','prachi soni','aman choudhary','nitin jangid','nidhi mesharam','jinsiha jain','priyansh mathur','suryansh sarathe','aaditya jain'];
const JWT_SECRET = 'your_secret_key';

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const { name } = req.body;

  if (!allowedNames.includes(name)) {
    return res.status(403).json({ message: 'Access Denied' });
  }

  const token = jwt.sign({ name }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.get('/protected', (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ message: `Welcome, ${decoded.name}` });
  } catch {
    res.status(401).json({ message: 'Invalid Token' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
