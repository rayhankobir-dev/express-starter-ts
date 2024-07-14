import logger from '@utils/logger';
import { port } from 'src/config';
import app from 'src/app';

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
