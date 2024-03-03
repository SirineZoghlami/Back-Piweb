import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import machineRoutes from './routes/api/machineRoutes.js';

dotenv.config();

const app = express();

const { PORT = 5000 } = process.env;

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('./dist/'));
app.use('/api', machineRoutes);

app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the API',
  });
});


const CONNECTION_URL = `mongodb+srv://Sirinezoghlami:q6su8XtRIoq9bAXU@cluster0.vsngh37.mongodb.net/EnergyGuard?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(CONNECTION_URL, {})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)) )
.catch((error) => console.log(error.message));


