import GifService from '../services/GifService';

function titleFormatted(title) {
  return title.replace(/\r?\n|\r/g, '').trim();
}

function ingredientFormatted(ingredients) {
  return ingredients
    .split(',')
    .map((ingredient) => ingredient.trim())
    .sort();
}

async function recipeFormatted(recipes) {
  return {
    title: titleFormatted(recipes.title),
    ingredients: ingredientFormatted(recipes.ingredients),
    link: recipes.href,
    gif: await GifService.execute(recipes.title),
  };
}

export default recipeFormatted;
