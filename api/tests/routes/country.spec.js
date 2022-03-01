/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  name: 'Argentina',
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create({
      ID:1000,
      name:"Roma",
      image:"imagenVacía",
      continent:"Europa"
    })));
  describe('GET /countries', () => {
    it('should get 200', async() =>{


        
        let response =await agent.get('/countries')
        expect(response.statusCode).to.equal(200)

    }
    ).timeout(20000);
  }
  );
});
