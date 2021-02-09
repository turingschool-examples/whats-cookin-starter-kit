const chai = require('chai');
const expect = chai.expect;
const Ingredient = require('../src/reciperepo');

describe('RecipeRepo', () => {
  let ingredient1;
  let ingredient2;

  beforeEach(() => {
    ingredient1 = new Ingredient(1, 'cheese', 350);
    ingredient2 = new Ingredient(2, 'wine', 1250);
  })
});