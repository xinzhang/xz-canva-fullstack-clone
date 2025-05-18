require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 5001;

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/design-service';

mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
}
);

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`Design Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('failed to start server error:', error);
  }
}

startServer();

