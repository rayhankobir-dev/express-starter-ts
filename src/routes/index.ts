import asyncHandler from '@src/utils/helpers/async-handler';
import { Request, Response, Router } from 'express';

const router = Router();

/**
 * @swagger
 *  tags:
 *    name: Common
 *    description: Health checking
 * /api:
 *   get:
 *     summary: Retrieve a welcome message
 *     tags: [Common]
 *     responses:
 *       200:
 *         description: A welcome message
 */
router.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello, world!');
});

/**
 * @swagger
 * /api/data:
 *   post:
 *     summary: Retrieve a welcome message
 *     tags: [Common]
 *     responses:
 *       200:
 *         description: A welcome message
 */
router.post(
  '/data',
  asyncHandler(async (req: Request, res: Response) => {
    res.status(200).send('Hello, world!');
  }),
);

export default router;
