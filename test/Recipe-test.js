import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
    it('Should be a function', () => {
      expect(Recipe).to.be.a('function');
    });

let recipe1;
let recipe2;
let recipe3;    

 beforeEach(() => {
recipe1 = new Recipe({id: 1, image:'recipe image 1', portions: [{ ingredientId: 1, name: 'Cookie',  amount: 2, estimatedCostInCents: 100, unit: 'C'}], instructions: ['Bake it'], tags: ['snack', 'dessert']});

recipe2 = new Recipe({id: 2, image:'recipe image 2', portions: [{ingredientId: 1, name: 'Sandwich', amount: 5, estimatedCostInCents: 200,  unit: 'loaf'}], instructions: ['Make Sandwich'],  tags: ['snack', 'lunch']});

recipe3 = new Recipe({id: 3, image:'recipe image 3', portions: [{ingredientId: 1, name: 'Pork Chop', amount: 1, estimatedCostInCents: 300, unit: 'serving'}], instructions: ['Grill it up'],  tags: ['pork', 'dinner']});

 });

    it.skip('should have an id number', () => {
    // expect the id to be a 'number'
    
  }); 

    it.skip('should contain a recipe image', () => {
    // expect the recipeData["image"] to be a 'string'

});

it.skip('should have list of ingredients needed', () => {
// Need to adjust the ingredients array and create a portions array

    // expect recipe.portions to be an 'array'
    // expect recipe.portions[0]to be an 'object'
    // expect recipe.portions[0]["ingredientId"] to be 'number'
    
    // expect recipe.portions[0]["ampunt"] to be a 'number'
    // expect recipe.portions[0]["unit"]to be a 'string'  
});

it.skip('should contain instructions to make a recipe', () => {
    // expect instructions[0] to equal ('SPECIFIC STRING HERE')

});

it.skip('should have a recipe name', () => {
    // expect the recipe1.name to be a 'string'
    // expect the recipe.name to equal('cookie')
  });

  it.skip('should have a list to tags', () => {
    // expect the recipe1.tags to be an 'array'
    // expect the reciep1.tags[0] to deep equal('snack')
  });

  it.skip('should be able to determine the names of ingredients needed', () => {
    // is a method test
    //showIngredientsNeeded();
  });

  it.skip('should be able to calculate the total cost of ingredients', () => {
    // is a method test
    //calcTotalIngredientCost()
  });

  it.skip('should be able to calculate the total cost of a recipe', () => {
    // is a method test
    // calcTotalRecipeCost()
  });

  it.skip('should be return the recipe instructions', () => {
    // is a method test
    //returnRecipeInstructions()
  });

});
