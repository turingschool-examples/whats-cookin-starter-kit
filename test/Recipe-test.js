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
    ingredient = new Ingredient(ingredientsData[0])
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
    expect(recipeSample2.ingredients).to.deep.equal(sampleRecipeData[1].ingredients)
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

    //Ingredients are linked through ids in different data sets (Recipe and Ingredient)
    //Method to check the match
    //Method to access name
    // console.log(ingredient)
    // console.log(recipeSample1.ingredients[0])
    //ingredient.id === recipe.ingredients[0].id
        //=>ingredient.name
    //expect(recipe.indreerwe).to.equal.(ingredients.name)

    // expect(recipeSample1.ingredients[0]).to.equal('salt')
    //
    //if id = id, print name;
    recipeSample2.accessIngredientName()
    expect(recipeSample2.ingredients[1].id).to.equal(ingredient.name)
    // expect(recipeSample2.ingredients.id).to.equal(ingredient.name)
    //Write different test

  })
  it('should get different names of each ingredient', () => {
    expect(recipeSample2.ingredients.name).to.equal(sampleRecipeData[1].ingredients.name)
  })
//   it.skip('should calculate the total cost of its ingredients', () => {
//   })
//   it.skip('should provide directions', () {
//   })
})
