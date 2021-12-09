import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';
import Recipe from '../src/classes/Recipe';
import sampleRecipeData from '../src/data/sampleRecipeData.js';




describe('Ingredient', function() {
  let ingredient;
  beforeEach(() => {
  //ingredient = new Ingredient({id: 222, name: 'chicken'})
  ingredient = new Ingredient(sampleRecipeData[0].ingredients[0]);
})
  it('should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });
  it('should be an instance of ingredient', () => {
    expect(ingredient).to.be.an.instanceof(Ingredient)
  })
  it('should have an id', () => {
    expect(ingredient.id).to.equal(20081);
  })
  it('should have a name', () => {
    expect(ingredient.name).to.equal('wheat flour')
  })
})
