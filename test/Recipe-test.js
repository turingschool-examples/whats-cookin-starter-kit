const expect = require('chai').expect;

const Recipe = require('../src/Recipe');
const recipe1Image = "https://spoonacular.com/recipeImages/595736-556x370.jpg";
const recipe2Image = "https://spoonacular.com/recipeImages/678353-556x370.jpg";
const recipe1Ingredients = [
  {
    "id": 20081,
    "quantity": {
      "amount": 1.5,
      "unit": "c"
    }
  },
  {
    "id": 18372,
    "quantity": {
      "amount": 0.5,
      "unit": "tsp"
    }
  },
  {
    "id": 1123,
    "quantity": {
      "amount": 1,
      "unit": "large"
    }
  }
];

const recipe2Ingredients = [
  {
    "id": 1009016,
    "quantity": {
      "amount": 1.5,
      "unit": "cups"
    }
  },
  {
    "id": 9003,
    "quantity": {
      "amount": 2,
      "unit": ""
    }
  },
  {
    "id": 20027,
    "quantity": {
      "amount": 1,
      "unit": "tablespoon"
    }
  }
];

describe('Recipe', function() {

  let recipe, recipe2;
  beforeEach(function() {
    recipe1 = new Recipe(595736, recipe1Image, recipe1Ingredients);
    recipe2 = new Recipe(678353, recipe2Image, recipe2Ingredients);
  });

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe1).to.be.an.instanceof(Recipe);
  });

  it('should have an id number', function() {
    expect(recipe1.id).to.equal(595736);
  });

  it('should be able to have a different id number', function() {
    expect(recipe2.id).to.equal(678353);
  });

  it('should have an image', function() {
    expect(recipe1.image).to.equal(recipe1Image);
  });

  it('should be able to have a different image', function() {
    expect(recipe2.image).to.equal(recipe2Image);
  });

  it('should have ingredients', function() {
    expect(recipe1.ingredients).to.equal(recipe1Ingredients);
  })

  it('should have ingredients', function() {
    expect(recipe2.ingredients).to.equal(recipe2Ingredients);
  })

});
