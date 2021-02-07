const testRecipes = [
  {
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
      },
      {
        "id": 1123,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      },
      {
        "id": 19335,
        "quantity": {
          "amount": 0.5,
          "unit": "c"
        }
      }
    ],
    "instructions": [
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
      {
        "id": 1002046,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 11215,
        "quantity": {
          "amount": 1,
          "unit": "clove"
        }
      },
      {
        "id": 1012046,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 19911,
        "quantity": {
          "amount": 0.25,
          "unit": "cup"
        }
      },
      {
        "id": 16112,
        "quantity": {
          "amount": 1,
          "unit": "tablespoon"
        }
      },
      {
        "id": 10010062,
        "quantity": {
          "amount": 24,
          "unit": "ounce"
        }
      },
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
      "dinner"
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
      },
      {
        "id": 4582,
        "quantity": {
          "amount": 4,
          "unit": "servings"
        }
      },
      {
        "id": 2031,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 5100,
        "quantity": {
          "amount": 1,
          "unit": "pound"
        }
      },
      {
        "id": 2009,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 1022020,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 6168,
        "quantity": {
          "amount": 8,
          "unit": "cups"
        }
      },
      {
        "id": 9176,
        "quantity": {
          "amount": 0.5,
          "unit": "cup"
        }
      },
      {
        "id": 2026,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
        }
      },
      {
        "id": 1042047,
        "quantity": {
          "amount": 1.5,
          "unit": "tablespoons"
        }
      },
      {
        "id": 1042047,
        "quantity": {
          "amount": 4,
          "unit": "teaspoons"
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
      "sauce"
    ]
  }
]

let testIngredients = [
  {
    "id": 20081,
    "name": "wheat flour",
    "estimatedCostInCents": 142
  },
  {
    "id": 18372,
    "name": "bicarbonate of soda",
    "estimatedCostInCents": 582
  },
  {
    "id": 1123,
    "name": "eggs",
    "estimatedCostInCents": 472
  },
  {
    "id": 19335,
    "name": "sucrose",
    "estimatedCostInCents": 902
  },
  {
    "id": 19206,
    "name": "instant vanilla pudding",
    "estimatedCostInCents": 660
  },
  {
    "id": 19334,
    "name": "brown sugar",
    "estimatedCostInCents": 559
  },
  {
    "id": 2047,
    "name": "salt",
    "estimatedCostInCents": 280
  },
  {
    "id": 1012047,
    "name": "fine sea salt",
    "estimatedCostInCents": 528
  },
  {
    "id": 10019903,
    "name": "semi sweet chips",
    "estimatedCostInCents": 253
  },
  {
    "id": 1145,
    "name": "unsalted butter",
    "estimatedCostInCents": 617
  },
  {
    "id": 2050,
    "name": "vanilla",
    "estimatedCostInCents": 926
  },
  {
    "id": 1009016,
    "name": "apple cider",
    "estimatedCostInCents": 468
  },
  {
    "id": 9003,
    "name": "apple",
    "estimatedCostInCents": 207
  },
  {
    "id": 20027,
    "name": "corn starch",
    "estimatedCostInCents": 236
  },
  {
    "id": 1002046,
    "name": "dijon style mustard",
    "estimatedCostInCents": 619
  },
  {
    "id": 11215,
    "name": "whole garlic clove",
    "estimatedCostInCents": 220
  },
  {
    "id": 1012046,
    "name": "whole grain dijon mustard",
    "estimatedCostInCents": 867
  },
  {
    "id": 19911,
    "name": "maple",
    "estimatedCostInCents": 349
  },
  {
    "id": 16112,
    "name": "miso",
    "estimatedCostInCents": 978
  },
  {
    "id": 10010062,
    "name": "pork chop",
    "estimatedCostInCents": 834
  },
  {
    "id": 1102047,
    "name": "s&p",
    "estimatedCostInCents": 524
  },
  {
    "id": 16124,
    "name": "soy sauce",
    "estimatedCostInCents": 486
  },
  {
    "id": 1016168,
    "name": "sriracha sauce",
    "estimatedCostInCents": 576
  },
  {
    "id": 1002030,
    "name": "black pepper",
    "estimatedCostInCents": 441
  },
  {
    "id": 1001,
    "name": "butter",
    "estimatedCostInCents": 618
  },
  {
    "id": 4582,
    "name": "oil",
    "estimatedCostInCents": 807
  },
  {
    "id": 2031,
    "name": "red pepper powder",
    "estimatedCostInCents": 583
  },
  {
    "id": 5100,
    "name": "chicken wing",
    "estimatedCostInCents": 593
  },
  {
    "id": 2009,
    "name": "red chili powder",
    "estimatedCostInCents": 499
  },
  {
    "id": 1022020,
    "name": "garlic powder",
    "estimatedCostInCents": 344
  },
  {
    "id": 6168,
    "name": "tabasco sauce",
    "estimatedCostInCents": 859
  },
  {
    "id": 9176,
    "name": "mangoes",
    "estimatedCostInCents": 425
  },
  {
    "id": 2026,
    "name": "onion powder",
    "estimatedCostInCents": 597
  },
  {
    "id": 1042047,
    "name": "seasoned salt",
    "estimatedCostInCents": 334
  }

module.exports = testRecipes;
module.exports = testIngredients;
