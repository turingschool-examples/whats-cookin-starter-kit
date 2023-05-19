import { expect } from 'chai';
import { saveRecipe, deleteRecipe, recipesToCook } from '../src/userUtils.js';


describe('saveRecipe', () => {
  it('should be a function', () => {
    expect(saveRecipe).to.be.a('function');
  });

  it('should be able to add a recipe to the data model array', () => {
    const savedRecipes = saveRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");

    expect(savedRecipes.length).to.equal(1);
    expect(savedRecipes[0]).to.equal(recipesToCook[0]);
  });

  it('should not have duplicate recipes in the array', () => {
    const savedRecipes = saveRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");
    const savedRecipeDuplicate = saveRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");

    expect(savedRecipes.length).to.equal(1);
    expect(savedRecipes[0]).to.equal(recipesToCook[0]);
  });
});

describe('deleteRecipe', () => {
  it('should be a function', () => {
    expect(deleteRecipe).to.be.a('function');
  });

  it('should be able to remove a recipe from the data model array', () => {
    const recipes = saveRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");
    const newRecipes = deleteRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");

    expect(newRecipes.length).to.equal(0);
    expect(newRecipes).to.deep.equal(recipesToCook);
  });
});