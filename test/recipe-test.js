const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe.js');

describe('Recipe', function() {

  beforeEach(() => {
      recipe = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cookie Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack'], ['Add egg and vanilla and mix until combined.']);
    });

    it('should be a function', function() {
      expect(Recipe).to.be.a('function');
    });

    it('should instantiate a new recipe', function() {
      expect(recipe).to.be.an.instanceof(Recipe);
    });

    describe('stored data', function() {
      it('should know the correct ID number', function() {
        expect(recipe.id).to.equal(595736);
      });

      it('should know the correct name', function() {
        expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
      });

      it('should know the correct image', function() {
        expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
      });

      it('should know the stored instructions', function() {
        expect(recipe.instructions).to.deep.equal(['Add egg and vanilla and mix until combined.'])
      });

      it('should know the stored tags', function() {
        expect(recipe.tags).to.deep.equal(['antipasti', 'starter', 'snack']);
      });

    });

    it.skip('should know the cost of the recipe per ingredient', function() {
      expect(recipe.findCostPerRecipe()).to.equal(570.85)
    });

});
