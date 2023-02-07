import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import testRecipeData from '../src/data/testRecipes';
import Recipe from '../src/classes/Recipe';
import ingredientsData from '../src/data/ingredients';

describe ('Recipe class', () => {
  let recipeRepo;
  let recipeData;
  let recipeClass;
  let ingredientList;
  beforeEach(() => {
    recipeData = testRecipeData;
    recipeRepo = new RecipeRepository(recipeData);
    recipeClass = new Recipe(recipeData[0]);
    ingredientList = ingredientsData;
  });

  it('Should be a function', () => {
    expect(recipeClass).to.be.instanceOf(Recipe);
  });

  it('Should have an id', () => {
    expect(recipeClass.id).to.equal(recipeData[0].id);
  });

  it('Should have an image', () => {
    expect(recipeClass.image).to.equal(recipeData[0].image);
  });

  it('Should have an ingredients list', () => {
    expect(recipeClass.ingredients).to.equal(recipeData[0].ingredients);
  });

  it('Should have an instructions list', () => {
    expect(recipeClass.instructions).to.equal(recipeData[0].instructions);
  });

  it('Should have a name', () => {
    expect(recipeClass.name).to.equal(recipeData[0].name);
  });

  it('Should have tags', () => {
    expect(recipeClass.tags).to.equal(recipeData[0].tags);
  });

  it('Should get a list of ingredients by name', () => {
    expect(recipeClass.getIngredients()).to.deep.equal([
      'wheat flour',
      'bicarbonate of soda',
      'eggs',
      'sucrose',
      'instant vanilla pudding',
      'brown sugar',
      'salt',
      'fine sea salt',
      'semi sweet chips',
      'unsalted butter',
      'vanilla'
    ])
  })

  it('Should give a total cost for the ingredients', () => {
    expect(recipeClass.getIngredientsCost()).to.equal(177.76)
  })
})