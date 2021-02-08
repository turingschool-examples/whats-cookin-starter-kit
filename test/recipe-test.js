const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/recipe.js');


describe('Recipe', function() {

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    const recipe = new Recipe();
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should initialize with an ID', function () {
    const recipe = new Recipe(336688);
    expect(recipe.id).to.eq(336688);
  });

  it('should initialize with an Image', function () {
    const recipe = new Recipe(336688, 'https://whatscookin.jpg');
    expect(recipe.image).to.eq('https://whatscookin.jpg');
  });

  it('should initialize with an array of ingredients', function () {
    const ingredients = [
      {
        "id": 33333,
        "quantity": {
          "amount": 15,
          "unit": "tsp"
        }
      },
      {
        "id": 4567,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      }];
    const recipe = new Recipe(336688, 'https://whatscookin.jpg', ingredients);
    expect(recipe.ingredients).to.deep.eq(ingredients);
  });

  it('should initialize with an array of instructions', function () {
    const ingredients = [
      {
        "id": 33333,
        "quantity": {
          "amount": 15,
          "unit": "tsp"
        }
      },
      {
        "id": 4567,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      }];
    const instructions = [
      {
        "instruction": "slice the bread",
        "number": 1
      },
      {
        "instruction": "butter the bread",
        "number": 2
      }];
    const recipe = new Recipe(336688, 'https://whatscookin.jpg', ingredients, instructions)
    expect(recipe.instructions).to.eq(instructions);
  });

  it('should have a name', function () {
    const ingredients = [
      {
        "id": 33333,
        "quantity": {
          "amount": 15,
          "unit": "tsp"
        }
      },
      {
        "id": 4567,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      }];
    const instructions = [
      {
        "instruction": "slice the bread",
        "number": 1
      },
      {
        "instruction": "butter the bread",
        "number": 2
      }];
    const recipe = new Recipe(336688, 'https://whatscookin.jpg', ingredients, instructions, 'sandwich');
    expect(recipe.name).to.eq('sandwich')
  });

  it('should initialize with an array of tags', function () {
    const ingredients = [
      {
        "id": 33333,
        "quantity": {
          "amount": 15,
          "unit": "tsp"
        }
      },
      {
        "id": 4567,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      }];
    const instructions = [
      {
        "instruction": "slice the bread",
        "number": 1
      },
      {
        "instruction": "butter the bread",
        "number": 2
      }];
    const recipe = new Recipe(336688, 'https://whatscookin.jpg', ingredients, instructions, 'sandwich', ['dinner', 'lunch']);
    expect(recipe.tags).to.deep.equal(['dinner', 'lunch']);
  });

    it('should be able to add name to ingredients ID', function () {
    const ingredients = [
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
      }];
    const ingredientsData = [
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      }];
    const instructions = [
      {
        "instruction": "slice the bread",
        "number": 1
      },
      {
        "instruction": "butter the bread",
        "number": 2
      }];

    const recipe = new Recipe(336688, 'https://whatscookin.jpg', ingredients, instructions, 'sandwich', ['dinner', 'lunch'])

    recipe.generateIngredientNames(recipe);
    expect(recipe.ingredients[0].name).to.equal('wheat flour');
    expect(recipe.ingredients[1].name).to.equal('bicarbonate of soda');
    });
});