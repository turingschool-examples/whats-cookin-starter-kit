const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/pantry');
const usersData = require('../data/users.js');

describe('Pantry', () => {
  let pantry, pantrySupply;

  beforeEach(() => {
    pantrySupply = usersData[0].pantry;
    pantry = new Pantry(pantrySupply);
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');    
  });

  it('should hold a users ingredients', () => {
    expect(pantry.ingredients).to.deep.equal(pantrySupply);
  });
});