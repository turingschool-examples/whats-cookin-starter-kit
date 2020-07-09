const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');
const User = require('../src/User');
const Recipe = require('../src/Recipe');
const recipes = require('../data/recipes.js');
const newRecipe = recipes.recipeData;
const users = require('../data/users');
const newUser = users.usersData;

describe('Pantry', () => {
  let pantry;
  let user;
  let recipe;

  beforeEach(function () {
    user = new User({
        'name': newUser[3].name,
        'id': newUser[3].id,
        'pantry': newUser[3].pantry
      });
    recipe1 = new Recipe({
        "id": newRecipe[2].id,
        "image": newRecipe[2].image,
        "ingredients": newRecipe[2].ingredients,
        "instructions": newRecipe[2].instructions,
        "name": newRecipe[2].name,
        "tags": newRecipe[2].tags
      });
    recipe2 = new Recipe({
      "id": newRecipe[5].id,
      "image": newRecipe[5].image,
      "ingredients": newRecipe[5].ingredients,
      "instructions": newRecipe[5].instructions,
      "name": newRecipe[5].name,
      "tags": newRecipe[5].tags
      });
    userPantry = new Pantry(user);
    userPantry.recipe = recipe1;
  });

  it('should be a function', () => {
    expect(Pantry).to.be.a('function');
  });
  
  it('should be an instance of Card', () => {
    expect(userPantry).to.be.an.instanceof(Pantry);
  });
  
  it('should have a pantry property with an array of a users pantry', () => {
    expect(userPantry.pantry).to.be.an('array').with.a.lengthOf(54);
  });

  it('should store an instance of recipe we want to make', () => {
    expect(userPantry.recipe).to.be.an.instanceof(Recipe);
  });

  it('should be able to check if user has enough ingredients to make recipe', () => {
    expect(userPantry.checkPantry()).to.deep.equal(true);
  });

  it.skip('should return false if user does not have all ingredients to make recipe', () => {
    expect(userPantry.checkPantry()).to.deep.equal(false);
  });

  it('should have an array of needed ingredients that is empty by default', () => {
    expect(userPantry.shoppingList).to.be.an('array').with.a.lengthOf(0);
  });

  it.skip('should list additional ingredients user needs to make recipe', () => {
    
  });
});

