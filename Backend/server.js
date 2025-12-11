import express from 'express';
import cors from 'cors';




// App Config
const app = express();
const port = 4000

// Middlewares
app.use(express.json());
app.use(cors());

app.get