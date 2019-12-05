const chai = require("chai");
const expect = chai.expect;
let ingredient;

const Ingredients = require("../src/scripts/Ingredients");
const ingredientData = require('../data/ingredients');

beforeEach(() => {
  ingredient = new Ingredients(ingredientData[0]);
})

describe ('Ingredients', () => {

  it('should be a function', () => {
    expect(Ingredients).to.be.a('function');
  })

  it('should be an instance of Ingredient', () => {
    expect(ingredient).to.be.an.instanceof(Ingredients);
  })

  it('should have a unique id', () => {
    expect(ingredient.id).to.equal(ingredientData[0].id);
  })

  it('should have the name of the ingredient', () => {
    expect(ingredient.name).to.equal(ingredientData[0].name);
  })

  it('should have a price in cents', () => {
    expect(ingredient.estimatedCostInCents).to.equal(ingredientData[0].estimatedCostInCents);
  })

  it('should be able to show the price in dollars', () => {
    expect(ingredient.priceInDollars()).to.equal((ingredientData[0].estimatedCostInCents / 100).toLocaleString("en-US", {style:"currency", currency:"USD"}));
  })

})