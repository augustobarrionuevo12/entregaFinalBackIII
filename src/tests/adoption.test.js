import request from 'supertest';
import app from '../server.js';

describe('Adoption API', () => {
  it('Debe obtener todos los usuarios', async () => {
    const res = await request(app).get('/api/adoption/users');
    expect(res.statusCode).toEqual(200);
  });

  it('Debe crear un usuario', async () => {
    const res = await request(app)
      .post('/api/adoption/users')
      .send({ firstName: "Juan", lastName: "Perez", email: "juan@test.com", password: "123456" });
    expect(res.statusCode).toEqual(201);
  });
});