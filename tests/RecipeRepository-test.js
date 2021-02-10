const chai = require('chai');
const expect = chai.export;

const testRecipes = require('./test-recipes')
const RecipeRepository = require('../src/reciperepository')

describe('RecipeRepository', function() {

  describe('Properties', function() {

    it('should contain a list of recipes', function() {
      const recipeRepo = new RecipeRepository(testRecipes)
      expect(recipeRepo.recipes).to.deep.equal(testRecipes);
    })
  })

  describe('Methods', function() {

    it('should return a list of recipes filtered by tag', function() {
      const recipeRepo = new RecipeRepository(testRecipes)
      expect(recipeRepo.filterRecipesViaTags('testSingle')).to.deep.equal(
        ["Loaded Chocolate Chip Pudding Cookie Cups","Dirty Steve's Original Wing Sauce","Elvis Pancakes"])
    })

    it('should be able to filter via multiple tags', function() {
      const recipeRepo = new RecipeRepository(testRecipes)
      expect(recipeRepo.filterRecipesViaTags('testMultiple1', 'testMultiple2')).to.deep.equal(
        ["Loaded Chocolate Chip Pudding Cookie Cups", "Maple Dijon Apple Cider Grilled Pork Chops"]
    })

    it('should be able to filter via the recipe name', function(){
      const recipeRepo = new RecipeRepository(testRecipes)
      expect(recipeRepo.filterRecipesViaName('Name').to.deep.equal(["Name Search Test"]))
      expect(recipeRepo.filterRecipesViaName('Pork').to.deep.equal(["Maple Dijon Apple Cider Grilled Pork Chops"]))
    })

    it('should be able to filter via the ingredient name', function(){
      const recipeRepo = new RecipeRepository(testRecipes)
      expect(recipeRepo.filterRecipesViaName('wheat flour').to.deep.equal(["Loaded Chocolate Chip Pudding Cookie Cups", "Elvis Pancakes", "3 Tag Search Test"]))
    })

  })
})
