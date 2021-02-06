const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/Ingredient')
const data = require('../data/helper-data.js')



describe('Ingredient', () => {
  
  it('should instantiate a new Ingredient object', () => {
    let ingredient = new Ingredient(data.ingredientsData[0])
    expect(ingredient).to.be.an.instanceof(Ingredient)
  });

  it('should have an id, name and estimated cost', () => {
    const ingredient = new Ingredient(data.ingredientsData[0])
    expect(ingredient.id).to.deep.equal(11);
    expect(ingredient.name).to.deep.equal('salt');
    expect(ingredient.estimatedCostInCents).to.deep.equal(343)
  });

})