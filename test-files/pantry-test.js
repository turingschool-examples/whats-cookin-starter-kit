const chai = require('chai');
const expect = chai.expect;
let pantry;

const userData = require("../data/users");
const recipeData = require("../data/recipes");
const Users = require("../src/scripts/Users");
const Recipe = require("../src/scripts/Recipes");
const Pantry = require('../src/scripts/Pantry');

beforeEach(() => {
    pantry = new Pantry(userData[0].pantry);
  })

describe ('Users Pantry', () => {

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  })

  it('should be an instance of a Pantry', () => {
    expect(pantry).to.be.an.instanceof(Pantry);
  })

  it('should have the ingredients of the Pantry', () => {
    expect(pantry.pantryList).to.equal(userData[0].pantry);
  })

  it('should be a property of a new User', () => {
    user = new Users(userData[0]);
    expect(user.pantry).to.deep.equal(pantry);
  })

  it('should be able to tell if ingredients are missing from a recipe', () => {
    recipe = new Recipe(recipeData[0]);
    user = new Users(userData[0]);
    expect(user.pantry.missingIngredients(recipeData[0].ingredients))
  })
});
