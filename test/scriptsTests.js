// import { expect } from 'chai';
// import { assert } from 'chai';
const chai = require('chai');
const expect = chai.expect;
const assert = require('chai').assert;
const {findRecipeByTag, findRecipeByName, findRecipeIngredients, specificRecipe, calculateCost } = require('../test/untestedFunctions.js');

describe('findRecipeByTag', () => {
  it('Should return an array of one object containing a certain tag', () => {
    let dinnerRecipes = findRecipeByTag("dinner");
    expect(dinnerRecipes).to.deep.equal([{
      "id": 741603,
      "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 18371,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 9040,
          "quantity": {
            "amount": 12,
            "unit": "servings"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Watch how to make this recipe.",
          "number": 1
        },
        {
          "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
          "number": 2
        },
        {
          "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
          "number": 3
        }
      ],
      "name": "Elvis Pancakes",
      "tags": [
        "side dish",
        "dinner"
      ]
    }]);
  });
  it('Should return an array of more than one object containing a certain tag', () => {
    let snackRecipes = findRecipeByTag("snack");
    expect(snackRecipes).to.deep.equal([ {
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        },
        {
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
          "number": 4
        },
        {
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
          "number": 5
        },
        {
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
          "number": 6
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 678353,
      "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      "ingredients": [
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
          "number": 1
        }
      ],
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "snack"
      ]
    }])
  });
})

describe('findRecipeByName', () => {
  it('Should return a specific recipe object in an array', () => {
    let elvisPancakes = findRecipeByName("Elvis Pancakes");
    expect(elvisPancakes).to.deep.equal(  [{
      "id": 741603,
      "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 18371,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 9040,
          "quantity": {
            "amount": 12,
            "unit": "servings"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Watch how to make this recipe.",
          "number": 1
        },
        {
          "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
          "number": 2
        },
        {
          "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
          "number": 3
        }
      ],
      "name": "Elvis Pancakes",
      "tags": [
        "side dish",
        "dinner"
      ]
    }])
  });
})

describe('findRecipeIngredients', () => {
  it('Should return an array of ingredient names for a specific recipe id passed as a number', () => {
    let ingredientList = findRecipeIngredients(595736);
    expect(ingredientList).to.deep.equal([ 'wheat flour', 'bicarbonate of soda' ])
});
  it('Should return an array of ingredient names for a specific recipe id passed as a string', () => {
    let ingredientList = findRecipeIngredients("595736");
    expect(ingredientList).to.deep.equal([ 'wheat flour', 'bicarbonate of soda' ])
});
})

describe('specificRecipe', () => {
  it('should return a specific recipe based on the id', () => {
    
    const recipeData = [
      {
      "id": 678353,
      "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      "ingredients": [
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
          "number": 1
        }
      ],
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "snack"
      ]
    },
    {
      "id": 412309,
      "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 8,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
          "number": 1
        }
      ],
      "name": "Dirty Steve's Original Wing Sauce",
      "tags": [
        "sauce",
        "main dish",
        
      ]
    }
  ]
  const clickedId = 678353
  const specificRecipe = recipeData.find(recipe => recipe.id === clickedId)

    assert.equal(clickedId, specificRecipe.id)
 
  })
})

// describe('calculateCost', () => {
//   it('should calculate the cost of a given recipe\'s ingredients', () => {
//     const clickedId = 678353

//     const recipeData = [
//       {
//         "id": 595736,
//         "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
//         "ingredients": [
//           {
//             "id": 20081,
//             "quantity": {
//               "amount": 1.5,
//               "unit": "c"
//             }
//           },
//           {
//             "id": 18372,
//             "quantity": {
//               "amount": 0.5,
//               "unit": "tsp"
//             }
//           },
//           {
//             "id": 1123,
//             "quantity": {
//               "amount": 1,
//               "unit": "large"
//             }
//           },
//           {
//             "id": 19335,
//             "quantity": {
//               "amount": 0.5,
//               "unit": "c"
//             }
//           },
//           {
//             "id": 19206,
//             "quantity": {
//               "amount": 3,
//               "unit": "Tbsp"
//             }
//           },
//           {
//             "id": 19334,
//             "quantity": {
//               "amount": 0.5,
//               "unit": "c"
//             }
//           },
//           {
//             "id": 2047,
//             "quantity": {
//               "amount": 0.5,
//               "unit": "tsp"
//             }
//           },
//           {
//             "id": 1012047,
//             "quantity": {
//               "amount": 24,
//               "unit": "servings"
//             }
//           },
//           {
//             "id": 10019903,
//             "quantity": {
//               "amount": 2,
//               "unit": "c"
//             }
//           },
//           {
//             "id": 1145,
//             "quantity": {
//               "amount": 0.5,
//               "unit": "c"
//             }
//           },
//           {
//             "id": 2050,
//             "quantity": {
//               "amount": 0.5,
//               "unit": "tsp"
//             }
//           }
//         ],
//         "instructions": [
//           {
//             "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
//             "number": 1
//           },
//           {
//             "instruction": "Add egg and vanilla and mix until combined.",
//             "number": 2
//           },
//           {
//             "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
//             "number": 3
//           },
//           {
//             "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
//             "number": 4
//           },
//           {
//             "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
//             "number": 5
//           },
//           {
//             "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
//             "number": 6
//           }
//         ],
//         "name": "Loaded Chocolate Chip Pudding Cookie Cups",
//         "tags": [
//           "antipasti",
//           "starter",
//           "snack",
//           "appetizer",
//           "antipasto",
//           "hor d'oeuvre"
//         ]
//       },
//       {
//         "id": 678353,
//         "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
//         "ingredients": [
//           {
//             "id": 1009016,
//             "quantity": {
//               "amount": 1.5,
//               "unit": "cups"
//             }
//           },
//           {
//             "id": 9003,
//             "quantity": {
//               "amount": 2,
//               "unit": ""
//             }
//           },
//           {
//             "id": 20027,
//             "quantity": {
//               "amount": 1,
//               "unit": "tablespoon"
//             }
//           },
//           {
//             "id": 1002046,
//             "quantity": {
//               "amount": 1,
//               "unit": "tablespoon"
//             }
//           },
//           {
//             "id": 11215,
//             "quantity": {
//               "amount": 1,
//               "unit": "clove"
//             }
//           },
//           {
//             "id": 1012046,
//             "quantity": {
//               "amount": 1,
//               "unit": "tablespoon"
//             }
//           },
//           {
//             "id": 19911,
//             "quantity": {
//               "amount": 0.25,
//               "unit": "cup"
//             }
//           },
//           {
//             "id": 16112,
//             "quantity": {
//               "amount": 1,
//               "unit": "tablespoon"
//             }
//           },
//           {
//             "id": 10010062,
//             "quantity": {
//               "amount": 24,
//               "unit": "ounce"
//             }
//           },
//           {
//             "id": 1102047,
//             "quantity": {
//               "amount": 4,
//               "unit": "servings"
//             }
//           },
//           {
//             "id": 16124,
//             "quantity": {
//               "amount": 1,
//               "unit": "tablespoon"
//             }
//           },
//           {
//             "id": 1016168,
//             "quantity": {
//               "amount": 1,
//               "unit": "tablespoon"
//             }
//           }
//         ],
//         "instructions": [
//           {
//             "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
//             "number": 1
//           }
//         ],
//         "name": "Maple Dijon Apple Cider Grilled Pork Chops",
//         "tags": [
//           "lunch",
//           "main course",
//           "main dish",
//           "dinner"
//         ]
//       }
//     ]
      

//   }
// })