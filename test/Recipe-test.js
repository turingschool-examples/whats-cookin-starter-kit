import { expect } from 'chai';
import IngredientsLibrary from '../src/classes/IngrediantsRepository';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('', () => {

  let recipes;
  let ingredients;

  beforeEach(() => {
    ingredients = new IngredientsLibrary([
      {
        "id": 1032009,
        "name": "dried red chili",
        "estimatedCostInCents": 1015
      },
      {
        "id": 2047,
        "name": "salt",
        "estimatedCostInCents": 280
      }
    ])
    recipes = new RecipeRepository(
      [
      {
      "id": 988243,
      "image": "https://spoonacular.com/recipeImages/988243-556x370.jpg",
      "ingredients": [
        {
          "id": 1032009,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
      ],
      "instructions": [
        {
          "instruction": "Melt butter to a large skillet over medium heat. As the butter melts, it will begin to foam as it transitions from a bright, lemon-yellow color to golden and then finally to a nutty-brown color. As the butter just begins to turn nutty-brown from golden, reduce your heat to medium-low and carefully toss in your garlic and onion. Cook until the onion just begins to become tender and then add in your shrimp. Stirring frequently, cook until the shrimp turn pink and lose their translucence.",
          "number": 1
        },
        {
          "instruction": "Stir in salt, black pepper, red pepper flakes and fresh parsley. Toss shrimp to make sure all are well-coated.",
          "number": 2
        },
        {
          "instruction": "Remove from heat and serve.",
          "number": 3
        }
      ],
      "name": "Brown Butter Garlic Shrimp",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    }
  ); 

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  })
});