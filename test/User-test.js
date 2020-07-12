const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Recipe = require('../src/Recipe')
const Ingredient = require('../src/Ingredient')
const Pantry = require('../src/Pantry')
const sampleUsers = require('../data/sampleUsers')
const sampleIngredientsData = require('../data/sampleIngredients')
let ingredients = sampleIngredientsData.map(ingredient => {
  return new Ingredient(ingredient)
})
const sampleRecipesData = require('../data/sampleRecipes')

describe('User', function() {
  let user1, user2, recipe1Data, recipe2Data, ingredients1, ingredients2, recipe1, recipe2;
  beforeEach(function() {
    user1 = new User(sampleUsers[0]);
    user2 = new User(sampleUsers[1]);
    recipe1Data = sampleRecipesData[0];
    recipe2Data = sampleRecipesData[1];
    ingredients1 = new Ingredient(ingredients[0])
    ingredients2 = new Ingredient(ingredients[1])
    recipe1 = new Recipe(recipe1Data.id, recipe1Data.image, [ingredients1], recipe1Data.instructions, recipe1Data.name, recipe1Data.tags);
    recipe2 = new Recipe(recipe2Data.id, recipe2Data.image, [ingredients2], recipe2Data.instructions, recipe2Data.name, recipe2Data.tags);
    pantry = new Pantry(ingredients)
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
    expect(user1.pantry.ingredients.length).to.equal(36)
  });

  it('should have different items in a different users pantry', function() {
    expect(user2.pantry.ingredients.length).to.equal(58)
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

  it('should be able to remove prexisting recipe from favorites list', function() {
    user1.toggleFavoriteRecipe(recipe1);
    user1.toggleFavoriteRecipe(recipe1);
    user1.toggleFavoriteRecipe(recipe2);

    expect(user1.favoriteRecipes[0].id).to.equal(678353)
  });

  it('should be able to decide to cook a recipe that week', function() {
    user1.toggleRecipeToCook(recipe1)

    expect(user1.recipesToCook.length).to.deep.equal(1)
  });

  it('should be able to remove prexisting recipe from recipe to cook list', function() {
    user1.toggleRecipeToCook(recipe1)
    user1.toggleRecipeToCook(recipe2)
    user1.toggleRecipeToCook(recipe1)

    expect(user1.recipesToCook[0].id).to.equal(678353)
  });

  it('should be able to save recipes', function() {
    expect(user1.getSavedRecipes()).to.deep.equal([])

    user1.toggleFavoriteRecipe(recipe1)
    user1.toggleFavoriteRecipe(recipe2)
    user1.getSavedRecipes(recipe1)

    expect(user1.getSavedRecipes()).to.deep.equal([recipe1, recipe2])
  });

  it('should be able to search saved recipes by name or by ingredients', function() {
    user1.toggleFavoriteRecipe(recipe1)
    user1.toggleFavoriteRecipe(recipe2)

    expect(user1.searchByRecipeOrIngr("loaded")).to.deep.equal([recipe1])
    expect(user1.searchByRecipeOrIngr("LoAdEd")).to.deep.equal([recipe1])

    expect(user1.searchByRecipeOrIngr("wheat")).to.deep.equal([recipe1])
    expect(user1.searchByRecipeOrIngr("WhEaT")).to.deep.equal([recipe1])

    expect(user1.searchByRecipeOrIngr("maple")).to.deep.equal([recipe2])
    expect(user1.searchByRecipeOrIngr("MaPlE")).to.deep.equal([recipe2])
  });
});
