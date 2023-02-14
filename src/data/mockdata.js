const ingredients = [
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
      }
]

const recipes = [
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
          },
          {
            "id": 19206,
            "quantity": {
              "amount": 3,
              "unit": "Tbsp"
            }
          },
          {
            "id": 19334,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "id": 2047,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "id": 1012047,
            "quantity": {
              "amount": 24,
              "unit": "servings"
            }
          },
          {
            "id": 10019903,
            "quantity": {
              "amount": 2,
              "unit": "c"
            }
          },
          {
            "id": 1145,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "id": 2050,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
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
      }
]

const users = [
    {
        "name": "Saige O'Kon",
        "id": 1,
        "pantry": [
          {
            "ingredient": 11297,
            "amount": 4
          },
          {
            "ingredient": 1082047,
            "amount": 10
          },
          {
            "ingredient": 20081,
            "amount": 5
          },
          {
            "ingredient": 11215,
            "amount": 5
          },
          {
            "ingredient": 2047,
            "amount": 6
          },
          {
            "ingredient": 1123,
            "amount": 8
          },
          {
            "ingredient": 11282,
            "amount": 4
          },
          {
            "ingredient": 6172,
            "amount": 2
          },
          {
            "ingredient": 2044,
            "amount": 2
          },
          {
            "ingredient": 2050,
            "amount": 4
          },
          {
            "ingredient": 1032009,
            "amount": 3
          },
          {
            "ingredient": 5114,
            "amount": 3
          },
          {
            "ingredient": 1017,
            "amount": 2
          },
          {
            "ingredient": 18371,
            "amount": 7
          },
          {
            "ingredient": 1001,
            "amount": 6
          },
          {
            "ingredient": 99223,
            "amount": 2
          },
          {
            "ingredient": 1230,
            "amount": 2
          },
          {
            "ingredient": 9152,
            "amount": 4
          },
          {
            "ingredient": 10611282,
            "amount": 2
          },
          {
            "ingredient": 93607,
            "amount": 2
          },
          {
            "ingredient": 14106,
            "amount": 4
          },
          {
            "ingredient": 1077,
            "amount": 4
          },
          {
            "ingredient": 6150,
            "amount": 2
          },
          {
            "ingredient": 1124,
            "amount": 2
          },
          {
            "ingredient": 10011693,
            "amount": 4
          },
          {
            "ingredient": 1102047,
            "amount": 2
          },
          {
            "ingredient": 19206,
            "amount": 2
          },
          {
            "ingredient": 1145,
            "amount": 4
          },
          {
            "ingredient": 1002030,
            "amount": 4
          },
          {
            "ingredient": 12061,
            "amount": 2
          },
          {
            "ingredient": 19335,
            "amount": 4
          },
          {
            "ingredient": 15152,
            "amount": 3
          },
          {
            "ingredient": 9003,
            "amount": 2
          },
          {
            "ingredient": 18372,
            "amount": 3
          },
          {
            "ingredient": 2027,
            "amount": 2
          }
        ]
      },
      {
        "name": "Ephraim Goyette",
        "id": 2,
        "pantry": [
          {
            "ingredient": 6150,
            "amount": 3
          },
          {
            "ingredient": 1032009,
            "amount": 7
          },
          {
            "ingredient": 1082047,
            "amount": 8
          },
          {
            "ingredient": 1034053,
            "amount": 6
          },
          {
            "ingredient": 2050,
            "amount": 10
          },
          {
            "ingredient": 19335,
            "amount": 13
          },
          {
            "ingredient": 1145,
            "amount": 5
          },
          {
            "ingredient": 18371,
            "amount": 8
          },
          {
            "ingredient": 19336,
            "amount": 4
          },
          {
            "ingredient": 11215,
            "amount": 12
          }
        ]
      },
      {
        "name": "Nelda Bosco",
        "id": 3,
        "pantry": [
          {
            "ingredient": 1009159,
            "amount": 3
          },
          {
            "ingredient": 19335,
            "amount": 10
          },
          {
            "ingredient": 10123,
            "amount": 4
          },
          {
            "ingredient": 1001,
            "amount": 12
          },
          {
            "ingredient": 11529,
            "amount": 5
          },
          {
            "ingredient": 1082047,
            "amount": 4
          },
          {
            "ingredient": 4582,
            "amount": 2
          },
          {
            "ingredient": 2021,
            "amount": 3
          },
          {
            "ingredient": 19336,
            "amount": 3
          },
          {
            "ingredient": 20027,
            "amount": 2
          }
        ]
      }
]

export default {ingredients, users, recipes};