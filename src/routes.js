import { Router } from 'express';

import UserController from './app/controllers/UserController';
import CityController from './app/controllers/CityController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/cities', CityController.store);
export default routes;
