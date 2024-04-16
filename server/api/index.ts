import express from 'express';
import dotenv from 'dotenv';
import app from './src/app';
import getAPIRoutes from './src/utils/getApiRoutes'; // For development purposes only - to get all the routes

dotenv.config();

app.listen(process.env.PORT, () => {
	console.log(`[server]: Server is running at http://localhost:${process.env.PORT}`);
	console.log(`[server]: Press Ctrl+C to quit.`);
});
