const chai = require('chai');
const expect = chai.expect;

const RecipeRepository = require('../src/RecipeRepository')
const Recipe = require('../src/Recipe')
const data = require('../data/helper-data.js')

describe('RecipeRepository', () => {

  it('should keep track of recipes', () => {
    let recipeRepository = new RecipeRepository(data.recipeData)
    let recipe = new Recipe(data.recipeData[0])

    expect(recipeRepository.recipes[0]).to.be.an.instanceof(Recipe)
    expect(recipeRepository.recipes[0]).to.deep.equal(recipe)
  })

  it('should be able to filter recipes based on one tag', () => {
    let recipeRepository = new RecipeRepository(data.recipeData)
    let recipe = new Recipe(data.recipeData[1])

    expect(recipeRepository.filterByTag('party platter')).to.deep.equal([recipe])
  })

  it('should be able to filter recipes based on two or more tags', () => {
    let recipeRepository = new RecipeRepository(data.recipeData)
    let recipe1 = new Recipe(data.recipeData[0])
    let recipe2 = new Recipe(data.recipeData[1])

    expect(recipeRepository.filterByTag('party platter dinner')).to.deep.equal([recipe2, recipe1])
  })

  it('should be able to filter based on name', () => {
    let recipeRepository = new RecipeRepository(data.recipeData)
    let recipe = new Recipe(data.recipeData[1])

    expect(recipeRepository.filterByName('2')).to.deep.equal([recipe])
  })

  it('should be able to filter by ingredients', () => {
    let recipeRepository = new RecipeRepository(data.recipeData)
    let recipe = new Recipe(data.recipeData[1])

    expect(recipeRepository.filterByIngredient("cheese", data.ingredientsData)).to.deep.equal([recipe])
  })
})