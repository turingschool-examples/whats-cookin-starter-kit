const chai = require('chai');
const expect = chai.expect;
let pantry;

const userData = require("../data/users");
const pantry = require('../src/scripts/Pantry');


beforeEach(() => {
    pantry = new UserPantry(userData[0]);
  })

describe ('Recipes', () => {

  it('should be a function', () => {
    expect(UserPantry).to.be.a('function');
  })

  it('should be an instance of a Pantry', () => {
    expect(pantry).to.be.an.instanceof(UserPantry);
  })

  it('should have the ingredients of the Pantry', () => {
    expect(pantry.ingredient).to.equal([11477]);
  })

  it('should have a amount', () => {
    expect(pantry.amount).to.equal([5]);
  })
});
