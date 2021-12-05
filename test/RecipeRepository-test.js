import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Cookbook', () => {
  let cookbook, recipe1, recipe2, recipe3;
  beforeEach(() => {
    cookbook = new RecipeRepository(recipe1, recipe2, recipe3)
    recipe1 = new Recipe(334, "https://spoonacular.com/recipeImages/595736-556x370.jpg", ingredients, instructions, 'Strawberry & Tomato Soup', ['side dish', 'snack', 'main course']);
    recipe2 = new Recipe (928, 'https://www.yumyumlondon.com/project/friends.html', ingredients, instructions, 'Speed Juice', ['side dish', 'salad'])
    recipe3 = new Recipe (233, 'https://tasty.co/recipe/one-bowl-chocolate-chip-banana-bread' , ingredients, instructions, 'Chocolate Banana Bread', ['main course', 'condiment'])
  })
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it.skip('should be an instance of Recipe Repository', () => {
    expect(cookbook).to.be.an.instanceof(RecipeRepository)
  })
  it.skip('should take in recipes', () => {
    expect(cookbook.recipes.length).to.equal(3)
  })
  it.skip('recipes should be instances of Recipe', () => {
    //CHECK TO SEE IF RECIPES ARE INSTSANCES
  })
  it.skip('should be able to filter recipes with a tag', () => {
    //METHOD
  })
  it.skip('should be able to filter recipes on more than one tag', () => {
    //METHOD
  })
  it.skip('should be able to filter recipes based on keyword', () => {
    //METHOD
  })
  it.skip('should be able to filter recipes based on multiple keywords', () => {
    
  })
  it.skip('should be able to filter recipes based on ingredients', () => {
    //METHOD
  })
})
