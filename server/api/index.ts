import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import app from './src/app';

app.listen(process.env.PORT, () => {
	console.log(`[server]: Server is running at http://localhost:${process.env.PORT}`);
});
