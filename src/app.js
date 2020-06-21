import 'dotenv/config';

import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      cors({
        origin: 'https://twobrothersms.com.br',
        optionsSuccessStatus: 200,
      })
    );
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    // this.server.options('*', cors());
    this.server.use(routes);
    // this.server.use(Sentry.Handlers.errorHandler());
  }
}

export default new App().server;
