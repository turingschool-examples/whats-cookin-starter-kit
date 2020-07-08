const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Recipe = require('../src/Recipe')
const usersData = require('../data/users')
const recipeData = require('../data/recipes')

describe('User', function() {
  let user1;
  beforeEach(function() {
    user1 = new User(usersData[0])
    user2 = new User(usersData[1])
    recipe1 = new Recipe(recipeData[0])
    recipe2 = new Recipe(recipeData[1])
  });

  it('should be a function', function() {
    expect(User).to.be.a('function')
  });

  it('should be an instance of User', function() {
    expect(user1).to.be.an.instanceof(User)
  });

  it('should have a name', function() {
    expect(user1.name).to.equal("Saige O'Kon")
  });

  it('should be able to have a different name', function() {
    expect(user2.name).to.equal("Ephraim Goyette")
  });

  it('should have a user ID', function() {
    expect(user1.id).to.equal(1)
  });

  it('should be able to have a different user ID', function() {
    expect(user2.id).to.equal(2)
  })

  it('should have items in its pantry', function() {
    expect(user1.pantry.length).to.equal(36)
  });

  it('should have different items in a different users pantry', function() {
    expect(user2.pantry.length).to.equal(58)
  });

  it('should start with no favorite recipes', function() {
    expect(user1.favoriteRecipes).to.deep.equal([])
  });

  it('should start with no recipes to cook', function() {
    expect(user1.recipesToCook).to.deep.equal([])
  });

  it('should start with an empty grocery list', function() {
    expect(user1.groceryList).to.deep.equal([])
  });

  it('should be able to add recipes to favorites list', function() {
    user1.toggleFavoriteRecipe(recipe1);

    expect(user1.favoriteRecipes.length).to.deep.equal(1)
  });

  it('if a recipe already exists within favorites array, recipe should be removed', function() {
    user1.toggleFavoriteRecipe(recipe1);
    user1.toggleFavoriteRecipe(recipe1);
    user1.toggleFavoriteRecipe(recipe2);

    expect(user1.favoriteRecipes.length).to.deep.equal(1)
  });

  it('if a recipe is removed, the recipe that remains should be the expected recipe', function() {
    user1.toggleFavoriteRecipe(recipe1);
    user1.toggleFavoriteRecipe(recipe1);
    user1.toggleFavoriteRecipe(recipe2);

    expect(user1.favoriteRecipes[0].id.id).to.equal(678353)
  })
});
