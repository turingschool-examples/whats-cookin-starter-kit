import { expect } from 'chai';
import { getIngredientName, matchIngredient } from '../src/get-ingredient-name'
import { sampleIngredientsData } from './sampleIngredients';
describe('matchIngredient', () => {
  it('should be a function', () => {
    expect(matchIngredient).to.be.a('function');
  });

  it('it should take two arguments: an ingredient id and a collection of ingredients data', () => {
    expect(matchIngredient('', {})).to.equal('Error: wrong input type');
    expect(matchIngredient(1, '')).to.equal('Error: wrong input type');
    expect(matchIngredient('', [])).to.equal('Error: wrong input type');
  });

  it('it should return an error message if no matching ingredient is found', () => {
    expect(matchIngredient(1, [])).to.equal('Error: no matching ingredient');
    expect(matchIngredient(13, sampleIngredientsData)).to.equal('Error: no matching ingredient');
    expect(matchIngredient(200, sampleIngredientsData)).to.equal('Error: no matching ingredient');
  });

  it('it should return an matching ingredient object', () => {
    expect(matchIngredient(1, sampleIngredientsData)).to.deep.equal(sampleIngredientsData[0]);
    expect(matchIngredient(2, sampleIngredientsData)).to.deep.equal(sampleIngredientsData[1]);
    expect(matchIngredient(3, sampleIngredientsData)).to.deep.equal(sampleIngredientsData[2]);
    expect(matchIngredient(4, sampleIngredientsData)).to.deep.equal(sampleIngredientsData[3]);
    expect(matchIngredient(5, sampleIngredientsData)).to.deep.equal(sampleIngredientsData[4]);
    expect(matchIngredient(6, sampleIngredientsData)).to.deep.equal(sampleIngredientsData[5]);
    expect(matchIngredient(7, sampleIngredientsData)).to.deep.equal(sampleIngredientsData[6]);
    expect(matchIngredient(8, sampleIngredientsData)).to.deep.equal(sampleIngredientsData[7]);
    expect(matchIngredient(9, sampleIngredientsData)).to.deep.equal(sampleIngredientsData[8]);
    expect(matchIngredient(10, sampleIngredientsData)).to.deep.equal(sampleIngredientsData[9]);
  });
});

describe('getIngredientName', () => {
  it('should be a function', () => {
    expect(getIngredientName).to.be.a('function');
  });

  it('it should take two arguments: an ingredient id and a collection of ingredients data', () => {
    expect(getIngredientName('', {})).to.equal('Error: wrong input type');
    expect(getIngredientName(1, '')).to.equal('Error: wrong input type');
    expect(getIngredientName('', [])).to.equal('Error: wrong input type');
  });

  it('it should return an error message if no matching ingredient is found', () => {
    expect(getIngredientName(1, [])).to.equal('Error: no matching ingredient');
    expect(getIngredientName(13, sampleIngredientsData)).to.equal('Error: no matching ingredient');
    expect(getIngredientName(200, sampleIngredientsData)).to.equal('Error: no matching ingredient');
  });

  it('it should return a string of the matching ingredient name', () => {
    expect(getIngredientName(1, sampleIngredientsData)).to.equal('Eggs');
    expect(getIngredientName(2, sampleIngredientsData)).to.equal('Flour');
    expect(getIngredientName(3, sampleIngredientsData)).to.equal('Milk');
    expect(getIngredientName(4, sampleIngredientsData)).to.equal('Butter');
    expect(getIngredientName(5, sampleIngredientsData)).to.equal('Yeast');
    expect(getIngredientName(6, sampleIngredientsData)).to.equal('Chocolate Chips');
    expect(getIngredientName(7, sampleIngredientsData)).to.equal('Sugar');
    expect(getIngredientName(8, sampleIngredientsData)).to.equal('Almond Flour');
    expect(getIngredientName(9, sampleIngredientsData)).to.equal('Powdered Sugar');
    expect(getIngredientName(10, sampleIngredientsData)).to.equal('Vanilla Extract');
  });
});

