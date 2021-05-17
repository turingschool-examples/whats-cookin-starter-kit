const chai = require("chai");
const expect = chai.expect;

const Ingredient = require("../src/Ingredient");
const User = require("../src/User");

describe("User", function() {
  let user
  beforeEach(() => {
    const recipe = new Recipe(11297, "Saige O'Kon");
    });
    // How can we pass different recipes ? Should we pass them as an arguments in our instances ? Or what other way we can assign an array of ingredients ?
    it('should be a function', function() {

      expect(User).to.be.function());
    });
  it('should be an instance of User', function() {

    expect(user).to.be.an.instanceof(User);
  });
  it('should be stored with an id number', function() {

    expect(user.id).to.be.number());
  });
  it('should store the name of the user', function() {

    expect(user.name).to.be.string());
  });
  it('should store related ingredients', function() {

    expect(user.pantry).to.be.array());
  });
  it('should store favorites recipes as an array', function() {

    expect(user.favoriteRecipes).to.be.array());
  });
  it('should store all the required ingredients for the recipe', function() {

    expect(user.recipesToCook).to.be.array());
  });
});
