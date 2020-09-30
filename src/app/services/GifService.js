import axios from 'axios';

class GifService {
  async execute(keywords) {
    const url = 'https://api.giphy.com/v1/gifs/search';
    let response;

    try {
      response = await axios.get(url, {
        params: {
          api_key: process.env.GIPHY_API_KEY,
          q: keywords,
          limit: 1,
          lang: 'en',
        },
      });
    } catch (err) {
      throw new Error(
        `Giphy API error, please try again later: ${err.message}`
      );
    }

    const gif = response.data.data[0].images.original.url;

    return gif;
  }
}

export default new GifService();
