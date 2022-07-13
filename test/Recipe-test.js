import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
const data = require('../src/data/recipes.js');
const data1 = require('../src/data/ingredients.js');
const testRecipeData = data.testRecipeData;
const testIngData = data1.testIngredients;

describe('Recipe', () => {

  let recipe;
  let recipe2;
  let recipe3;

  beforeEach(() => {
    recipe = new Recipe(testRecipeData[0], testIngData);
    recipe2 = new Recipe(testRecipeData[1], testIngData);
    recipe3 = new Recipe(testRecipeData[2], testIngData);
  });

  it('should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should be a new instance of Recipe', () => {
    expect(recipe).to.be.an.instanceOf(Recipe);
  });

  it('should hold a recipe ID', () => {
    expect(recipe2.id).to.equal(678353);
    expect(recipe3.id).to.equal(412309);
  });

  it('should hold a recipe image', () => {
    expect(recipe3.image).to.equal("https://spoonacular.com/recipeImages/412309-556x370.jpeg");
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
  });

  it('should hold recipe ingredients', () => {
    expect(recipe2.ingredients).to.deep.equal([
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
      },
    ]);
  });

  it('should hold recipe instructions', () => {
    expect(recipe.instructions).to.deep.equal([
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      },
      {
        "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        "number": 3
      }
    ]);
  });

  it('should hold recipe names', () => {
    expect(recipe3.name).to.equal("Dirty Steve's Original Wing Sauce");
    expect(recipe2.name).to.equal("Maple Dijon Apple Cider Grilled Pork Chops")
  });

  it('should hold recipe tags', () => {
    expect(recipe.tags).to.deep.equal(['antipasti', 'starter', 'snack']);
    expect(recipe2.tags).to.deep.equal(['lunch', 'main course', 'main dish', 'test']);
  });

  it('should have a method to get ingredient names', () => {
    expect(recipe2.getIngredientNames()).to.deep.equal(['apple cider', 'apple', 'corn starch'])
    expect(recipe.getIngredientNames()).to.deep.equal(['wheat flour', 'bicarbonate of soda', 'eggs'])
  });

  it('should have a method to get cost of ingredients in cents', () => {
    expect(recipe2.getCostofIngredients()).to.deep.equal([702, 414, 236])
    expect(recipe.getCostofIngredients()).to.deep.equal([213, 291, 472])
  });

  it('should have a method to get the total cost in dollars for a recipe', () => {
    expect(recipe2.getCostofRecipe()).to.equal('$13.52')
    expect(recipe.getCostofRecipe()).to.equal('$9.76')
  });

  it('should have a method to return recipe instructions', () => {
    expect(recipe.returnRecipeInstructions()).to.deep.equal([
      '1: In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
      '2: Add egg and vanilla and mix until combined.',
      '3: Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.'
    ])
    expect(recipe2.returnRecipeInstructions()).to.deep.equal([
      '1: Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!'
    ])
  });

});
