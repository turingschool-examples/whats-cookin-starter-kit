const chai = require("chai");
const expect = chai.expect;

const Recipe = require("../src/Recipe.js");

describe("Recipe", function () {
  let recipe, ingredient1, ingredient2, ingredient3, instruction1, instruction2, instruction3;
// need to creat sample ingredients data
  before(function () {
    ingredient1 = {'id': 20081, 'quantity': {'amount': 1.5, 'unit': 'c'}};
    ingredient2 = {'id': 18372, 'quantity': {'amount': 0.5, 'unit': 'tsp'}};
    ingredient3 = {'id': 1123, 'quantity': {'amount': 1, 'unit': 'large'}};
    instruction1 = {'instruction': 'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.', 'number': 1};
    instruction2 = {'instruction': 'Add egg and vanilla and mix until combined.', 'number': 2};
    instruction3 = {'instruction': 'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.', 'number': 3};
    recipe = new Recipe(
    595736,
    'https://spoonacular.com/recipeImages/595736-556x370.jpg',
    [ingredient1, ingredient2, ingredient3],
    [instruction1, instruction2, instruction3],
    'Loaded Chocolate Chip Pudding Cookie Cups',
    ['antipasti', 'starter', 'snack', 'appetizer']
    );
  });

  it("should be a function", function () {
    expect(Recipe).to.be.a("function");
  });

  it("should be an instance of Recipe", function () {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  // create sad path id for non number id's
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

  it('should return an ingredient\'s name', function(){
    //const ingredientData = {"id": 20081, "name": "wheat flour", "estimatedCostInCents": 142};
    expect(recipe.getIngredientName(ingredient1)).to.equal('wheat flour');
  });

  // SHOULD BE ABLE to take multip.e
  it('should return an ingredient\'s cost', function(){
    //const ingredientData = {"id": 20081, "name": "wheat flour", "estimatedCostInCents": 142};
    expect(recipe.getIngredientCost(ingredient1)).to.equal(142);
  });

  it('should calculate total cost of the recipe', function() { //need to change if price display is changed
    expect(recipe.calculateTotalCost()).to.equal(11.96);
  });

  it('should return its own instructions', function() { //need to change if price display is changed
    expect(recipe.returnInstructions()).to.deep.equal([instruction1, instruction2, instruction3]);
    expect(recipe.returnInstructions().length).to.equal(3);
  });

  it('should check if it includes a specific ingredient', function() { //need to change if price display is changed
    //create ingredient4 not in the recipe
    expect(recipe.checkForIngredient(ingredient1)).to.equal(true);

  });

  it('should check if it does not include a specific ingredient', function() { //need to change if price display is changed
    //create ingredient4 not in the recipe
    expect(recipe.checkForIngredient(ingredient4)).to.equal(false);
  });
});
