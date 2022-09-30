import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';
import userRouter from './routers/userRoutes.js';
import employeeRouter from './routers/employeeRoutes.js';
import jobRouter from './routers/jobRoutes.js';

// set up server
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
    // credentials: true,
  })
);

// set up routes
app.use('/user', userRouter);
app.use('/employee', employeeRouter);
app.use('/jobs', jobRouter);
connectDB();

// Server running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
