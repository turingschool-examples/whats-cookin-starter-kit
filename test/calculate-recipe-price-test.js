import { expect } from 'chai';
import { sampleRecipeData as rData} from './sampleIngredients';
import { sampleIngredientsData as iData } from './sampleIngredients';
import { getIngredientCost, calculateRecipePrice } from '../src/calculate-recipe-price';

describe('getIngredientCost', () => {
  it('should be a function', () => {
    expect(getIngredientCost).to.be.a('function');
  });

  it('it should take two arguments: an ingredient id and a collection of ingredients data', () => {
    expect(getIngredientCost('', {})).to.equal('Error: wrong input type');
    expect(getIngredientCost(1, '')).to.equal('Error: wrong input type');
    expect(getIngredientCost('', [])).to.equal('Error: wrong input type');
  });

  it('it should return an error message if no matching ingredient is found', () => {
    expect(getIngredientCost(1, [])).to.equal('Error: no matching ingredient');
    expect(getIngredientCost(13, iData)).to.equal('Error: no matching ingredient');
    expect(getIngredientCost(200, iData)).to.equal('Error: no matching ingredient');
  });

  it('it should return a number of the matching ingredient cost', () => {
    expect(getIngredientCost(1, iData)).to.equal(472);
    expect(getIngredientCost(2, iData)).to.equal(200);
    expect(getIngredientCost(3, iData)).to.equal(350);
    expect(getIngredientCost(4, iData)).to.equal(325);
    expect(getIngredientCost(5, iData)).to.equal(345);
    expect(getIngredientCost(6, iData)).to.equal(689);
    expect(getIngredientCost(7, iData)).to.equal(548);
    expect(getIngredientCost(8, iData)).to.equal(1899);
    expect(getIngredientCost(9, iData)).to.equal(543);
    expect(getIngredientCost(10, iData)).to.equal(760);
  });
});

describe('calculateRecipePrice', () => {
  it('should be a function', () => {
    expect(calculateRecipePrice).to.be.a('function');
  });

  it('should take two arguments: a recipe object and a collection of ingredients data', () => {
    expect(calculateRecipePrice([], 1)).to.equal('Error: wrong input type');
    expect(calculateRecipePrice(1, [])).to.equal('Error: wrong input type');
    expect(calculateRecipePrice({}, 1)).to.equal('Error: wrong input type');
  });

  it('should return a two decimal digit of the recipe ingredients\' total cost in dollars', () => {
    expect(calculateRecipePrice(rData[0], iData)).to.deep.equal('$91.92');
    expect(calculateRecipePrice(rData[1], iData)).to.deep.equal('$24.50');
    expect(calculateRecipePrice(rData[2], iData)).to.deep.equal('$52.65');
    expect(calculateRecipePrice(rData[3], iData)).to.deep.equal('$47.20');
    expect(calculateRecipePrice(rData[4], iData)).to.deep.equal('$60.83');
    expect(calculateRecipePrice(rData[5], iData)).to.deep.equal('$266.33');
    expect(calculateRecipePrice(rData[6], iData)).to.deep.equal('$123.67');
  });
});