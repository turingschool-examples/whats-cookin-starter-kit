const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');

describe('Pantry', () => {
  let pantry;
  beforeEach(function () {
    pantry = new Pantry();
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Card', () => {
    expect(pantry).to.be.an.instanceof(Pantry);
  });
});

