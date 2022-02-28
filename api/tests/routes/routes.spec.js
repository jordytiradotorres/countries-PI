/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, Activity, conn } = require('../../src/db.js');

const agent = session(app);
const countries = [
  {
    id: 'ARG',
    name: 'Argentina',
    continent: 'America',
    population: 123456,
    area: 1234,
    capital: 'Buenos Aires',
    flag: 'https://restcountries.com/data/png/arg.png',
  },
  {
    id: 'NOR',
    name: 'Norway',
    continent: 'Europe',
    population: 12345,
    area: 123,
    capital: 'Oslo',
    flag: 'https://restcountries.com/data/png/nor.png',
  },
  {
    id: 'CHI',
    name: 'Chile',
    continent: 'America',
    population: 2345,
    area: 123,
    capital: 'Santiago de Chile',
    flag: 'https://restcountries.com/data/png/chi.png',
  },
];

const activity1 = {
  name: 'running',
  duration: 1,
  difficulty: 2,
  countryId: ['ARG', 'NOR'],
  season: 'spring',
};
const activity2 = {
  name: 'sightseeing',
  duration: 2,
  difficulty: 1,
  countryId: ['NOR'],
  season: 'spring',
};

describe('Activity routes', () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error('Unable to connect to the database:', err);
    })
  );
  beforeEach(() =>
    Country.sync({ force: true }).then(() =>
      countries.forEach((c) => Country.create(c))
    )
  );
  beforeEach(() => Activity.sync({ force: true }));
  describe('GET /activity', () => {
    it('should get 200', () => agent.get('/api/activity').expect(200));
  });
  describe('POST /api/activity', () => {
    it('should post an activity and get 200', () =>
      agent
        .post('/api/activity')
        .send(activity1)
        .then((r) => expect(r.status).to.equal(200)));
    it('should get a list of activities created', () =>
      agent
        .post('/api/activity')
        .send(activity1)
        .then(() => agent.post('/api/activity').send(activity2))
        .then(() => agent.get('/api/activity'))
        .then((re) => {
          expect(re.body.length).to.equal(2);
          expect(re.body[0]).to.equal(activity1.name);
          expect(re.body[1]).to.equal(activity2.name);
        }));
  });
});
