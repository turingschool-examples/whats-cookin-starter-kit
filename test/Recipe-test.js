import { expect } from 'chai';
import { ingredientsData } from '../src/data/sampleIngredientData.js';
import { recipeData } from '../src/data/sampleRecipeData.js';
import Ingredient from '../src/classes/Ingredient.js';
import Recipe from '../src/classes/Recipe.js';

describe('Recipe Class', () => {
    let recipe;

    beforeEach(() => {
        recipe = new Recipe(recipeData[0]);
    });

    it('should be a function', () => {
        expect(Recipe).to.be.a('function');
    });

    it('should be an instance of Recipe', () => {
        expect(recipe).to.be.an.instanceof(Recipe);
    });

  describe('Recipe constructor properties', function() {
    it('should have an id', () => {
      expect(recipe.id).to.equal(595736);
    });

    it('should store an image url', () => {
      expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg")
    });

    it('should store ingredients', () => {
      expect(recipe.ingredients).to.equal(recipeData[0].ingredients)
    });

    it('should be able to create instances of Ingredients and store them', function() {
      recipe.getIngredientsData(ingredientsData);

      expect(recipe.ingredients).to.be.an('array');
      expect(recipe.ingredients.length).to.equal(recipeData[0].ingredients.length);
      expect(recipe.ingredients[0]).to.be.an.instanceOf(Ingredient);
      expect(recipe.ingredients[0].name).to.equal('wheat flour');
    });

    it('should store a list of instructions', () => {
      expect(recipe.instructions).to.be.an('array');
      expect(recipe.instructions[0].number).to.equal(1);
      expect(recipe.instructions).to.deep.equal(recipeData[0].instructions);
    });

    it('should have a name', () => {
      expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    });

    it('should store a list of tags', () => {
      expect(recipe.tags).to.be.an('array');
      expect(recipe.tags).to.equal(recipeData[0].tags);
    });


  describe('Recipe methodology', () => {
    it('should return a list of ingredients', () => {
      const expected = [
        "1.5 c wheat flour",
        "0.5 tsp bicarbonate of soda",
        "1 large eggs",
        "0.5 c sucrose",
        "3 Tbsp instant vanilla pudding",
        "0.5 c brown sugar",
        "0.5 tsp salt",
        "24 servings fine sea salt",
        "2 c semi sweet chips",
        "0.5 c unsalted butter",
        "0.5 tsp vanilla"
      ];

      recipe.getIngredientsData(ingredientsData);
      const listOfIngredients = recipe.returnIngredientList();

      expect(listOfIngredients).to.be.an('array');
      expect(listOfIngredients).to.deep.equal(expected)
    });

    it('should return the total cost of all ingredients', () => {
      const expected = '177.76';
      recipe.getIngredientsData(ingredientsData)
      const totalCost = recipe.returnTotalCost(ingredientsData, recipeData);

      expect(totalCost).to.equal(expected);
    });

    it('should return the instructions', () => {
      const instructions = recipe.returnInstructions(recipeData);

      expect(instructions.length).to.deep.equal(recipeData[0].instructions.length);
      expect(instructions).to.be.an('array');
      expect(instructions[1]).to.equal("Add egg and vanilla and mix until combined.");
    });
  });
});
});
