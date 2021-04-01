import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';
import userRouter from './routers/userRoutes.js';

// set up server
const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

// set up routes
app.use('/user', userRouter);

connectDB();

// Server running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
