const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../classes/Pantry');

describe('Pantry', () => {
let pantry;

beforeEach(() => {
  pantry = new Pantry();
});

  it('should be a function', function() {
  expect(Pantry).to.be.a('function');
});
})
