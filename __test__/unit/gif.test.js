/*
import axios from 'axios';

import GifService from '../../src/app/services/GifService';
import giphyResponse from '../utils/mocker';

jest.mock('axios');

describe('Gif Service', () => {
  it('should return 200 with the datas of the recipe puppy', async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ status: 200, data: giphyResponse })
    );

    const gifUrl =
      'https://media0.giphy.com/media/l0IpXwyCXikRK9Yl2/giphy.gif?cid=b1016bd86wmguf0ym2diuqstofizjhli4f5hv083yf2k6elc&rid=giphy.gif';
    const gif = await GifService.execute('orange');

    expect(gif).toStrictEqual(gifUrl);
  }, 20000);
});
*/
describe('Example de test', () => {
  it('example', () => {
    expect(2).toBe(2);
  });
});
