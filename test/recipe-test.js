import { expect } from 'chai';
import { ingredientTestData, recipeTestData } from '../src/data/testData.js';
import { filterByTag, filterByName, determineIngredientNames, calculateCost, returnInstructions, toggleRecipesToCook, recipesToCook } from '../src/recipe.js';

describe('', () => {
  let recipeInfo;
  let ingredientData;
  let instructions;

  beforeEach(() => {
    recipeInfo =  {
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [{"id": 20081, "quantity": {"amount": 1.5, "unit": "c"}}, {"id": 18372, "quantity": {"amount": 0.5, "unit": "tsp"}}, {"id": 1123, "quantity": {"amount": 1, "unit": "large"}}, {"id": 19335, "quantity": {"amount": 0.5, "unit": "c"}}, {"id": 19206, "quantity": {"amount": 3, "unit": "Tbsp"}}, {"id": 19334, "quantity": {"amount": 0.5, "unit": "c"}}, {"id": 2047, "quantity": {"amount": 0.5, "unit": "tsp"}}, {"id": 1012047, "quantity": {"amount": 24, "unit": "servings"}}, {"id": 10019903, "quantity": {"amount": 2, "unit": "c"}}, {"id": 1145, "quantity": {"amount": 0.5, "unit": "c"}}, {"id": 2050, "quantity": {"amount": 0.5, "unit": "tsp"}}],
      "instructions": [{"instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.", "number": 1}, {"instruction": "Add egg and vanilla and mix until combined.", "number": 2}, {"instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.", "number": 3}, {"instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.", "number": 4}, {"instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.", "number": 5}, {"instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.", "number": 6}],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": ["antipasti", "starter", "snack", "appetizer", "antipasto", "hor d'oeuvre", "breakfast"]
    };
    ingredientData = ['wheat flour', 'bicarbonate of soda', 'eggs', 'sucrose', 'instant vanilla pudding', 'brown sugar', 'salt', 'fine sea salt', 'semi sweet chips', 'unsalted butter', 'vanilla'];
  });
  
  describe('filterByTag', () => {
    it('Should return recipe filtered by given tag', () => {
      const result = filterByTag("antipasti", recipeTestData);
      expect(result).to.deep.equal([recipeInfo]);
    });
    it('Should return error message if no results are found', () => {
      const result = filterByTag("late night snack", recipeTestData);
      expect(result).to.equal("No recipes found");
    })
  });

  describe('filterByName', () => {
    it('Should return recipe according to name passed in', () => {
      const result = filterByName("loaded chocolate chip pudding cookie cups", recipeTestData);
      expect(result).to.deep.equal([recipeInfo]);
    });
    it('Should return error message if no recipe is found', () => {
      const result = filterByName("Loaded Nacho Pizza Pudding Pops", recipeTestData);
      expect(result).to.equal("No recipes found");
    });
  }); 
    
  describe('determineIngredientNames', () => {
    it('Should be a function', () => {
      expect(determineIngredientNames).to.be.a('function');
    });
    it('Should return an array of ingredient names', () => {
      const findIngredients = determineIngredientNames(recipeTestData, ingredientTestData, "Loaded Chocolate Chip Pudding Cookie Cups");
      expect(findIngredients).to.deep.equal(ingredientData);
    });
    it('Should return error message if recipe does not exist', () => {
      const findIngredients = determineIngredientNames(recipeTestData, ingredientTestData, "Loaded Nacho Pizza Pudding Pops");
      expect(findIngredients).to.equal("No recipes found");
    })
  });
    
  describe('calculateCost', () => {
    it('should be a function', () => {
      expect(calculateCost).to.be.a('function');
    });
    it(`should calculate the cost of a given recipe's ingredients`, () => {
      const totalCost = calculateCost(recipeInfo, ingredientTestData);
      expect(totalCost).to.equal(177.76);
    });
    it(`should return error message if ingredient id does not exist`, () => {
      const totalCost = calculateCost({ingredients: [{id: -3}] }, ingredientTestData);
      expect(totalCost).to.equal("Ingredient not found");
    });
  });

  describe('returnInstructions', () => {
    it('Should be a function', () => {
      expect(returnInstructions).to.be.a('function');
    });
    it('Should return the instructions of searched recipe', () => {
      const instructionsTest = returnInstructions(recipeInfo);
      expect(instructionsTest).to.deep.equal(recipeInfo.instructions);
    });
    it('Should return error message if recipe does not exist', () => {
      const instructionsTest = returnInstructions(null);
      expect(instructionsTest).to.equal("Recipe not found");
    });
  });

  describe('toggleRecipesToCook', () => {
    it('Should be a function', () => {
      expect(toggleRecipesToCook).to.be.a('function');
    })
    it('Should add favorite recipes', () => {
      expect(recipesToCook).to.deep.equal([]);
      toggleRecipesToCook(595736, recipeTestData);
      expect(recipesToCook).to.deep.equal([(recipeInfo)]);
    })
    it('Should remove favorite recipes', () => {
      expect(recipesToCook).to.deep.equal([(recipeInfo)]);
      toggleRecipesToCook(595736, recipeTestData);
      expect(recipesToCook).to.deep.equal([]);
    });
    it('Should return an error if the ID doesn\'t exist in the data set', () => {
      const toggle = toggleRecipesToCook(-3, recipeTestData);
      expect(toggle).to.equal('Recipe not found');
    });
  });
});

