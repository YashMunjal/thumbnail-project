import express from 'express';
import * as bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import authRoute from './routes/auth';
import imageRoute from './routes/image';
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
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(express.json());
  app.use(cookieParser())
  app.use(express.static(path.resolve(`./public`)))

  // Routes
  app.use('/api/auth', authRoute);
  app.use('/api/tool', imageRoute);

  return server;
}

export default createServer;
