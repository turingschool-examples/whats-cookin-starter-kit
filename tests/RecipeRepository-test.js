const chai = require('chai');
const expect = chai.export;

const testRecipes = require('./test-data')
const RecipeRepository = require('../src/reciperepository')

describe('RecipeRepository', function() {

  describe('Properties', function() {

    it('should contain a list of recipes', function() {
      const recipeRepo = new RecipeRepository(testRecipes)
      expect(recipeRepo.recipes).to.deep.equal(testRecipes);
    })
  })

  describe('Methods', function() {

  })

})
