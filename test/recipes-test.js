import { expect } from 'chai';
import { testRecipeData, testIngredientsData } from '../src/data/sampleData'
import { filterByTag, searchRecipes, findRecipeIngredients, calculateCost, getInstructions } from '../src/recipes';



describe('Filter recipes by tag', () => {
  it('Should return a filtered list of recipes based on a tag', () => {
    const sideDishes = filterByTag(testRecipeData, ["side dish"]);
    expect(sideDishes).to.deep.equal([
      {
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
          }],
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
          }],
        "name": "Elvis Pancakes",
        "tags": [
          "side dish"
        ]
      },
      {
        "id": 507921,
        "image": "https://spoonacular.com/recipeImages/507921-556x370.jpg",
        "ingredients": [
          {
            "id": 18371,
            "quantity": {
              "amount": 1,
              "unit": "teaspoon"
            }
          },
          {
            "id": 19350,
            "quantity": {
              "amount": 0.25,
              "unit": "cup"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": ""
            }
          }],
        "name": "Ambrosia Cupcakes",
        "tags": [
          "side dish"
        ]
      },
      {
        "id": 764184,
        "image": "https://spoonacular.com/recipeImages/764184-556x370.jpg",
        "ingredients": [
            {
                "id": 1123,
                "quantity": {
                    "amount": 6,
                    "unit": "large"
                }
            },
            {
                "id": 1002030,
                "quantity": {
                    "amount": 1,
                    "unit": "pinch"
                }
            }
        ],
        "instructions": [
            {
                "instruction": "To hard-boil the eggs, place the raw eggs at the bottom of a large pot.",
                "number": 1
            },
            {
                "instruction": "Pour water in the pot until the water is 1-2 inches over the top of the eggs.",
                "number": 2
            }
        ],
        "name": "Hummus Deviled Eggs",
        "tags": [
            "side dish"
        ]
    }
    ])
  });
  it('Should return a filtered list of recipes based on any of the provided tags', () => {
    const lunchesAndSauces = filterByTag(testRecipeData, ["lunch", "sauce"]);
    expect(lunchesAndSauces).to.deep.equal([{
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
        }],
      "instructions": [
        {
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry...",
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
    }, {
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
        }],
      "instructions": [
        {
          "instruction": "Mix the hot sauce, butter, mango habanero sauce...",
          "number": 1
        }
      ],
      "name": "Dirty Steve's Original Wing Sauce",
      "tags": [
        "sauce"
      ]
    }])
  });
  it('Should return an empty array if no match is found', () => {
    const noMatch = filterByTag(testRecipeData, ["non-existent tag"]);
    expect(noMatch).to.deep.equal([])
  });
})

describe('Search recipes by name', () => {
  it('Should return a filtered list of recipes based on recipe\'s name', () => {
    const ambrosiaCupcakes = searchRecipes(testRecipeData, "Ambrosia Cupcake", testIngredientsData)
    expect(ambrosiaCupcakes).to.deep.equal([{
      "id": 507921,
      "image": "https://spoonacular.com/recipeImages/507921-556x370.jpg",
      "ingredients": [
        {
          "id": 18371,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19350,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        }],
      "name": "Ambrosia Cupcakes",
      "tags": [
        "side dish"
      ]
    }]);
  });
  it('Should return a filtered list of recipes based on recipe\'s name regardless of case', () => {
    const ambrosiaCupcakesLowered = searchRecipes(testRecipeData, "ambro", testIngredientsData)
    expect(ambrosiaCupcakesLowered).to.deep.equal([{
      "id": 507921,
      "image": "https://spoonacular.com/recipeImages/507921-556x370.jpg",
      "ingredients": [
        {
          "id": 18371,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19350,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        }],
      "name": "Ambrosia Cupcakes",
      "tags": [
        "side dish"
      ]
    }]);
  });
  it('Should return multiple results if multiple recipes satisfy criteria', () => {
    const recipesWithCup = searchRecipes(testRecipeData, "cup", testIngredientsData)
    expect(recipesWithCup).to.deep.equal([{
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
        }],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients...",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until...",
          "number": 3
        }],
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
      "id": 507921,
      "image": "https://spoonacular.com/recipeImages/507921-556x370.jpg",
      "ingredients": [
        {
          "id": 18371,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19350,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        }],
      "name": "Ambrosia Cupcakes",
      "tags": [
        "side dish"
      ]
    }]);
  });
  it('Should return an empty array if no match is found', () => {
    const noRecipe = searchRecipes(testRecipeData, "pizza", testIngredientsData)
    expect(noRecipe).to.deep.equal([])
  })
});

