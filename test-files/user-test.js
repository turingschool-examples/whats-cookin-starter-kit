const chai = require("chai");
const expect = chai.expect;
let user;

const Users = ("../src/scripts/Users.js");

beforeEach(() => {
  // Will need to input arguments to match the data file
  user = new Users('id', 'name', 'pantry');
  })

describe ('Users', () => {

  it.skip('should be a function', () => {
    expect(User).to.be.a('function');
  })

  it.skip('should be an instance of a User', () => {
    expect(User).to.be.an.instanceof(User);
  })

  it.skip('should have a unique id', () => {
    expect(user.id).to.equal(1);
  })

  it.skip('should have the name', () => {
    expect(user.name).to.equal("Saige O'Kon");
  })

  it.skip('should have a pantry of available ingredients', () => {
    expect(user.pantry).to.equal('Object');
  })
});
