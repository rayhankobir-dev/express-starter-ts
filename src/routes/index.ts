import { Router } from 'express';

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve a welcome message
 *     responses:
 *       200:
 *         description: A welcome message
 */
router.get('/', (req, res) => {
  res.send('Hello, world!');
});

export default router;
