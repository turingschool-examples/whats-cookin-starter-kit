const chai = require('chai');
const expect = chai.expect;
const data = require('../data/helper-data.js')

const Ingredient = require('../src/Ingredient.js');
const RecipeRepository = require('../src/RecipeRepository')
const User = require('../src/User.js')

describe('User', () => {

  it('should accept userData and an Ingredients array to instantiate a new User object', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    expect(user).to.be.an.instanceof(User)
    expect(user.pantry[0]).to.be.an.instanceof(Ingredient);
  })

  it('should have an empty array of favorites if arument is null, undefined, or not present in the constructor method', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    expect(user.favoriteRecipes).to.deep.equal([])
    expect(user.recipesToCook).to.deep.equal([])

    let user2 = new User(data.usersData[0], data.ingredientsData, null, null)
    expect(user2.favoriteRecipes).to.deep.equal([])
    expect(user2.recipesToCook).to.deep.equal([])

  })

  it('should be able to add recipes to its array of favorites', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)

    user.addRecipeToFavs(recipeRepository.recipes[0])
    expect(user.favoriteRecipes).to.deep.equal([recipeRepository.recipes[0]])
    user.addRecipeToFavs(recipeRepository.recipes[1])
    expect(user.favoriteRecipes).to.deep.equal([recipeRepository.recipes[0], recipeRepository.recipes[1]])

  })

  it('should not be able to add duplicate recipes to its list of favorites', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)

    user.addRecipeToFavs(recipeRepository.recipes[0])
    user.addRecipeToFavs(recipeRepository.recipes[0])
    user.addRecipeToFavs(recipeRepository.recipes[0])

    expect(user.favoriteRecipes).to.deep.equal([recipeRepository.recipes[0]])
    expect(user.favoriteRecipes.length).to.deep.equal(1)
  })

  it('should be able to remove recipes from its array of favorites', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)
    
    user.addRecipeToFavs(recipeRepository.recipes[0])
    user.removeRecipeFromFavs(recipeRepository.recipes[0])

    expect(user.favoriteRecipes).to.deep.equal([]);
  })

  it('should be able to add recipes to its list of recipes to cook', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)

    user.addRecipeToCook(recipeRepository.recipes[0])
    expect(user.recipesToCook).to.deep.equal([recipeRepository.recipes[0]])
    user.addRecipeToCook(recipeRepository.recipes[1])
    expect(user.recipesToCook).to.deep.equal([recipeRepository.recipes[0], recipeRepository.recipes[1]])

  })

  it('should not be able to add duplicate recipes to its list of recipes to cook', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)

    user.addRecipeToCook(recipeRepository.recipes[0])
    user.addRecipeToCook(recipeRepository.recipes[0])
    user.addRecipeToCook(recipeRepository.recipes[0])

    expect(user.recipesToCook).to.deep.equal([recipeRepository.recipes[0]])
    expect(user.recipesToCook.length).to.deep.equal(1)
  })

  it('should be able to remove a recipe from its todo list once it has been cooked', () => {
    let user = new User(data.usersData[0], data.ingredientsData)
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)

    user.addRecipeToCook(recipeRepository.recipes[0])
    user.removeRecipeToCook(recipeRepository.recipes[0])

    expect(user.favoriteRecipes).to.deep.equal([]);

  })

})

