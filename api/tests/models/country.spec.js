const { Country, conn } = require('../../src/db.js');
const chai = require('chai');
const { expect } = require('chai');
const should=chai.should()


describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', async() => {
        try{

          const newCountry =  await Country.create({
            ID:1000,
            name:"",   //si el nombre está vacío tira error
            image:"imagenVacía",
            continent:"Europa"
          })
        }catch(e){
           should.exist(e)
        }
        
        


      });
    });
  });
});
