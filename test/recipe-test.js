const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe.js');

describe('Recipe', function() {

  beforeEach(() => {
      recipe = new Recipe(595736, 'Loaded Chocolate Chip Pudding Cookie Cups', 'https://spoonacular.com/recipeImages/595736-556x370.jpg', ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', 'hor d\'oeuvre']);
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

      it.skip('should know the stored instructions', function() {
        // console.log(recipe);
        // expect(recipe.instructions).to.deep.equal([
        //   {'number': 1, 'instruction': 'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.'},
        //   {'number': 2, 'instruction': 'Add egg and vanilla and mix until combined.'},
        //   {'number': 3, 'instruction': 'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.'},
        //   {'number': 4, 'instruction': 'Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.'},
        //   {'number': 5, 'instruction': 'Bake for 9 to 10 minutes, or until you see the edges start to brown.'},
        //   {'number': 6, 'instruction': 'Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.'}
        // ]);
      });

      it('should know the stored tags', function() {
        expect(recipe.tags).to.deep.equal(['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', 'hor d\'oeuvre']);
      });

    });

});
