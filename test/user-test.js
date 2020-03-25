const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user');
const Ingredient = require('../src/ingredient');
const userData = require('../data/users.js');
const recipeData = require('../data/recipes.js');
const ingredientsData = require('../data/ingredients.js');


describe('User', () => {
  beforeEach(() => {
    user = new User(userData[0], userData, recipeData, ingredientsData);
  });
  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  });

  it('should be able to hold all ingredients in a pantry', function() {
    expect(user.pantry).to.deep.equal(user.pantry);
  });

  it('should be able to favorite a recipe', function() {
    let recipe1 = user.recipeData[0];
    let recipe2 = user.recipeData[1];

    user.addToFavorites(recipe1);

    expect(user.favoriteRecipes).to.deep.equal([recipe1]);
  });

  it('should be able to remove a favorite recipe', function() {
    let recipe1 = user.recipeData[0];

    user.addToFavorites(recipe1);
    expect(user.favoriteRecipes).to.deep.equal([recipe1]);
    
    user.removeFromFavorites(recipe1);
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it.skip('should check the pantry for ingredients for a given recipe', function() {

  });

  it.skip('should tell the user what ingredients they need for a given recipe', function() {

  });

  it('should be able to add ingredients to the pantry', function() {
    let newIngredient = {
      ingredient: ingredientsData[5].id,
      amount: 5
    };
    user.addToPantry(newIngredient);

    expect(user.pantry).to.include(newIngredient);

    // let otherIngredient = {
    //   ingredient: ingredientsData[4].id,
    //   amount: 2
    // };
    //
    // user.addToPantry(otherIngredient);
    // console.log(user.pantry)
    // expect(user.pantry).to.not.include(otherIngredient);
  });

  it.skip('should be able to remove ingredients from the pantry', function() {

  });

  it.skip('should be able to cook a recipe', function() {

  });
});
