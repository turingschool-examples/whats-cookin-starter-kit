import { expect } from 'chai';
import { compileIngredientItems } from '../src/compile-ingredient-items';
import { sampleRecipeData as rData } from './sampleIngredients';
import { sampleIngredientsData as iData } from './sampleIngredients';

describe('compileIngredientItems', () => {
  beforeEach(() => {
    let results = rData.ingredients.map((ele, index) => {
      let amounts = ele.map((ele) => {
        return ele.quantity.amount;
      });

      let units = ele.map((ele) => {
        return ele.quantity.unit;
      });

      let names = ele.map((ele) => {
        return iData[ele.id - 1];
      }); 

      return `${names[index]} × ${amounts[index]} ${units[index]}`;
    });
    console.log(results)
  });
  
  it.skip('should be a function', () => {
    expect(compileIngredientItems).to.be.a('function');
  });

  it('should take two arguments: a recipe object and a collection of ingredients data', () => {
    expect(compileIngredientItems([], 1)).to.equal('Error: wrong intput type');
    expect(compileIngredientItems(1, [])).to.equal('Error: wrong intput type');
    expect(compileIngredientItems({}, 1)).to.equal('Error: wrong intput type');
  });

  it('should return an array of strings', () => {
    expect(compileIngredientItems(rData[0], iData)).to.deep.equal(results[0]);
    expect(compileIngredientItems(rData[1], iData)).to.deep.equal(results[1]);
    expect(compileIngredientItems(rData[2], iData)).to.deep.equal(results[2]);
    expect(compileIngredientItems(rData[3], iData)).to.deep.equal(results[3]);
    expect(compileIngredientItems(rData[4], iData)).to.deep.equal(results[4]);
    expect(compileIngredientItems(rData[5], iData)).to.deep.equal(results[5]);
    expect(compileIngredientItems(rData[6], iData)).to.deep.equal(results[6]);
  });

  it('should return a list of ingredient items, which includes ingredient name, multiplication symbol, amount, and unit', () => {

  });
})