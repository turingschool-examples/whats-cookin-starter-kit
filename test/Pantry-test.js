const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');

describe('Pantry', function() {
  let ingredient1, ingredient2, ingredient3, ingredients, pantry;
  before(function() {
    ingredient1 = {ingredient: 1, amount: 10};
    ingredient2 = {ingredient: 2, amount: 6};
    ingredient3 = {ingredient: 3, amount: 3};
    ingredients = [ingredient1, ingredient2, ingredient3];
    pantry = new Pantry(ingredients);
  })

  it('should be a function', function() {
    expect(Pantry).to.be.a('function');
  });

  it('should be an instance of Pantry', function() {
    expect(pantry).to.be.an.instanceof(Pantry);
  });

  it('should be able to store ingredients', function() {
    expect(pantry.ingredients).to.deep.equal(ingredients);
  });

  it('should be empty if no ingredients are passed in', function() {
    pantry2 = new Pantry(); 

    expect(pantry2.ingredients).to.deep.equal([]);
  });

  it('should be able to calculate how much of a recipe ingredient is missing from the pantry', function() {
    const ingredient = {
      id: 1,
      quantity: {
        amount: 12,
        unit: "cans"
      }
    };
 
    const missingIngredientStock = pantry.checkIngredientStockInPantry(ingredient);

    expect(missingIngredientStock).to.equal(2);
  });
  
  it('should be able to calculate how much extra of a recipe ingredient is in the the pantry', function () {
    const ingredient = {
      id: 1,
      quantity: {
        amount: 5,
        unit: "cans"
      }
    };

    const missingIngredientStock = pantry.checkIngredientStockInPantry(ingredient);

    expect(missingIngredientStock).to.equal(-5);
  });


  it('should be able to check if it has the ingredients needed to make a recipe', function() {
    const recipeIngredient1 = {
      id: 1,
      quantity: {
        amount: 2,
        unit: "cans"
      }
    };
    const recipeIngredient2 = {
      id: 2,
      quantity: {
        amount: 3,
        unit: "cans"
      }
    };
    const instruction1 = { instruction: 'Buy store-bought cookies.', number: 1 };
    const instruction2 = { instruction: 'Say you made them from scratch.', number: 2 };
    const recipe = new Recipe(1, 'https://pxhere.com/en/photo/1575227', [recipeIngredient1, recipeIngredient2], [instruction1, instruction2], 'cookies', ['dessert']);
    const pantryStocked = pantry.checkForRecipeIngredients(recipe);

    expect(pantryStocked).to.equal(true);
  });
})
