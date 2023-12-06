import { expect } from 'chai';
import { filterRecipesByTag, filterRecipesByName, getIngredientNames, calculateRecipeCost, getIngredientProperty } from '../src/recipes';
import { sampleRecipes } from '../src/data/sample-recipes';
import { sampleIngredients } from '../src/data/sample-ingredients';

// describe('Recipe', () => {
//   it('Should be a function', () => {
//     expect(findRecipeIngredients).to.be.a('function');
//   });
// })

describe('filterRecipesByTag', () => {
  it('should filter recipes by tag', () => {
    const filteredRecipes = filterRecipesByTag(sampleRecipes, ['side dish']);
    const filteredRecipesIds = filteredRecipes.map(sampleRecipe => sampleRecipe.id);
    expect(filteredRecipesIds).to.deep.equal([601216, 226562, 605132, 618332]);
  });

  it('should filter recipes by multiple tags', () => {
    const filteredRecipes = filterRecipesByTag(sampleRecipes, ['main course', 'dinner']);
    const filteredRecipesIds = filteredRecipes.map(sampleRecipe => sampleRecipe.id);
    expect(filteredRecipesIds).to.deep.equal([991136]);
  });

  it('should return an empty array if no recipes match the tag', () => {
    const filteredRecipes = filterRecipesByTag(sampleRecipes, ['tag does not exist']);
    expect(filteredRecipes).to.deep.equal([]);
  });

  it('should return an empty array if no recipes or tags are provided', () => {
    const filteredRecipes = filterRecipesByTag([], []);
    expect(filteredRecipes).to.deep.equal([]);
  });
});


describe('filterRecipesByName', () => {
  it('should filter recipes by name', () => {
    const filteredRecipes = filterRecipesByName(sampleRecipes, 'Cookies');
    const filteredRecipesIds = filteredRecipes.map(sampleRecipe => sampleRecipe.id);
    expect(filteredRecipesIds).to.deep.equal([583738, 618332]);
  });

  it('should still filter correctly even if name is not correct case', () => {
    const filteredRecipes = filterRecipesByName(sampleRecipes, 'cookies');
    const filteredRecipesIds = filteredRecipes.map(sampleRecipe => sampleRecipe.id);
    expect(filteredRecipesIds).to.deep.equal([583738, 618332]);
  });

  it('should return an empty array if no recipes match the name', () => {
    const filteredRecipes = filterRecipesByName(sampleRecipes, 'non-existent name');
    expect(filteredRecipes).to.deep.equal([]);
  });

  it('should return an empty array if no recipes or name is provided', () => {
    const filteredRecipes = filterRecipesByName([], '');
    expect(filteredRecipes).to.deep.equal([]);
  });
});

describe('getIngredientNames', () => {
  it('should determine the names of ingredients for a recipe', () => {
    const sampleRecipe = sampleRecipes[0];
    const ingredientNames = getIngredientNames(sampleRecipe, sampleIngredients);
    expect(ingredientNames).to.deep.equal(['butter', 'hawaiian sweet rolls', 'runny honey', 'tabasco sauce', 'black pepper', 'boneless skinless chicken breasts'])
  });

  it('should give an error message if invalid recipe or ingredients data is passed', () => {
    const sampleRecipe = sampleRecipes[10];
    const ingredientNames = getIngredientNames(sampleRecipe, sampleIngredients);
    expect(ingredientNames).to.equal('Error')
  });
  
  it('should return another message if an ingredient is not found in ingredients data', () => {
    const sampleRecipe = { ingredients: [{ id: 'unknown' }] };
    const ingredientNames = getIngredientNames(sampleRecipe, sampleIngredients);
    expect(ingredientNames).to.deep.equal(['Ingredient not found']);
  });
});

describe('calculateRecipeCost', () => {
  it('should calculate the cost of a recipe correctly', () => {
    const recipe = sampleRecipes.find(recipe => recipe.name === 'Buffalo Chicken Sliders');
    const cost = calculateRecipeCost(recipe, sampleIngredients);
    expect(cost).to.equal('94.85');
  });

  it('should return 0 if recipe or ingredients data is not provided', () => {
    const recipe = null;
    const cost = calculateRecipeCost(recipe, sampleIngredients);
    expect(cost).to.equal('0.00');

    const ingredientsData = null;
    const sampleRecipe = sampleRecipes[0];
    const cost2 = calculateRecipeCost(sampleRecipe, ingredientsData);
    expect(cost2).to.equal('0.00');
  });

  it('should return 0 if recipe has no ingredients', () => {
    const recipe = { ingredients: [] };
    const cost = calculateRecipeCost(recipe, sampleIngredients);
    expect(cost).to.equal('0.00');
  });
});
