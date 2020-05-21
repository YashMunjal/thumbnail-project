import http from 'http';
import createServer from './app';
import logger from './app/services/logger';

function init() {
  try {
    const server: http.Server = http.createServer(createServer().callback());
    const PORT = process.env.PORT || 8000;
    server.listen(PORT, () => logger.info(`🚀 Server started at PORT:${PORT}`));
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
}

init();
