import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('RecipeRepository', () => {
    it('Should be a function', () => {
      expect(Recipe).to.be.a('function');
    });
  });

    it.skip('should have an id number', () => {
    // expect the id to be a 'number'
    // expect the id to not be a 'string'
    // expect the id to not be an 'object'
  }); 

    it.skip('should contain a recipe image', () => {
    // expect the image to be a 'string'
    // expect image to not be an 'object'
    // expect image to not be an 'array'

});

it.skip('should have list of ingredients needed', () => {
    // expect ingredients to be an 'array'

    // expect ingredients["id"] to be 'number'
    // expect ingredients["quantity"]to be an 'object'
    // expect ingredients["quantity"].amount to be a 'number'
    // expect ingredients['quantity"].unit to be a 'string'  
});

it.skip('should contain instructions to make a recipe', () => {
    // expect instructions to be an 'array'

    //expect instructions to deep equal([]) **NOT SURE IF NEEDED

    // expect instructions[0] to equal ('SPECIFIC STRING HERE')
    // expect instruction["instruction"] to be a 'string'
    // expect instruction["number"] to be a 'number'
    //expect instruction["number"] to equal(specific) 
});

it.skip('should have a recipe name', () => {
    // expect the instructions.name to be a 'string'
    // expect the instructions.name to equal('SPECIFIC STRING')
  });

  it.skip('should have a list to tags', () => {
    // expect the instructions.tags to be an 'array'
    // expect the instructions.tags to deep equal('SPECIFIC STRING')
  });

