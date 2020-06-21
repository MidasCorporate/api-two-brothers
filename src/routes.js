import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ContactController from './app/controllers/ContactController';
import DashClientController from './app/controllers/DashClientController';

import authMiddleware from './app/Middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/user', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/', (req, res) => res.send('Fala seu cabeça de nóis tudo'));

routes.post('/contacts', ContactController.store);

routes.get('/files/imgBanner', DashClientController.index);

routes.get('/files', FileController.index);
routes.post('/files', upload.single('file'), FileController.store);
routes.put('/files', FileController.update);

routes.use(authMiddleware);

routes.post('/files/imgBanner', DashClientController.store);
routes.put('/files/imgBanner', DashClientController.update);

routes.get('/user', UserController.index);
routes.put('/user', UserController.update);

routes.get('/contacts', ContactController.index);
routes.put('/contacts/:_id', ContactController.update);

export default routes;
