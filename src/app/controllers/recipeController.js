import RecipeService from '../services/RecipeService';

class RecipeController {
  async show(request, response) {
    try {
      const keywords = request.query.i && request.query.i.split(',');

      if (!keywords || keywords.length > 3) {
        return response.status(400).json({ error: 'Query invalid ingredient' });
      }

      const result = await RecipeService.execute(keywords);

      return response.status(200).json(result);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  }
}

export default new RecipeController();
