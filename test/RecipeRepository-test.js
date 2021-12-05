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
  it('should be an instance of Recipe Repository', () => {
    expect(cookbook).to.be.an.instanceof(RecipeRepository)
  })
  it('should take in recipes', () => {
    expect(cookbook.recipes.length).to.equal(3)
  })
})


//it should be a function
//should be an instance of recipe RecipeRepository
//should take in recipe recipeData
//recipe data should be instance of recipes
//should be able to filter recipes based on one tag
//should be able to filter recipes based on more than one tag
//should be able to filter recipes by name
//should be able to filter recipes by ingredients



//Instantiate Recipe
//It should have id
//It should have recipeImages
//should have ingredientList
//should have instructions
  //instructions should have step/single instruction
  //instructions should have number/step order
//should have recipeTitle
//it should have tags
//it should be able to hold multiple tags
//ingredient list should have an id
//ingredient list should have quantity
  //quantity should have amount
  //quanity should have unit
