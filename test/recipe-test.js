const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipes.js')

beforeEach(() => {
  recipe = new Recipe('Bowl of corn flakes', 328130, "https://spoonacular.com/recipeImages/678353-556x370.jpg", ['corn flakes', 'milk'], 'pour cereal then milk', 'breakfast')
})

describe('Recipe', () => {

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  })

  it('should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  })

  it('should be a bowl of corn flakes', () => {
    expect(recipe.name).to.equal('Bowl of corn flakes')
    expect(recipe.name).to.not.equal('Not Bowl of corn flakes')
  })
})