import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import mockdata from '../src/data/mockdata';

describe('Recipe Repository', () => {
  
  let recipe1;
  let recipe2;
  let mealPlan;


  beforeEach(() => {
    recipe1 = [
      {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients" : [{ 
          //"estimatedCostInCents": 142,
          "id": 20081,
          //"name": "wheat flour",
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
      }
    ]

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
    //console.log(mockdata.ingredients[0])

    mealPlan = new RecipeRepository(mockdata.recipes, mockdata.ingredients);
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be able to take in data', () => {
    expect(mealPlan.recipes[0].id).to.deep.equal(mockdata.recipes[0].id);

    const porkChops = new RecipeRepository();
    expect(porkChops).to.be.an.instanceOf(RecipeRepository);
    expect(porkChops.recipes).to.deep.equal([]);

  })

  it('Should filter recipes into a list based on a tag', () => {
    //mealPlan.recipes.push(recipe2);
    recipe1 =  {
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
    }
    expect(mealPlan.recipes[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    expect(mealPlan.recipes.length).to.equal(2);

    mealPlan.filterRecipesByTag('lunch')
    expect(mealPlan.recipesByTag[0].id).to.equal(mockdata.recipes[1].id);

    mealPlan.filterRecipesByTag('snack')
    expect(mealPlan.recipesByTag[0].name).to.equal(mockdata.recipes[0].name);

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
    
    // recipe1 =  {
    //   "id": 595736,
    //   "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    //   "ingredients" : [{ 
    //     "id": 20081,
    //     "quantity": {
    //       "amount": 1.5,
    //       "unit": "c"
    //       }
    //   }], 
    //   "instructions" : [{
    //     "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
    //     "number": 1
    //   }],
    //   "name": "Loaded Chocolate Chip Pudding Cookie Cups",
    //   "tags": [
    //     "antipasti",
    //     "starter",
    //     "snack",
    //   ]
    // }
    expect(mealPlan.recipes[0].id).to.equal(595736);

    mealPlan.filterRecipesByName("Loaded Chocolate Chip Pudding Cookie Cups".toUpperCase())
    expect(mealPlan.recipesByName[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    
     mealPlan.filterRecipesByName("Maple Dijon Apple Cider Grilled Pork Chops".toUpperCase())
     expect(mealPlan.recipesByName[0].name).to.equal("Maple Dijon Apple Cider Grilled Pork Chops");

     mealPlan.filterRecipesByTag('Chocolate Maple'.toUpperCase())
     expect(mealPlan.recipesByTag).to.deep.equal([]);

     mealPlan.filterRecipesByTag('')
     expect(mealPlan.recipesByTag).to.deep.equal([]);

     mealPlan.filterRecipesByTag(23) 
     expect(mealPlan.recipesByTag).to.deep.equal([]);
   })

})
