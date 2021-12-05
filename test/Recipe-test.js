import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
  let recipe;
  beforeEach(() => {
    recipe = new Recipe();
  });
  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });
  it('should be an instance of recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe)
  })
  it.skip('should have an id', () => {
    let recipe = new Recipe(1210);
    expect(recipe.id).to.equal(1210)
  })
  it.skip('should have an image', () => {
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg')
  })
  it.skip('should have an ingredient list', () => {
    expect(recipe.ingredients).to.deep.equal([])
  })
  it.skip('should have instructions', () => {
    expect(recipe.instructions).to.deep.equal([])
  })
  it.skip('should be able to have a recipe title', () => {
    expect(recipe.name).to.equal('Strawberry and Tomato Soup')
  })
  it.skip('should have tags', () => {
    expect(recipe.tags).to.deep.equal([])
  })
  it.skip('should be able to have multiple tags', () => {
    expect(recipe.tags).to.equal(['side dish', 'main course', 'snack'])
  })
  it.skip('should get the names of each ingredient', () => {
    //WRITE THE TEST FOR METHOD TO ACCESS INGREDIENT NAMES
  })
  it.skip('should calculate the total cost of its ingredients', () => {
    //WRITE TEST FOR METHOD TO ACCESS NESTED INGREDIENTS
  })
  it.skip('should provide directions', () {
    //WRITE TEST FOR ACCESSING INSTRUCTIONS
  })
})
