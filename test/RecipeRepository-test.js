import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import mockdata from '../src/data/mockdata';

describe('Recipe Repository', () => {
  
  let mealPlan;

  beforeEach(() => {
    mealPlan = new RecipeRepository(mockdata.recipes, mockdata.ingredients);
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be able to take in data', () => {
    expect(mealPlan.recipes[0].id).to.deep.equal(mockdata.recipes[0].id);    
  });
  
  it('Should be able to create an empty array if no data is passed in', () => {
    const porkChops = new RecipeRepository();
    expect(porkChops).to.be.an.instanceOf(RecipeRepository);
    expect(porkChops.recipes).to.deep.equal([]);
  });

  it('Should filter recipes into a list based on a tag', () => {
    expect(mealPlan.recipes[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(mealPlan.recipes.length).to.equal(2);

    mealPlan.filterRecipesByTag('lunch');
    expect(mealPlan.recipesByTag[0].id).to.equal(mockdata.recipes[1].id);

    mealPlan.filterRecipesByTag('snack');
    expect(mealPlan.recipesByTag[0].name).to.equal(mockdata.recipes[0].name);
  });

  it('Should filter recipes into a list based on name', () => {
    expect(mealPlan.recipes[0].id).to.equal(595736);

    mealPlan.filterRecipesByName('Loaded Chocolate Chip Pudding Cookie Cups'.toUpperCase());
    expect(mealPlan.recipesByName[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    
    mealPlan.filterRecipesByName('Maple Dijon Apple Cider Grilled Pork Chops'.toUpperCase());
    expect(mealPlan.recipesByName[0].name).to.equal("Maple Dijon Apple Cider Grilled Pork Chops");

    mealPlan.filterRecipesByTag('Chocolate Maple'.toUpperCase());
    expect(mealPlan.recipesByName[0].name).to.equal(mockdata.recipes[1].name);
    });
    
    it('Should not filter recipes by name if incorrect or missing data is passed in', () => {
     mealPlan.filterRecipesByName();
     expect(mealPlan.recipesByName).to.deep.equal([]);
 
     mealPlan.filterRecipesByName(23);
     expect(mealPlan.recipesByName).to.deep.equal([]);

     mealPlan.filterRecipesByName('jkdfafadvdj vjfv');
     expect(mealPlan.recipesByName).to.deep.equal([]);

     mealPlan.filterRecipesByName(23, 'snack');
     expect(mealPlan.recipesByName).to.deep.equal([]);
    });
});
