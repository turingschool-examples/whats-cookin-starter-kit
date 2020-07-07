const chai = require("chai");
const expect = chai.expect;

const Recipe = require("../src/Recipe.js");

describe("Round", function () {
  let recipe;

  beforeEach(function () {
    recipe = new Recipe();
  });

  it("should be a function", function () {
    expect(Recipe).to.be.a("function");
  });

  it("should be an instance of Deck", function () {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  // sad path id for non number id's
  it('should have an id', function () {
    expect(recipe.id).to.equal(595736);
  });

  it('should have an image', function () {
    expect(recipe.image).to.equal(
      'https://spoonacular.com/recipeImages/595736-556x370.jpg'
    );
  });

  it('should have a list of ingredients', function () { //refactor
    expect(recipe.ingredients).to.deep.equal([
      {
        id: 20081,
        quantity: {
          amount: 1.5,
          unit: 'c',
        },
      },
      {
        id: 18372,
        quantity: {
          amount: 0.5,
          unit: 'tsp',
        },
      },
      {
        id: 1123,
        quantity: {
          amount: 1,
          unit: 'large',
        },
      },
    ]);
  });

  it('should have a list of instructions', function () {//refactor
    expect(recipe.instructions).to.deep.equal([
      {
        instruction:
          'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
        number: 1,
      },
      {
        instruction: 'Add egg and vanilla and mix until combined.',
        number: 2,
      },
      {
        instruction:
          'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.',
        number: 3,
      },
    ]);
  });

  it('should have a name', function () {
    expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  });

  it('should have a list of tags', function () {
    expect(recipe.tags).to.deep.equal(['antipasti', 'starter', 'snack', 'appetizer']);
  });
  
});
