import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {
  
  let recipe1;
  let recipe2;
  let mealPlan;


  beforeEach(() => {
    recipe1 = {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients" : [{ 
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
            }
        }], 
        "instructions" : [{
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        }],
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "tags": [
          "antipasti",
          "starter",
          "snack",
        ]
      };

    recipe2 = {
      "id": 678353,
      "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      "ingredients" : [{
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
      }
      ], 
        "instructions" : [{
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
          "number": 1
        }],
        "name": "Maple Dijon Apple Cider Grilled Pork Chops",
        "tags": [
          "lunch",
          "main course",
          "main dish",
          "dinner",
          "snack"
          
      ]
    }

    mealPlan = new RecipeRepository(recipe1);
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be able to take in data', () => {
    expect(mealPlan.recipes).to.deep.equal([recipe1]);

    const porkChops = new RecipeRepository();
    expect(porkChops).to.be.an.instanceOf(RecipeRepository);
    expect(porkChops.recipes).to.deep.equal([]);

  })

  it('Should filter recipes into a list based on a tag', () => {
    mealPlan.recipes.push(recipe2)
    expect(mealPlan.recipes).to.deep.equal([recipe1, recipe2]);

    mealPlan.filterRecipesByTag('lunch')
    expect(mealPlan.recipesByTag).to.deep.equal([recipe2]);

    mealPlan.filterRecipesByTag('snack')
    expect(mealPlan.recipesByTag).to.deep.equal([recipe1, recipe2]);

    mealPlan.filterRecipesByTag('')
    expect(mealPlan.recipesByTag).to.deep.equal([]);

    mealPlan.filterRecipesByTag('jkdfafadvdj vjfv')
    expect(mealPlan.recipesByTag).to.deep.equal([]);

    mealPlan.filterRecipesByTag(23) 
    expect(mealPlan.recipesByTag).to.deep.equal([]);

    mealPlan.filterRecipesByTag(23, 'snack')
    expect(mealPlan.recipesByTag).to.deep.equal([]);
  })

  it('Should filter recipes into a list based on name', () => {
    mealPlan.recipes.push(recipe2)
    expect(mealPlan.recipes).to.deep.equal([recipe1, recipe2]);

    mealPlan.filterRecipesByName('Maple Dijon Apple Cider Grilled Pork Chops')
    expect(mealPlan.recipesByName).to.deep.equal([recipe2]);
    
    mealPlan.filterRecipesByName('Pork Chops')
    expect(mealPlan.recipesByName).to.deep.equal([recipe2]);
    
    mealPlan.filterRecipesByName('Chocolate')
    expect(mealPlan.recipesByName).to.deep.equal([recipe1]);

    mealPlan.filterRecipesByTag('Chocolate Maple')
    expect(mealPlan.recipesByTag).to.deep.equal([]);

    mealPlan.filterRecipesByTag('')
    expect(mealPlan.recipesByTag).to.deep.equal([]);

    mealPlan.filterRecipesByTag(23) 
    expect(mealPlan.recipesByTag).to.deep.equal([]);
  })

})
