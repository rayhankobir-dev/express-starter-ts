import loggerMiddleware from '@middlewares/logger-middleware';
import setupSwagger from '@utils/swagger';
import { corsConfig } from './config';
import routes from '@routes/index';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors(corsConfig));

// log all request
app.use(loggerMiddleware);

app.use('/api', routes);

// Set up Swagger
setupSwagger(app);

export default app;
