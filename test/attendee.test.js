const request = require('supertest');
const app = require('../main');
const db = require('../src/database/models/index').sequelize;

describe('attendee test suite', () => {
  describe('add attendee', () => {
    it('should add an attendee', async (done) => {
      const res = await request(app)
        .post('/api/attendee')
        .send({
          first_name: 'ikwechegh',
          last_name: 'ifeanyi',
          phone: '07066047054',
          email: 'jordunjames@gmail.com',
          role: 'attendee',
          arrival_time: '2:40pm',
        });
      expect(res.statusCode).toEqual(201);
      expect(res.body.message).toEqual('attendee added');
      done();
    });
  });

  describe('get all attendees', () => {
    it('should list all attendees', async (done) => {
      const res = await request(app)
        .get('/api/attendee');

      expect(res.statusCode).toEqual(200);
      expect(res.body.message).toEqual('All attendees retrieved');
      done();
    });
  });
});

afterAll(() => {
  db.close();
});
