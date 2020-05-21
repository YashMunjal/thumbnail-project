import express from 'express';
import authRoute from './routes/auth';
import path from 'path'

class App {
  private app: express.Application;

  constructor(_app: express.Application) {
    this.app = _app;
  }

  public callback() {
    return this.app;
  }
}

function createServer() {
  const app: express.Application = express();
  const server = new App(app);

  // Middlewares
  app.use(express.json());
  app.use(express.static(path.resolve(`./public`)))

  // Routes
  app.use('/api/auth', authRoute);

  return server;
}

export default createServer;