describe('Search recipes by ingredient', () => {
  it('Should return a filtered list of recipes based on recipes\'s ingredients', () => {
    const recipesWithSoda = searchRecipes(testRecipeData, "soda", testIngredientsData)
    expect(recipesWithSoda).to.deep.equal([
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
          }],
        "instructions": [
          {
            "instruction": "In a large mixing bowl, whisk together the dry ingredients...",
            "number": 1
          },
          {
            "instruction": "Add egg and vanilla and mix until combined.",
            "number": 2
          },
          {
            "instruction": "Add dry ingredients and mix on low just until...",
            "number": 3
          }],
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "tags": [
          "antipasti",
          "starter",
          "snack",
          "appetizer",
          "antipasto",
          "hor d'oeuvre"
        ]
      }
    ])
  })
  it('Should return multiple results', () => {
    const recipesWithFlour = searchRecipes(testRecipeData, "flour", testIngredientsData)
    expect(recipesWithFlour).to.deep.equal([{
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
        }],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients...",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until...",
          "number": 3
        }],
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
        }],
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
        }],
      "name": "Elvis Pancakes",
      "tags": [
        "side dish"
      ]
    }
    ]);
  });
  it('Should not duplicate recipe if it satisfies multiple criteria - name AND ingredients or multiple ingredients', () => {
    const recipeWithEggs = searchRecipes(testRecipeData, "egg", testIngredientsData);
    expect(recipeWithEggs).to.deep.equal([
      {
        "id": 764184,
        "image": "https://spoonacular.com/recipeImages/764184-556x370.jpg",
        "ingredients": [
            {
                "id": 1123,
                "quantity": {
                    "amount": 6,
                    "unit": "large"
                }
            },
            {
                "id": 1002030,
                "quantity": {
                    "amount": 1,
                    "unit": "pinch"
                }
            }
        ],
        "instructions": [
            {
                "instruction": "To hard-boil the eggs, place the raw eggs at the bottom of a large pot.",
                "number": 1
            },
            {
                "instruction": "Pour water in the pot until the water is 1-2 inches over the top of the eggs.",
                "number": 2
            }
        ],
        "name": "Hummus Deviled Eggs",
        "tags": [
            "side dish"
        ]
    },
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
        }],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients...",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until...",
          "number": 3
        }],
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
      "id": 507921,
      "image": "https://spoonacular.com/recipeImages/507921-556x370.jpg",
      "ingredients": [
        {
          "id": 18371,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19350,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        }],
      "name": "Ambrosia Cupcakes",
      "tags": [
        "side dish"
      ]
    }
])
})

  it('Should return an empty array if no match is found', () => {
    const noEggz = searchRecipes(testRecipeData, "eggz", testIngredientsData)
    expect(noEggz).to.deep.equal([])
  })
})

describe("Get ingredients", () => {
  it("Should return an array of ingredient names for a given recipe", () => {
    const elvisPancakesIngredients = findRecipeIngredients(testRecipeData, 741603, testIngredientsData);
    expect(elvisPancakesIngredients).to.deep.equal(["wheat flour", "baking powder", "ripe banana"]);
  })
  it("Should return an array of ingredient names for a different recipe", () => {
    const cookieCupsIngredients = findRecipeIngredients(testRecipeData, 595736, testIngredientsData);
    expect(cookieCupsIngredients).to.deep.equal(["wheat flour", "bicarbonate of soda", "eggs"]);
  })
});

describe("Calculate cost of ingredients", () => {
  it("Should return total cost of given's recipe ingredients", () => {
    const elvisCost = calculateCost(testRecipeData, 741603, testIngredientsData);
    expect(elvisCost).to.equal(48.06)
  })
  it("Should return total cost of different recipe ingredients", () => {
    const cookieCupsCost = calculateCost(testRecipeData, 595736, testIngredientsData);
    expect(cookieCupsCost).to.equal(9.76)
  })
});

describe("Get Instructions", () => {
  it("Should return an array of instructions", () => {
    const cookieCupsInstructions = getInstructions(testRecipeData, 595736);
    expect(cookieCupsInstructions).to.deep.equal(["In a large mixing bowl, whisk together the dry ingredients...", "Add egg and vanilla and mix until combined.", "Add dry ingredients and mix on low just until..."])
  });
  it("Should return instructions for a different recipe", () => {
    const porkChopsInstructions = getInstructions(testRecipeData, 678353)
    expect(porkChopsInstructions).to.deep.equal(["Season the pork chops with salt and pepper and grill or pan fry..."])
  })
})



