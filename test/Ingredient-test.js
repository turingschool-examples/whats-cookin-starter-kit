const chai = require("chai");
const expect = chai.expect;

const Ingredient = require("../src/Card");

describe("Ingredient", function() {
  let ingredient
    beforeEach(() => {
    const ingredient = new Ingredient(20081, "tortilla", 130);
    });
    it('should be a function', function() {

      expect(Ingredient).to.be.a('function');
    });
  it('should be an instance of Ingredient', function() {

    expect(ingredient).to.be.an.instanceof(Ingredient);
  });
  it('should be store with an id number', function() {

    expect(ingredient.id).to.be.number());
  });
  it('should store the name of the ingredient', function() {

    expect(ingredient.name).to.be.string());
  });
  it('should store the cost of the ingredient', function() {

    expect(ingredient.cost).to.be.number());
  });
});
