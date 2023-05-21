import { expect } from 'chai';
import { compileIngredientItems } from '../src/compile-ingredient-items';
import { sampleRecipeData as rData } from './sampleIngredients';
import { sampleIngredientsData as iData } from './sampleIngredients';

describe('compileIngredientItems', () => {
  beforeEach 

  it('should be a function', () => {
    expect(compileIngredientItems).to.be.a('function');
  });

  it('should take two arguments: a recipe object and a collection of ingredients data', () => {
    expect(compileIngredientItems([], 1)).to.equal('Error: wrong intput type');
    expect(compileIngredientItems(1, [])).to.equal('Error: wrong intput type');
    expect(compileIngredientItems({}, 1)).to.equal('Error: wrong intput type');
  });

  it('should return an array of strings', () => {
    expect(compileIngredientItems(rData[0], iData)).to.have.same.members([`${iData[0].name} × ${rData[0].quantity.amount} ${rData[0].quantity.unit}`,`${iData[6].name} × ${rData[0].quantity.amount} ${rData[0].quantity.unit}`, `${iData[7].name} × ${rData[0].quantity.amount} ${rData[0].quantity.unit}`, `${iData[8].name} × ${rData[0].quantity.amount} ${rData[0].quantity.unit}`, `${iData[9].name} × ${rData[0].quantity.amount} ${rData[0].quantity.unit}`]);
    expect(compileIngredientItems(rData[1], iData)).to.have.same.members([`${iData[1].name} × ${rData[1].quantity.amount} ${rData[1].quantity.unit}`,`${iData[2].name} × ${rData[1].quantity.amount} ${rData[1].quantity.unit}`, `${iData[3].name} × ${rData[1].quantity.amount} ${rData[1].quantity.unit}`]);
    expect(compileIngredientItems(rData[2], iData)).to.have.same.members([`${iData[0].name} × ${rData[2].quantity.amount} ${rData[2].quantity.unit}`,`${iData[1].name} × ${rData[2].quantity.amount} ${rData[2].quantity.unit}`, `${iData[2].name} × ${rData[2].quantity.amount} ${rData[2].quantity.unit}`, `${iData[3].name} × ${rData[1].quantity.amount} ${rData[1].quantity.unit}`, `${iData[4].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[5].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[6].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[7].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[8].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[9].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`]);
    expect(compileIngredientItems(rData[3], iData)).to.have.same.members([`${iData[0].name} × ${rData[3].quantity.amount} ${rData[3].quantity.unit}`,`${iData[1].name} × ${rData[3].quantity.amount} ${rData[3].quantity.unit}`, `${iData[2].name} × ${rData[3].quantity.amount} ${rData[3].quantity.unit}`, `${iData[3].name} × ${rData[2].quantity.amount} ${rData[2].quantity.unit}`, `${iData[4].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[5].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[6].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`]);
    expect(compileIngredientItems(rData[4], iData)).to.have.same.members([`${iData[2].name} × ${rData[4].quantity.amount} ${rData[4].quantity.unit}`,`${iData[3].name} × ${rData[4].quantity.amount} ${rData[4].quantity.unit}`, `${iData[4].name} × ${rData[4].quantity.amount} ${rData[4].quantity.unit}`, `${iData[5].name} × ${rData[3].quantity.amount} ${rData[3].quantity.unit}`, `${iData[6].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[7].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[8].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[9].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`]);
    expect(compileIngredientItems(rData[5], iData)).to.have.same.members([`${iData[6].name} × ${rData[5].quantity.amount} ${rData[5].quantity.unit}`,`${iData[5].name} × ${rData[5].quantity.amount} ${rData[5].quantity.unit}`, `${iData[4].name} × ${rData[5].quantity.amount} ${rData[5].quantity.unit}`, `${iData[3].name} × ${rData[4].quantity.amount} ${rData[4].quantity.unit}`, `${iData[2].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[1].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[0].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`]);
    expect(compileIngredientItems(rData[6], iData)).to.have.same.members([`${iData[2].name} × ${rData[6].quantity.amount} ${rData[6].quantity.unit}`,`${iData[1].name} × ${rData[6].quantity.amount} ${rData[6].quantity.unit}`, `${iData[0].name} × ${rData[6].quantity.amount} ${rData[6].quantity.unit}`, `${iData[4].name} × ${rData[5].quantity.amount} ${rData[5].quantity.unit}`, `${iData[5].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[3].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[7].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[6].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[8].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`, `${iData[9].name} × ${rData[].quantity.amount} ${rData[].quantity.unit}`]);
  });

  it('should return a list of ingredient items, which includes ingredient name, multiplication symbol, amount, and unit', () => {

  });
})