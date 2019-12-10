const chai = require('chai');
const expect = chai.expect;

const user = require("../data/users");
const pantry = require('../src/scripts/Pantry');


beforeEach(() => {
    pantry = new UserPantry(userData[0]);
  })

describe ('Users Pantry', () => {

  it('should be a function', () => {
    expect(pantry).to.be.a('function');
  })

  it.skip('should be an instance of a Pantry', () => {
    expect(pantry).to.be.an.instanceof(UserPantry);
  })

  it.skip('should have the ingredients of the Pantry', () => {
    expect(pantry.ingredient).to.equal(11477);
  })

  it.skip('should have a amount', () => {
    expect(pantry.amount).to.equal(5);
  })
});
