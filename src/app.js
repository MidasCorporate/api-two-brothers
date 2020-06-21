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
    this.server.use(express.json());
    this.server.use(
      cors({
        origin: 'https://5eefc95f60f39b00096b54a5--twobrothersms.netlify.app',
      })
    );
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
