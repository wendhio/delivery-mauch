function titleFormatted(title) {
  return title.replace(/\r?\n|\r/g, '').trim();
}

function ingredientFormatted(ingredients) {
  return ingredients
    .split(',')
    .sort()
    .map((ingredient) => ingredient.trim());
}

function recipeFormatted(recipes) {
  return {
    title: titleFormatted(recipes.title),
    ingredients: ingredientFormatted(recipes.ingredients),
    link: recipes.href,
    gif: recipes.thumbnail,
  };
}

export default recipeFormatted;
