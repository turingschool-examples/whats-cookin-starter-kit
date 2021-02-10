const chai = require('chai');
const expect = chai.expect;
const RecipeRepo = require('../src/RecipeRepo');
const Recipe = require('../src/Recipe');

describe('RecipeRepo', () => {
  let recipe, buffaloChicken, beefNoodle, spaghetti, ingredientData;

  beforeEach(() => {
    recipe = new RecipeRepo();
    buffaloChicken = {
      id: 991136,
      image: "https://spoonacular.com/recipeImages/991136-556x370.jpg",
      ingredients: [
        {
          id: 1001,
          quantity: {
            amount: 0.25,
            unit: 'cup'
          }
        },
        {
          id: 98871,
          quantity: {
            amount: 12,
            unit: 'unit'
          }
        },
      ],
      instructions: [
        { instruction: 'step 1', number: 1 },
        { instruction: 'step 2', number: 2 },
        { instruction: 'step 3', number: 3 }
      ],
      name: 'Buffalo Chicken Example',
      tags: ['lunch', 'main course', 'main dish', 'dinner']
    };
    beefNoodle = {
      id: 2,
      image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
      ingredients: [
        {
          id: 302,
          quantity: {
            amount: 10,
            unit: 'cup'
          }
        },
        {
          id: 410,
          quantity: {
            amount: 3,
            unit: 'tbs'
          }
        }
      ],
      instructions: [
        { instruction: 'step 1', number: 1 },
        { instruction: 'step 2', number: 2 },
        { instruction: 'step 3', number: 3 }
      ],
      name: 'Beef Noodle',
      tags: ['noodles', 'main dish', 'hot dish'],
    };
    spaghetti = {
      id: 1234,
      image: "https://spoonacular.com/recipeImages/991136-556x370.jpg",
      ingredients: [
        {
          id: 1001,
          quantity: {
            amount: 0.25,
            unit: 'cup'
          }
        },
        {
          id: 91,
          quantity: {
            amount: 12,
            unit: 'unit'
          }
        },
      ],
      instructions: [
        { instruction: 'step 1', number: 1 },
        { instruction: 'step 2', number: 2 },
        { instruction: 'step 3', number: 3 }
      ],
      name: 'Spaghetti',
      tags: ['lunch', 'main course', 'main dish', 'dinner']
    };
    ingredientData = [
      {
        id: 98871,
        name: 'hawaiian sweet rolls',
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
  })

  describe('Properties', () => {

    it('should be a function', () => {
      expect(RecipeRepo).to.be.a('function');
    });

    it('should be an instance of RecipeRepo', () => {
      expect(recipe).to.be.an.instanceof(RecipeRepo);
    });

    it('should have no recipe(s) by default', () => {
      expect(recipe.recipes).to.deep.equal([]);
    });

    it('should be able to hold a recipe if passed in', () => {
      recipe = new RecipeRepo([buffaloChicken]);
      expect(recipe.recipes).to.deep.equal([buffaloChicken]);
    });

    it('should be able to hold mutiple recipes', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle]);
      expect(recipe.recipes).to.deep.equal([buffaloChicken, beefNoodle]);
    });

    it('should create a Recipe instance from a recipe passed in', () => {
      recipe = new RecipeRepo([buffaloChicken]);
      expect(recipe.recipes[0]).to.be.an.instanceof(Recipe);
    });

    it('should be able to create multiple Recipe instances', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle]);
      expect(recipe.recipes[0]).to.be.an.instanceof(Recipe);
      expect(recipe.recipes[1]).to.be.an.instanceof(Recipe);
    });
  })

  describe('Methods', () => {

    it('should be able to filter recipes by a tag', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle]);
      const result = recipe.filterRecipesByTag('noodles')

      expect(result).deep.equal([beefNoodle]);
    });

    it('should be able to return multiple recipes if they share the same tag', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle, spaghetti]);
      const result = recipe.filterRecipesByTag('dinner')

      expect(result).deep.equal([buffaloChicken, spaghetti]);
    });

    it('should return an empty array if tag isn\'t found', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle]);
      const result = recipe.filterRecipesByTag('snack');

      expect(result).deep.equal([]);
    });

    it('should be able to filter recipes by a name', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle]);
      const result = recipe.filterRecipesByName('Beef Noodle');

      expect(result).deep.equal(beefNoodle);
    });

    it('should be able to filter recipes by a name if not capitalized correctly', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle]);
      const result = recipe.filterRecipesByName('beef noodle');

      expect(result).deep.equal(beefNoodle);
    });

    it('should return undefined if the recipe doesn\'t exist', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle]);
      const result = recipe.filterRecipesByName('Pork Tacos');

      expect(result).deep.equal(undefined);
    });

    it('should be able to filter recipes by an ingredient', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle, spaghetti])
      const result = recipe.filterRecipesByIngredients(ingredientData, 'hawaiian sweet rolls');

      expect(result).deep.equal([buffaloChicken]);
    });

    it('should be able return all recipes that include an ingredient', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle, spaghetti])
      const result = recipe.filterRecipesByIngredients(ingredientData, 'butter');

      expect(result).deep.equal([buffaloChicken, spaghetti]);
    });

    it('should return an empty array if no ingredients are in a recipe', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle, spaghetti])
      const result = recipe.filterRecipesByIngredients(ingredientData, 'paprika');

      expect(result).deep.equal([]);
    });
  })
});