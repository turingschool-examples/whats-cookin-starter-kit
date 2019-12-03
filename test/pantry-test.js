const chai = require('chai');
const expect = chai.expect;
const Pantry = require('../src/pantry-class');

describe('ingredients', function() {

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Pantry();
    expect(turn).to.be.an.instanceof(Pantry);
  });
});
