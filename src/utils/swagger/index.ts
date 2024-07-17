import { appName, appUrl, appVersion } from '@src/config';
import { Request, Response, Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import logger from '@utils/logger';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: appName,
      version: appVersion,
      description: 'Task REST API',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    // replace your security scheme
    security: [
      {
        bearerAuth: [],
      },
    ],
    // add more tag for grouping endpoints
    tags: [
      {
        name: 'Common',
        description: 'Common endpoints',
      },
      {
        name: 'Auth',
        description: 'Authentication related endpoints',
      },
      {
        name: 'Profile',
        description: 'User profile related endpoints',
      },
      {
        name: 'News',
        description: 'News related endpoints',
      },
    ],
  },

  apis: ['./src/routes/*.ts'], // Files containing Swagger annotations
};

const swaggerSpec = swaggerJsdoc(options);

export default function setupSwagger(app: Express, port: number) {
  try {
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/docs.json', (req: Request, res: Response) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(swaggerSpec);
    });
    logger.info(`Docs available at ${appUrl}:${port}/docs`);
  } catch (error: any) {
    logger.error(error.message);
  }
}
