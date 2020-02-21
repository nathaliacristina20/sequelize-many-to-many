import { Router } from 'express';

import PostController from './app/controllers/PostController';
import TagController from './app/controllers/PostController';

const routes = new Router();

routes.post('/posts', PostController.store);

routes.post('/tags', TagController.store);

export default routes;
