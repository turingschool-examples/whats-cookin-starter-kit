const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe')
const data = require('../data/helper-data.js')

describe('Recipe', () => {

  it('should have properties for id, image, ingredients, instructions and tags', () => {
    let recipe = new Recipe(data.recipeData[0]);
    let ingredients = data.recipeData[0].ingredients;
    let instructions = data.recipeData[0].instructions;
    let tags = data.recipeData[0].tags;

    expect(recipe.name).to.deep.equal("Random dish 1");
    expect(recipe.id).to.deep.equal(111);
    expect(recipe.image).to.deep.equal("https://imageForRecipeOne");
    expect(recipe.ingredients).to.deep.equal(ingredients);
    expect(recipe.instructions).to.deep.equal(instructions);
    expect(recipe.tags).to.deep.equal(tags);
  })

  it('should be able to determine the name of ingredients needed', () => {
    let recipe = new Recipe(data.recipeData[0]);
    console.log(recipe);
    expect(recipe.findIngredientNames()).to.deep.equal(['salt', 'olives', 'sugar', 'cumin']);
  })

  it('should be able to calculate the total cost of ingredients', () => {
    let recipe = new Recipe(data.recipeData[0]);
    expect(recipe.calculateTotalCost()).to.deep.equal("$26.11");
  })

  it('should return its directions', () => {
    let recipe = new Recipe(data.recipeData[0]);
    expect(recipe.printInstructions()).to.deep.equal(['1.) Preheat oven to 400 degrees', '2.) Add all the ingredients together in a large mixing bowl', '3.) pour ingredients into a 9 X 11 oven safe dish and bake for 45-50 minutes', '4.) Enjoy!']);
  })
})