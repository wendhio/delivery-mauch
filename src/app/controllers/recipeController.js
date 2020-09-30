import axios from 'axios';

class RecipeController {
  async show(request, response) {
    try {
      // const keywords = request.query.i && request.query.i.split(',');

      const url = 'http://www.recipepuppy.com/api/';

      const result = await axios.get(`${url}?i=onions`);

      return response.status(200).json(result.data.results);
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }
}

export default new RecipeController();
