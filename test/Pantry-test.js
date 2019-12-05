const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../classes/Pantry');
const users = require('../data/users');

describe('Pantry', () => {
  let pantry;

  beforeEach(() => {
    pantry = new Pantry(users[0]);
  });

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should have a default ingredientsInPantry of users[0].ingredients', function() {
    expect(pantry.ingredientsInPantry).to.equal(users[0].ingredients);
  });
})
