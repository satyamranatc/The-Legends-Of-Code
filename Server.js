import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './models/User';


const app = express();
const port = 5100;

app.use(cors());
app.use(bodyParser.json());


// DataBase Configuration:

mongoose.connect("mongodb://localhost:27017/TestDb")
 .then(() => console.log('MongoDB Connected...'))


// API endpoints

// Defaut:
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'John Doe', age: 30, email: 'john@example.com', phone: '123-456-7890', salary: 50000 },
    { id: 2, name: 'Jane Smith', age: 28, email: 'jane@example.com', phone: '098-765-4321', salary: 55000 },
  ]);
});
app.post('/api/addUser', async (req, res) => {
  let Data = {
    name: req.body.FormData.name,
    age: parseInt(req.body.FormData.age),
    email: req.body.FormData.email,
    phone: req.body.FormData.phone,
    salary: parseInt(req.body.FormData.salary),
  }
  console.log(Data);
  const newUser = new User(Data);
  await newUser.save();
});


// Server Listening:
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


