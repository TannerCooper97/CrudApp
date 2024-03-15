import express from 'express';
import path from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { configureRoutes } from './server/config/routes.js';
const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.use(morgan("common"));
app.use(helmet());
app.use(cors());
app.use(limiter); //  apply to all requests

app.use(express.static(path.join(process.cwd(), 'dist')));

// Routing
configureRoutes(app);

const port = 8080;

// Listen
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});