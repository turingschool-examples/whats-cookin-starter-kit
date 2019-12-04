const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../classes/Recipe');

describe('Recipe', () => {
let recipe;

beforeEach(() => {
  recipe = new Recipe();
});

  it('should be a function', function() {
  expect(Recipe).to.be.a('function');
});
})
