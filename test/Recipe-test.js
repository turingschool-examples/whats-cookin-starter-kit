import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient';
import sampleRecipeData from '../src/data/sampleRecipeData.js';
import ingredientsData from '../src/data/ingredients.js';

describe.only('Recipe', () => {
  let recipeSample1, recipeSample2, ingredient;
  beforeEach(() => {
    recipeSample1 = new Recipe(sampleRecipeData[0]);
    recipeSample2 = new Recipe(sampleRecipeData[1]);
    ingredient = new Ingredient(ingredientsData[0]);
  });
  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });
  it('should be an instance of recipe', () => {
    expect(recipeSample1).to.be.an.instanceof(Recipe)
  })
  it('should have an id', () => {
    expect(recipeSample1.id).to.equal(sampleRecipeData[0].id)
    expect(recipeSample2.id).to.equal(sampleRecipeData[1].id)

  })
  it('should have an image', () => {
    expect(recipeSample1.image).to.equal(sampleRecipeData[0].image)
    expect(recipeSample2.image).to.equal(sampleRecipeData[1].image)
  })
  it('should have an ingredients list', () => {
    expect(recipeSample1.ingredients.length).to.deep.equal(11)
    expect(recipeSample2.ingredients).to.be.an("array")
    expect(recipeSample2.ingredients[0]).to.be.an.instanceof(Ingredient)
  })
  it('should have instructions', () => {
    expect(recipeSample1.instructions.length).to.deep.equal(6)
    expect(recipeSample2.instructions).to.deep.equal(sampleRecipeData[1].instructions)
  })
  it('should be able to have a recipe title', () => {
    expect(recipeSample1.name).to.equal(sampleRecipeData[0].name)
    expect(recipeSample2.name).to.equal(sampleRecipeData[1].name)
  })
  it('should be able to have multiple tags', () => {
    expect(recipeSample1.tags).to.equal(sampleRecipeData[0].tags);
    expect(recipeSample2.tags).to.equal(sampleRecipeData[1].tags);
  })
  it('should get the names of each ingredient', () => {
    expect(recipeSample1.ingredients[0].name).to.equal("wheat flour")
  })
  it('should get different names of each ingredient', () => {
    expect(recipeSample2.ingredients.name).to.equal(sampleRecipeData[1].ingredients.name)
  })
//   it.skip('should calculate the total cost of its ingredients', () => {
//   })
//   it.skip('should provide directions', () {
//   })
})
