import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {
  let recipe;
  beforeEach(() => {
    recipe = new RecipeRepository (1210, 'https://spoonacular.com/recipeImages/595736-556x370.jpg', [{id: 21923, quantity: {amount: 12, unit: 'baseballs'}}, {id: 22, quantity: {amount: 2, unit: 'kilos'}}, {id: 24, quantity: {amount: 3, unit: 'tubs'}}], [{instruction: 'Mold play dough', number: 1}, {instruction: 'chill bowl', number: 2}, {instruction:'pour cold soup', number: 3}], 'Strawbery & Tomato Soup', ['side dish', 'main course', 'snack'])
  })
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('should be an instance of recipe', () => {
    expect(recipe).to.be.an.instanceof(RecipeRepository)
  })
  it('should have an id', () => {
    expect(recipe.id).to.deep.equal(1210)
  })
  it('should have images', () => {
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg')
  })
  it('should have an ingredient list', () => {
    expect(recipe.ingredients).to.deep.equal([])
  })
  it('each ingredient in the list should have a unique id', () => {
    expect(recipe.ingredients.ingredient.id).to.equal(21923)
  })
  it('the ingredient list should have individual quantities', () => {
    expect(recipe.ingredients.quantity).to.equal({})
  })
  it('the quantity of the ingredients should have an amount', () => {
    expect(recipe.ingredients.quanitity.amount).to.equal(12)
  })
  it('the quantity of the ingredients should have an unit', () => {
    expect(recipe.ingredients.quanitity.unit).to.equal('baseballs')
  })
  it('should have instructions', () => {
    expect(recipe.instructions).to.deep.equal([])
  })
  it('should be able to have descriptions of how to make the recipe', () => {
    expect(recipe.instructions.instruction).to.equal('Mold play dough')
  })
  it('the instruction descriptions should be able to have an order', () => {
    expect(recipe.instructions.number).to.equal(1)
  })
  it('all instructions should be have to have multiple steps', () => {
    expect(recipe.instructions.length).to.equal(3)
  })
  it('should be able to have a recipe title', () => {
    expect(recipe.name).to.equal('Strawberry and Tomato Soup')
  })
  it('should have tags', () => {
    expect(recipe.tags).to.deep.equal([])
  })
  it('should be able to have multiple tags', () => {
    expect(recipe.tags).to.equal(['side dish', 'main course', 'snack'])
  })

})
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
