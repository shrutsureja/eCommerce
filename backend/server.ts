import express from 'express';
import dotenv from 'dotenv'

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send("Server is up and running")
})

app.listen(process.env.PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${process.env.PORT}`);
});