const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/pantry');
const usersData = require('../data/users.js');

describe('Pantry', () => {
  let pantry, pantrySupply, badPantry;

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

  it('should only accept arrays as inputs', () => {
    badPantry = new Pantry('rotten eggs');
    expect(badPantry.ingredients).to.deep.equal([]);
  });

  it('should only hold ingredients which are objects', () => {
    badPantry = new Pantry(['rotten eggs']);
    expect(badPantry.ingredients).to.deep.equal([]);
  })

  it('it should only accept ingredients with a number value ingredient key', () => {
    badPantry = new Pantry([{ingredient:'rotten eggs'}]);
    expect(badPantry.ingredients).to.deep.equal([]);
  });

  it("it should only accept ingredients with a number value amount key", () => {
    badPantry = new Pantry([{ ingredient: 123, amount: 'forty'}]);
    expect(badPantry.ingredients).to.deep.equal([]);
  });
});