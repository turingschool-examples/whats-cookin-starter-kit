import { expect } from 'chai';
import { recipeData } from '../src/data/sampleRecipeData.js';
import RecipeRepository from '../src/classes/RecipeRepository';

//Should we have multiple describe block for each test file to break up what is being tested? (i.e. class constructor vs class methods)

describe('Recipe Repository', () => {
  let repository;

  beforeEach( () => {
   
    repository = new RecipeRepository(recipeData);
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of the Recipe Respository', () => {
    expect(repository).to.be.an.instanceOf(RecipeRepository);
  });

  it('should have recipes', () => {
    expect(repository.recipes[2].id).to.equal(550940);
    expect(repository.recipes[2].name).to.equal('Egg and Rapini Casserole');
  });

  it('should have tags for each recipe', () => {
    expect(repository.recipes[1].tags).to.deep.equal(['side dish'])
  });

  it('should have ingredient information for a recipe', () => {
    const recipeIngredients1 = [
      { id: 20081, quantity: { amount: 1.5, unit: 'c' } },
      { id: 18372, quantity: { amount: 0.5, unit: 'tsp' } },
      { id: 1123, quantity: { amount: 1, unit: 'large' } },
      { id: 19335, quantity: { amount: 0.5, unit: 'c' } },
      { id: 19206, quantity: { amount: 3, unit: 'Tbsp' } },
      { id: 19334, quantity: { amount: 0.5, unit: 'c' } },
      { id: 2047, quantity: { amount: 0.5, unit: 'tsp' } },
      { id: 1012047, quantity: { amount: 24, unit: 'servings' } },
      { id: 10019903, quantity: { amount: 2, unit: 'c' } },
      { id: 1145, quantity: { amount: 0.5, unit: 'c' } },
      { id: 2050, quantity: { amount: 0.5, unit: 'tsp' } }
    ]
    
    expect(repository.recipes[0].ingredients).to.deep.equal(recipeIngredients1);
  });

  it('should have ingredient information for a different recipe', () => {
    const recipeIngredients2 = [
      { id: 20081, quantity: { amount: 1, unit: 'cup' } },
      { id: 18371, quantity: { amount: 2, unit: 'teaspoons' } },
      { id: 9040, quantity: { amount: 12, unit: 'servings' } },
      { id: 20011, quantity: { amount: 1, unit: 'cup' } },
      { id: 1001, quantity: { amount: 2, unit: 'tablespoons' } },
      { id: 1001, quantity: { amount: 6, unit: 'tablespoons' } },
      { id: 1230, quantity: { amount: 2, unit: 'cups' } },
      { id: 1123, quantity: { amount: 2, unit: '' } },
      { id: 19296, quantity: { amount: 12, unit: 'servings' } },
      { id: 16098, quantity: { amount: 12, unit: 'servings' } },
      { id: 2047, quantity: { amount: 1, unit: 'teaspoon' } },
      { id: 19335, quantity: { amount: 2, unit: 'teaspoons' } }
    ]

    expect(repository.recipes[1].ingredients).to.deep.equal(recipeIngredients2)
  })

  it('should filter recipes by tags', () => {
    const expected =  repository.filterByTag('side dish')
    // console.log(expected.name);

    expect(expected[0]).to.deep.equal(repository.recipes[1]);
  })

  it('should not return a recipe if tag is not found', () => {
    const expected = repository.filterByTag('dessert')

    expect(expected).to.deep.equal([]);
    expect(expected.name).to.equal(undefined);
  });

  it('should filter recipes by name', () => {
    const expected = repository.filterByRecipeName('Loaded Chocolate Chip Pudding Cookie Cups');

    expect(expected[0]).to.deep.equal(repository.recipes[0])
  });

  it('should not return a recipe if name is not found', () => {
    const expected = repository.filterByRecipeName('Creme L\'ainglaise')

    expect(expected).to.deep.equal([]);
    expect(expected.name).to.equal(undefined);
  })
});
