const chai = require("chai");
const expect = chai.expect;
let ingredient;

const Ingredients = require("../src/scripts/Ingredients");

beforeEach(() => {
  // Will need to input arguments to match the data file
  ingredient = new Ingredients(2080, 'kimchi', 710);
})

describe ('Ingredients', () => {

  it('should be a function', () => {
    expect(Ingredients).to.be.a('function');
  })

  it('should be an instance of Ingredient', () => {
    expect(ingredient).to.be.an.instanceof(Ingredients);
  })

  it('should have a unique id', () => {
    expect(ingredient.id).to.equal(2080);
  })

  it('should have the name of the ingredient', () => {
    expect(ingredient.name).to.equal('kimchi');
  })

  it('should have a price in cents', () => {
    expect(ingredient.estimatedCostInCents).to.equal(710);
  })

  it('should be able to show the price in dollars', () => {
    expect(ingredient.priceInDollars()).to.equal(7.10);
  })

})