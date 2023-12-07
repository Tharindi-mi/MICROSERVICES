const request = require('supertest');
const app = require('./app'); // Assuming your Express app setup is in app.js or server.js

describe('Test endpoints', () => {
  it('responds with health message on /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});