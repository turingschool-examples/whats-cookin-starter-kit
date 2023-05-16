import { expect } from 'chai';
import { compileIngredientQuantity, sumTotalIngredientQuantity, costInCents, totalCostInCents, calculateRecipePrice } from '../src/calculate-recipe-price'
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';


describe('compileIngredientQuantity', () => {
  it('should be a fuction', () => {
    expect(compileIngredientQuantity).to.be.a('function');
  });

  it('should compile the id and quantity of each ingredient', () => {
    expect(compileIngredientQuantity(sampleRecipeData[0])).to.deep.equal([
      { id: 1, quantity: 6 },
      { id: 7, quantity: 2 },
      { id: 8, quantity: 2 },
      { id: 9, quantity: 2 },
      { id: 10, quantity: 0.5 }
    ]);
    expect(compileIngredientQuantity(sampleRecipeData[1])).to.deep.equal([
      { id: 2, quantity: 4 },
      { id: 3, quantity: 1 },
      { id: 4, quantity: 4 }
    ]);
  });
});

describe('sumTotalIngredientQuantity', () => {
  it('should be a function', () => {
    expect(sumTotalIngredientQuantity).to.be.a('function')
  });

  it('should sum the total ingredient quantity for a given recipe', () => {
    expect(sumTotalIngredientQuantity(sampleRecipeData[0])).to.equal(12.5)
  });
});
  
describe('costInCents', () => {
  it('should be a function', () => {
    expect(costInCents).to.be.a('function')
  });

  it('should create a new array of the total cost in cents of all the ingredients', () => {
    expect(costInCents(sampleRecipeData[0], sampleIngredientsData)).to.deep.equal([ 472, 548, 1899, 543, 760 ])
    expect(costInCents(sampleRecipeData[1], sampleIngredientsData)).to.deep.equal([ 200, 350, 325])
  });
});

describe('totalCostInCents', () => {
  it('should be a function', () => {
    expect(totalCostInCents).to.be.a('function')
  });

  it('sum the total price in cents', () => {
    expect(totalCostInCents(sampleRecipeData[0], sampleIngredientsData)).to.deep.equal(4222)
    expect(totalCostInCents(sampleRecipeData[1], sampleIngredientsData)).to.deep.equal(875)
  });
});

describe('calculateRecipePrice', () => {
  it('should be a function', () => {
    expect(calculateRecipePrice).to.be.a('function');
  });

  it('sum the total price of recipe in dollars', () => {
    expect(calculateRecipePrice(sampleRecipeData, sampleIngredientsData)).to.equal('$527.75');
  });
});