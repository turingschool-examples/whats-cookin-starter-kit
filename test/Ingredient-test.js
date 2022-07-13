import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
const data = require('../src/data/ingredients.js');
const testIngData = data.testIngredients;

describe('Ingredient', () => {

  let ingredient;
  let ingredient2;
  let ingredient3;
  let ingredient4;

  beforeEach(() => {
    ingredient = new Ingredient(testIngData[0]);
    ingredient2 = new Ingredient(testIngData[1]);
    ingredient3 = new Ingredient(testIngData[2]);
    ingredient4 = new Ingredient(testIngData[3]);
  });

  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });

  it('should be a new instance of Ingredient', () => {
    expect(ingredient).to.be.an.instanceOf(Ingredient);
  });

  it('should have an id', () => {
    expect(ingredient.id).to.equal(20081);
    expect(ingredient2.id).to.equal(18372);
  });

  it('should have a name', () => {
    expect(ingredient.name).to.equal('wheat flour');
    expect(ingredient3.name).to.equal('eggs');
  });

  it('should have an estimated cost', () => {
    expect(ingredient.estimatedCostInCents).to.equal(142);
    expect(ingredient4.estimatedCostInCents).to.equal(902);
  });

});
