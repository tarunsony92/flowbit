import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
// Use the PORT from .env file, or default to 3001
const port = process.env.PORT || 3001; 

// Middlewares
app.use(cors()); // Allows requests from our frontend
app.use(express.json()); // Allows API to accept JSON data in request body
app.use(express.urlencoded({ extended: true })); // Allows API to accept form data

// Simple route to check if API is running
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is healthy' });
});

// We will add other routes like /upload, /extract here later

app.listen(port, () => {
  console.log(`✅ API server is running at http://localhost:${port}`);
});