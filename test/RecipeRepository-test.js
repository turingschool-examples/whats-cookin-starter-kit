const chai = require('chai');
const expect = chai.expect;

const RecipeRepository = require('../src/RecipeRepository')
const Recipe = require('../src/Recipe')
const data = require('../data/helper-data.js')

describe('RecipeRepository', () => {

  it('should keep track of recipes', () => {
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)
    let recipe = new Recipe(data.recipeData[0], data.ingredientsData)
    
    expect(recipeRepository.recipes[0]).to.be.an.instanceof(Recipe)
    expect(recipeRepository.recipes[0]).to.deep.equal(recipe)
  })

  it('should be able to filter recipes based on one tag', () => {
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)
    let recipe = new Recipe(data.recipeData[1], data.ingredientsData)

    expect(recipeRepository.filterByTag('party platter')).to.deep.equal([recipe])
  })

  it('should be able to filter recipes based on two or more tags', () => {
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)
    let recipe1 = new Recipe(data.recipeData[0], data.ingredientsData)
    let recipe2 = new Recipe(data.recipeData[1], data.ingredientsData)

    expect(recipeRepository.filterByTag('party platter dinner')).to.deep.equal([recipe2, recipe1])
  })

  it('should be able to filter based on name', () => {
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)
    let recipe = new Recipe(data.recipeData[1], data.ingredientsData)

    expect(recipeRepository.filterByName('2')).to.deep.equal([recipe])
  })

  it('should be able to filter by ingredients', () => {
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)
    let recipe = new Recipe(data.recipeData[1], data.ingredientsData)

    expect(recipeRepository.filterByIngredients("cheese")).to.deep.equal([recipe])
  })

  it('should have a master search function that allows users to search by name, tag or ingredient simultaneously', () => {
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)
    let recipe = new Recipe(data.recipeData[1], data.ingredientsData)

    expect(recipeRepository.filterByIngredients("cheese")).to.deep.equal([recipe])
  })

  it('should have a master search method, allowing users to search by any name, tag or ingredient', () => {
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)
    let recipe = new Recipe(data.recipeData[1], data.ingredientsData)

    expect(recipeRepository.masterSearch("cheese")).to.deep.equal([recipe])
  })

  it('search functionality should not be impacted by white space and special characters', () => {
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)
    let recipe = new Recipe(data.recipeData[1], data.ingredientsData)

    expect(recipeRepository.masterSearch(" cheese   , ! jsklfjg")).to.deep.equal([recipe]);
  })

  it('should return an empty array if an empty or nonsensical string is searched', () => {
    let recipeRepository = new RecipeRepository(data.recipeData, data.ingredientsData)
    expect(recipeRepository.masterSearch(" chese  *& , ! jsklfjg")).to.deep.equal([]);
  })

})