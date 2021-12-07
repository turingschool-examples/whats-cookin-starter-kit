import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient';

describe('Cookbook', () => {
  let cookbook, recipe1, recipe2, recipe3;
  beforeEach(() => {
    cookbook = new RecipeRepository([recipe1, recipe2, recipe3]);
    recipe1 = new Recipe({id: 334, image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ingredients: [], instructions: [], name: 'Strawberry & Tomato Soup', tags: ['side dish', 'snack', 'main course']});
    recipe2 = new Recipe({id: 928, image:'https://www.yumyumlondon.com/project/friends.html', ingredients: [], instructions: [], name: 'Speed Juice', tags: ['side dish', 'salad']});
    recipe3 = new Recipe({id: 233, image: 'https://tasty.co/recipe/one-bowl-chocolate-chip-banana-bread', ingredients: [], instructions: [], name: 'Chocolate Banana Bread', tags: ['main course', 'condiment']});
  })
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('should be an instance of Recipe Repository', () => {
    expect(cookbook).to.be.an.instanceof(RecipeRepository)
  })
  it('should take in recipes', () => {
    console.log(cookbook);
    expect(cookbook.recipeList.length).to.equal(3)
    
  })
  // it.skip('recipes should be instances of Recipe', () => {
  //   //CHECK TO SEE IF RECIPES ARE INSTSANCES
  // })
  it('should be able to filter recipes with a tag', () => {
    let filteredRecipes = cookbook.filterByTag('main course');
    
    expect(filteredRecipes.length).to.equal(2)
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
