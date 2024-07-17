import express, { NextFunction, Request, Response } from 'express';
import errorHandleMiddleware from './middlewares/error-middleware';
import loggerMiddleware from '@middlewares/logger-middleware';
import setupSwagger from '@utils/swagger';
import { corsConfig, port } from './config';
import routes from '@routes/index';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors(corsConfig));

// log all request
app.use(loggerMiddleware);

app.use('/api', routes);

// Set up Swagger
setupSwagger(app, port);

// handle all types of errors
app.use(errorHandleMiddleware);

export default app;
