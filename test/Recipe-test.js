const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe')
const data = require('../data/helper-data.js')

describe('Recipe', () => {

  it('should have properties for id, image, ingredients, instructions and tags', () => {
    let recipe = new Recipe(data.recipeData[0], data.ingredientsData);

    expect(recipe.name).to.deep.equal(data.recipeData[0].name);
    expect(recipe.id).to.deep.equal(data.recipeData[0].id);
    expect(recipe.image).to.deep.equal(data.recipeData[0].image);
    expect(recipe.ingredients.length).to.deep.equal(data.recipeData[0].ingredients.length);
    expect(recipe.instructions).to.deep.equal(data.recipeData[0].instructions);
    expect(recipe.tags).to.deep.equal(data.recipeData[0].tags);
  })

  it('should be able to determine the names of ingredients needed', () => {
    let recipe = new Recipe(data.recipeData[0], data.ingredientsData);
    expect(recipe.getIngredients(data.ingredientsData)).to.deep.equal(['salt', 'olives', 'sugar', 'cumin']);
  })

  it('should be able to calculate the total cost of ingredients', () => {
    let recipe = new Recipe(data.recipeData[0], data.ingredientsData);
    let ingredientsTotalCost = recipe.ingredients.reduce((sum, ingredient) => sum += ingredient.quantity.amount * ingredient.estimatedCost, 0)

    expect(recipe.getIngredientsCost(data.ingredientsData)).to.deep.equal(`$${ingredientsTotalCost/100}`);
  })

  it('should return its directions', () => {
    let recipe = new Recipe(data.recipeData[0], data.ingredientsData);
    expect(recipe.returnInstructions()).to.deep.equal(['1.) Preheat oven to 400 degrees', '2.) Add all the ingredients together in a large mixing bowl', '3.) pour ingredients into a 9 X 11 oven safe dish and bake for 45-50 minutes', '4.) Enjoy!']);
  })

})