const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/Ingredient');

describe('Ingredient', () => {

  let ingredient;


  beforeEach('create a recipe repository', () => {
    //recipeRepo = new RecipeRepo(recipeData, userData);
    ingredient = new Ingredient({"id": 9999,
      "quantity": {"amount": 2, "unit": "tablespoons"}});
  });

  it('should instantiate an Ingredient', () => {

    expect(ingredient).to.be.an.instanceOf(Ingredient);
  });

  it('should have an id', () => {
    expect(ingredient.id).to.deep.equal(9999);
  });

  it('should have a quantity', () => {
    expect(ingredient.quantity).to.deep.equal({
      "amount": 2, "unit": "tablespoons"});
  });

  it('should have an amount', () => {
    expect(ingredient.amount).to.deep.equal(2);
  });

  it('should have a unit of measurement', () => {
    expect(ingredient.unit).to.deep.equal('tablespoons');
  });

})
