const chai = require('chai');
const expect = chai.expect;
const Ingredient = require('../src/ingredient.js');
const IngredientRepo = require('../src/ingredientRepo.js');

describe('Ingredient Repo', () => {
  let ingredients;
  beforeEach(() => {
    ingredientData = [
      {
        id: 20081,
        name: 'wheat flour',
        estimatedCostInCents: 142,
      },
      {
        id: 18372,
        name: 'bicarbonate of soda',
        estimatedCostInCents: 582,
      },
      {
        id: 1123,
        name: 'eggs',
        estimatedCostInCents: 472,
      },
      {
        id: 1001,
        name: 'butter',
        estimatedCostInCents: 1,
      },
      {
        id: 2,
        name: 'chocolate',
        estimatedCostInCents: 200,
      },
    ];
    ingredients = new IngredientRepo(
      ingredientData.id,
      ingredientData.name,
      ingredientData.estimatedCostInCents
    );
  });

  it('should be a function', () => {
    expect(IngredientRepo).to.be.a('function');
  });

  it('should create an instance of IngredientRepo', () => {
    expect(ingredients).to.be.an.instanceof(IngredientRepo);
  });

  it('should have no Ingredients by default', () => {
    expect(ingredients.ingredients).to.deep.equal([]);
  });

  it('should hold a list of Ingredients', () => {
    expect(ingredients.ingredients[0]).to.be.an.instanceof(Ingredient);
  });

  it('should return an ingredient id', () => {
    const ingredientId = ingredients.returnIngredientId('butter');
    expect(ingredientId).to.equal(1001);
  });
});
