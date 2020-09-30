import request from 'supertest';

import app from '../../src/app';

describe('GET /recipes', () => {
  it('should return 200 with the datas of the recipe puppy', async () => {
    const response = await request(app).get('/recipes').query({
      i: 'orange',
    });

    expect(response.status).toBe(200); // HTTP Code
  }, 20000);

  it('should return 400 when query params is null or bigger 3', async () => {
    const response = await request(app).get('/recipes').query({
      i: 'orange,tomato,onion,apple',
    });

    expect(response.status).toBe(400); // HTTP Code
  });

  it('should return 400 when bad request', async () => {
    const response = await request(app).get('/recipes').query({
      i: '',
    });

    expect(response.status).toBe(400); // HTTP Code
  });
});
