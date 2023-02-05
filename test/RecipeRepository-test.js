import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe', () => {
  
  let recipe1;
  let recipe2;
  let cookies;


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

    cookies = new RecipeRepository(recipe1);
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be able to take in data', () => {
    expect(cookies.recipes).to.deep.equal([recipe1]);
  })

  it('Should filter recipes into a list based on a tag', () => {
    cookies.recipes.push(recipe2)
    expect(cookies.recipes).to.deep.equal([recipe1, recipe2]);

    cookies.filterRecipesByTag('lunch')
    expect(cookies.recipesByTag).to.deep.equal([recipe2]);

    cookies.filterRecipesByTag('snack')
    expect(cookies.recipesByTag).to.deep.equal([recipe1, recipe2]);

    cookies.filterRecipesByTag('')
    expect(cookies.recipesByTag).to.deep.equal([]);

    cookies.filterRecipesByTag('jkdfafadvdj vjfv')
    expect(cookies.recipesByTag).to.deep.equal([]);

    cookies.filterRecipesByTag(23) 
    expect(cookies.recipesByTag).to.deep.equal([]);

    cookies.filterRecipesByTag(23, 'snack')
    expect(cookies.recipesByTag).to.deep.equal([]);
  })

  it('Should filter recipes into a list based on name', () => {
    cookies.recipes.push(recipe2)
    expect(cookies.recipes).to.deep.equal([recipe1, recipe2]);

    cookies.filterRecipesByName('Maple Dijon Apple Cider Grilled Pork Chops')
    expect(cookies.recipesByName).to.deep.equal([recipe2]);
    
    cookies.filterRecipesByName('Pork Chops')
    expect(cookies.recipesByName).to.deep.equal([recipe2]);
    
    cookies.filterRecipesByName('Chocolate')
    expect(cookies.recipesByName).to.deep.equal([recipe1]);

    cookies.filterRecipesByTag('Chocolate Maple')
    expect(cookies.recipesByTag).to.deep.equal([]);

    cookies.filterRecipesByTag('')
    expect(cookies.recipesByTag).to.deep.equal([]);

    cookies.filterRecipesByTag(23) 
    expect(cookies.recipesByTag).to.deep.equal([]);
  })
})
