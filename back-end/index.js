import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bookRoutes from './Routes/routes.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(5000, () => console.log(`listening to port 5000`)))
  .catch((error) => console.log(error.message));

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api/books', bookRoutes);
