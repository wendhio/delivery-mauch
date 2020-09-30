import { Router } from 'express';

import RecipeController from './app/controllers/recipeController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Welcome Wendhio' });
});

routes.get('/recipes', RecipeController.show);

export default routes;
