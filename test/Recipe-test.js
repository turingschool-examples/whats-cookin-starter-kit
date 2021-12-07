import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient';

describe('Recipe', () => {
  let recipe;
  beforeEach(() => {
    recipe = new Recipe({id: 22, image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ingredients: ['salt', 'chicken'], instructions: ['step1', 'step2'], name: 'Strawberry and Tomato Soup', tags: ['main course']});
  });
  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });
  it('should be an instance of recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe)
  })
  it('should have an id', () => {
    expect(recipe.id).to.equal(22)
  })
  it('should have an image', () => {
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg')
  })
  it('should have an ingredients list', () => {
    expect(recipe.ingredients).to.deep.equal(['salt', 'chicken'])
  })
  it('should have instructions', () => {
    expect(recipe.instructions).to.deep.equal(['step1', 'step2'])
  })
  it('should be able to have a recipe title', () => {
    expect(recipe.name).to.equal('Strawberry and Tomato Soup')
  })
  it('should have tags', () => {
    expect(recipe.tags).to.deep.equal(['main course'])
  })
  // it('should be able to have multiple tags', () => {
  //   expect(recipe.tags).to.equal(['side dish', 'main course', 'snack'])
  // })
  it('should get the names of each ingredient', () => {
    expect(recipe.ingredients[0]).to.equal('salt')
  })
  it('should get different names of each ingredient', () => {
    expect(recipe.ingredients[1]).to.equal('chicken')
  })
//   it.skip('should calculate the total cost of its ingredients', () => {
//   })
//   it.skip('should provide directions', () {
//   })
})
