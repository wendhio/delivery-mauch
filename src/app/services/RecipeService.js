import axios from 'axios';

import recipesFormatted from '../utils/functionsUtil';

class RecipeService {
  async execute(keywords) {
    const url = 'http://www.recipepuppy.com/api/';
    let response;

    try {
      response = await axios.get(url, {
        params: {
          i: keywords.toString(),
        },
      });
    } catch (err) {
      throw new Error('Recipe Puppy API error, please try again later!');
    }

    const recipepuppy = response.data.results;

    return {
      keywords,
      recipes: await Promise.all(recipepuppy.map(recipesFormatted)),
    };
  }
}

export default new RecipeService();
