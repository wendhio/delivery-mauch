import { Router } from 'express';

import RecipeController from './app/controllers/recipeController';

const routes = new Router();

routes.get('/recipes', RecipeController.show);

export default routes;
