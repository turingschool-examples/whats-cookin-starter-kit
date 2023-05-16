import { expect } from 'chai';
import { compileIngredientQuantity, sumTotalIngredientQuantity  } from '../src/calculate-recipe-price'
import { sampleIngredientsData, sampleRecipeData } from './sampleIngredients';


describe('compileIngredientQuantity', () => {
  it('should be a fuction', () => {
    expect(compileIngredientQuantity).to.be.a('function');
  });

  it('should compile the id and quantity of each ingredient', () => {
    expect(compileIngredientQuantity(sampleRecipeData[0], sampleIngredientsData)).to.deep.equal([
      { id: 1, quantity: 6 },
      { id: 7, quantity: 2 },
      { id: 8, quantity: 2 },
      { id: 9, quantity: 2 },
      { id: 10, quantity: 0.5 }
    ]);
    expect(compileIngredientQuantity(sampleRecipeData[1], sampleIngredientsData)).to.deep.equal([
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

    it('should sum the total ingredient quantity for a recipe', () => {
      const total = sumTotalIngredientQuantity(sampleRecipeData, sampleIngredientsData)
      expect(total).to.equal(12.5)
    });
  });
  
