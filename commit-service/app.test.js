const request = require('supertest');
const app = require('./app'); // Assuming your Express app setup is in app.js or server.js

describe('Test endpoints', () => {
  it('responds with issues on', async () => {
    const response = await request(app).get('/api/commits/senuravihanjayadeva/coding-challange');
    expect(response.status).toBe(200);
  });

  it('responds with health message on', async () => {
    const response = await request(app).get('/');
    expect(response.body.health).toBe('Commits Service UP');
  });
});