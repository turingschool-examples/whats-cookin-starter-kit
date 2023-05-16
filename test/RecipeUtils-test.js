import { expect } from 'chai';
import { recipesFromTag, recipesfromName, findRecipe } from '../src/recipeUtils';
import recipeData from '../src/data/recipes-sample.js';
import ingredientsData from '../src/data/ingredients-sample.js';


describe('RecipeUtils', () => {
  it('Should be a function', () => {
    expect(recipesFromTag).to.be.a('function');
  });
  it ('Should filter recipes based on tag', () => {
    const expected = 'Loaded Chocolate Chip Pudding Cookie Cups'
    const filtered = recipesFromTag(recipeData, 'starter')
    expect(filtered.length).to.equal(1)
    expect(filtered[0].name).to.equal(expected)
  });
  it ('Should filter recipes if tag applies to multiple recipes', () => {
    const expected = ['Thai Chicken Tenders with Broiled Pineapple Slaw', 'Maple Dijon Apple Cider Grilled Pork Chops']
    const filtered = recipesFromTag(recipeData, 'lunch')
    expect(filtered.length).to.equal(2)
    const names = filtered.map(f => f.name)
    expect(names).to.have.members(expected)
  });
  it ('Should filter recipes based on name', () => {
    const filtered = recipesfromName(recipeData, 'Thai Chicken Tenders with Broiled Pineapple Slaw')
    expect(filtered.length).to.equal(1)
  })
  it ('Should filter recipes based on a similar name', () => {
    const expected = 'Thai Chicken Tenders with Broiled Pineapple Slaw'
    const filtered = recipesfromName(recipeData, 'Thai Chicken')
    expect(filtered.length).to.equal(1)
    expect(filtered[0].name).to.equal(expected)
  })
  it ('Should return nothing if no recipes match the user input name', () => {
    const filtered = recipesfromName(recipeData, 'Spicy Potatoes')
    expect(filtered.length).to.equal(0)
  })
})

describe('findRecipe', () => {
  it('Should be a function', () => {
    expect(findRecipe).to.be.a('function');
  });

  it('returns the correct recipe based on the recipe name', () => {
    const recipeName = 'Loaded Chocolate Chip Pudding Cookie Cups';
    const recipe = findRecipe(recipeData, recipeName);
    expect(recipe).to.deep.equal(recipeData[0]);
  });

});


