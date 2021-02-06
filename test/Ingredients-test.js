const chai = require('chai');
const expect = chai.expect;

const Ingredient = require('../src/Ingredient.js')
const data = require('../data/helper-data.js')



describe('Ingredient', () => {
  
  it('should instantiate a new Ingredient object', () => {
    let ingredient = new Ingredient()
    expect(ingredient).to.be.an.instanceof(Ingredient)
  })

})