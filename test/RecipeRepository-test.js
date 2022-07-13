import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe'


describe('RecipeRepository', () => {
  let dataRecipe;
  let dataIngredient;
  let recipe;
  let recipeRepo;

  beforeEach(() => {
     
      dataRecipe =  
      [ 
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
        }
      ];
        
      dataIngredient = [
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
        }
      ];
        
      // recipe = new Recipe(, dataIngredient);
      // console.log(`RECIPE CLASS INSTANCE: `, recipe);
      recipeRepo = new RecipeRepository(dataRecipe)
      // console.log(`REPO CLASS INSTANCE: `, recipeRepo);
  });



  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of RecipeRepo', () => {
    expect(recipeRepo).to.be.an.instanceOf(RecipeRepository);
  })

  it('should filter by tag', () => {
    // expect(recipeRepo.filterRecipeByTag('Antipasti', 'starter')).to.deep.equal([ 'antipasti', 'starter' ])
    expect(recipeRepo.filterRecipeByTag('lunch')).to.deep.equal(
      [
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
    }
  ]
  )
    expect(recipeRepo.filterRecipeByTag('antipasti')).to.deep.equal
      (
        [
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
            ]
          }
        ]
      )
  });

  it('should filter by a user-given name', () => {
    expect(recipeRepo.filterRecipeByName("Loaded Chocolate Chip Pudding Cookie Cups")).to.deep.equal(
      [
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
          ]
        }
      ]
    )
  })
})