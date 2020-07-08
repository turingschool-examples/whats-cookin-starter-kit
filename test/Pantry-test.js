const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');
const User = require('../src/User');
const Recipe = require('../src/Recipe');
const recipes = require('../data/recipes');
const newRecipe = recipes.recipeData;
const users = require('../data/users');
const newUser = users.usersData;

describe('Pantry', () => {
  let pantry;
  let user;
  let recipe;
  beforeEach(function () {
    user = new User(
      newUser[3].name, 
      newUser[3].id, 
      newUser[3].pantry);
    recipe = new Recipe(
      newRecipe[2].id, 
      newRecipe[2].image, 
      newRecipe[2].ingredients, 
      newRecipe[2].instructions, 
      newRecipe[2].name, 
      newRecipe[2].tags);
    userPantry = new Pantry(user);
    user.recipesToCook.push(recipe);
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
    expect(userPantry.recipe[0]).to.be.an.instanceof(Recipe);
  })

});

