import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import usersRouter from './routes/users.js';
import path from 'path';


import { fileURLToPath } from 'url';

// 👇 ES module replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Load env files correctly
dotenv.config({
    path: ['.env.local', '.env'],
    override: process.env.NODE_ENV !== 'production',
  });
  

console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('SESSION_SECRET:', process.env.SESSION_SECRET);
console.log('PORT:', process.env.PORT);


const app = express();

// Enable CORS for all origins (development)
app.use(cors());


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

// Routes
app.use('/users', usersRouter);

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to your app!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
