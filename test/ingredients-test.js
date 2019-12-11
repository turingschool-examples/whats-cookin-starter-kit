const chai = require('chai');
const expect = chai.expect;

const Ingredients = require('../src/ingredients.js')

beforeEach(() => {
  ingredients = new Ingredients(43253, 'spam', 249)
})
describe('Ingredients', () => {

  it('should be a function', () => {
    expect(Ingredients).to.be.a('function');
  })

  it('should be an instance of Ingredients', () => {
    expect(ingredients).to.be.an.instanceof(Ingredients);
  })

  it('should have a name', () => {
    expect(ingredients.name).to.equal('spam')
    expect(ingredients.name).to.not.equal('baloney')
  })
})