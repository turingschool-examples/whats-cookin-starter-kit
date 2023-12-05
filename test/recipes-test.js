import { expect } from 'chai';
import { filterByTag, filterByName, listRecipeIngredients } from '../src/recipes';

describe('Shared Variables For Testing Purposes:', () => {
  let sampleIngredients, sampleRecipes, sampleUsers, sampleRecipe, function1Return, function2Return;
  beforeEach(() => {
    sampleIngredients = [
      {
        "id": 1,
        "name": "strawberries",
        "estimatedCostInCents": 400
      },
      {
        "id": 2,
        "name": "blackberries",
        "estimatedCostInCents": 300
      },
      {
        "id": 3,
        "name": "watermelon",
        "estimatedCostInCents": 500
      },
      {
        "id": 4,
        "name": "pineapple",
        "estimatedCostInCents": 200
      },
      {
        "id": 5,
        "name": "vanilla icecream",
        "estimatedCostInCents": 250
      }
    ];
    sampleRecipes = [
      {
        "id": 500,
        "image": "https://imgs.search.brave.com/mRUfqqTWkkk4qddOmAY9EhRgWCo0Fem7pJrWsa6I7p0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzgwLzU4LzQ4/LzM2MF9GXzgwNTg0/ODc3X2R2SFY0bnFL/eEVQYU50blhpZFpE/amlrRGR0aUNtQUJG/LmpwZw",
        "ingredients": [
          {
            "id": 1,
            "quantity": {
              "amount": 2,
              "unit": "c"
            }
          },
          {
            "id": 2,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          ],
        "instructions": [
          {
            "instruction": "Rinse the strawberries and blackberries.",
            "number": 1
          },
          {
            "instruction": "Add both berries to a large bowl",
            "number": 2
          },
          {
            "instruction": "Mix until evenly dispersed.",
            "number": 3
          },
          {
            "instruction": "Enjoy!",
            "number": 4
          }
        ],
        "name": "Berry Fruit Salad",
        "tags": [
          "fruit",
          "salad",
          "berry",
          "healthy",
          "strawberry",
          "blackberry"
        ]
      },
      {
        "id": 600,
        "image": "https://imgs.search.brave.com/Qt3vXLyaEP9ZcX_RC_Vn58VR0d0Y1slPiglu9cCRtT0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDE5/LzA4LzEwL2Rpbmlu/Zy9hdy1zcGljeS13/YXRlcm1lbG9uLXNh/bGFkL2F3LXNwaWN5/LXdhdGVybWVsb24t/c2FsYWQtYXJ0aWNs/ZUxhcmdlLmpwZz93/PTEyODAmcT03NQ",
        "ingredients": [
          {
            "id": 3,
            "quantity": {
              "amount": 1,
              "unit": "c"
            }
          },
          {
            "id": 4,
            "quantity": {
              "amount": 1,
              "unit": "c"
            }
          },
        ],
        "instructions": [
          {
            "instruction": "Cut up the pineapple and watermelon",
            "number": 1
          },
          {
            "instruction": "Mix the fruit in a large bowl until evenly dispersed.",
            "number": 2
          },
          {
            "instruction": "Enjoy your tropical salad!",
            "number": 3
          }
        ],
        "name": "Tropical fruit Salad",
        "tags": [
          "fruit",
          "salad",
          "tropical",
          "healthy",
          "pineapple",
          "watermelon"
        ]
      },
      {
        "id": 700,
        "image": "",
        "ingredients": [
          {
            "id": 1,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "id": 5,
            "quantity": {
              "amount": 1,
              "unit": "c"
            }
          },
          ],
        "instructions": [
          {
            "instruction": "Scoop vanilla icecream into bowl.",
            "number": 1
          },
          {
            "instruction": "Top with strawberries.",
            "number": 2
          },
          {
            "instruction": "Enjoy!",
            "number": 3
          }
        ],
        "name": "Vanilla Icecream With Strawberries",
        "tags": [
          "icecream",
          "strawberry",
          "vanilla",
          "dessert"
        ]
      },
    ];
    sampleUsers = [
      {
        "name": "Laura Long",
        "id": 1,
        "recipesToCook": []
      },
      {
        "name": "Eric Kendrick",
        "id": 2,
        "recipesToCook": []
      },
      {
        "name": "Dana Zack",
        "id": 3,
        "recipesToCook": []
      }
    ];
    sampleRecipe = {
      "id": 600,
      "image": "https://imgs.search.brave.com/Qt3vXLyaEP9ZcX_RC_Vn58VR0d0Y1slPiglu9cCRtT0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwMS5ueXQuY29t/L2ltYWdlcy8yMDE5/LzA4LzEwL2Rpbmlu/Zy9hdy1zcGljeS13/YXRlcm1lbG9uLXNh/bGFkL2F3LXNwaWN5/LXdhdGVybWVsb24t/c2FsYWQtYXJ0aWNs/ZUxhcmdlLmpwZz93/PTEyODAmcT03NQ",
      "ingredients": [
        {
          "id": 3,
          "quantity": {
            "amount": 1,
            "unit": "c"
          }
        },
        {
          "id": 4,
          "quantity": {
            "amount": 1,
            "unit": "c"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Cut up the pineapple and watermelon",
          "number": 1
        },
        {
          "instruction": "Mix the fruit in a large bowl until evenly dispersed.",
          "number": 2
        },
        {
          "instruction": "Enjoy your tropical salad!",
          "number": 3
        }
      ],
      "name": "Tropical fruit Salad",
      "tags": [
        "fruit",
        "salad",
        "tropical",
        "healthy",
        "pineapple",
        "watermelon"
      ]
    };
    function1Return = [
      {
        "id": 500,
        "image": "https://imgs.search.brave.com/mRUfqqTWkkk4qddOmAY9EhRgWCo0Fem7pJrWsa6I7p0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzgwLzU4LzQ4/LzM2MF9GXzgwNTg0/ODc3X2R2SFY0bnFL/eEVQYU50blhpZFpE/amlrRGR0aUNtQUJG/LmpwZw",
        "ingredients": [
          {
            "id": 1,
            "quantity": {
              "amount": 2,
              "unit": "c"
            }
          },
          {
            "id": 2,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          ],
        "instructions": [
          {
            "instruction": "Rinse the strawberries and blackberries.",
            "number": 1
          },
          {
            "instruction": "Add both berries to a large bowl",
            "number": 2
          },
          {
            "instruction": "Mix until evenly dispersed.",
            "number": 3
          },
          {
            "instruction": "Enjoy!",
            "number": 4
          }
        ],
        "name": "Berry Fruit Salad",
        "tags": [
          "fruit",
          "salad",
          "berry",
          "healthy",
          "strawberry",
          "blackberry"
        ]
      },
      {
        "id": 700,
        "image": "",
        "ingredients": [
          {
            "id": 1,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "id": 5,
            "quantity": {
              "amount": 1,
              "unit": "c"
            }
          },
          ],
        "instructions": [
          {
            "instruction": "Scoop vanilla icecream into bowl.",
            "number": 1
          },
          {
            "instruction": "Top with strawberries.",
            "number": 2
          },
          {
            "instruction": "Enjoy!",
            "number": 3
          }
        ],
        "name": "Vanilla Icecream With Strawberries",
        "tags": [
          "icecream",
          "strawberry",
          "vanilla",
          "dessert"
        ]
      },
    ];
    function2Return = [
      {
        "id": 700,
        "image": "",
        "ingredients": [
          {
            "id": 1,
            "quantity": {
              "amount": 0.5,
              "unit": "c"
            }
          },
          {
            "id": 5,
            "quantity": {
              "amount": 1,
              "unit": "c"
            }
          },
          ],
        "instructions": [
          {
            "instruction": "Scoop vanilla icecream into bowl.",
            "number": 1
          },
          {
            "instruction": "Top with strawberries.",
            "number": 2
          },
          {
            "instruction": "Enjoy!",
            "number": 3
          }
        ],
        "name": "Vanilla Icecream With Strawberries",
        "tags": [
          "icecream",
          "strawberry",
          "vanilla",
          "dessert"
        ]
      }
    ];
  });



  //==============================================================================

  // Return a filtered list of recipes based on a tag.
  describe('filterByTag', () => {
    it('Should be a function', () => {
      expect(filterByTag).to.be.a('function');
    });

    it('Should return a filtered list of recipes based on a tag', () => {
      //SETUP:
      const tag = 'strawberry'
      
      // EXECUTION:
      const recipesByTag = filterByTag(sampleRecipes, tag);

      //ASSERTION:
      expect(recipesByTag).to.deep.equal(function1Return)
    });
  });

  //==============================================================================

  // Return a filtered list of recipes based on a recipe name.
  describe('filterByName', () => {
    it('Should be a function', () => {
      expect(filterByName).to.be.a('function');
    });

    it('Should return a filtered list of recipes based on a name', () => {
      //SETUP:
      const name = 'Vanilla Icecream With Strawberries'

      // EXECUTION:
      const recipesByName = filterByName(sampleRecipes, name);

      //ASSERTION:
      expect(recipesByName).to.deep.equal(function2Return)
    });
  });

  //===============================================================
  // Determine the names of ingredients needed for a given recipe
  describe('listRecipeIngredients', () => {
    it('Should be a function', () => {
      expect(listRecipeIngredients).to.be.a('function');
    });

    it('Should determine the names of ingredients needed for a given recipe', () => {
        // SETUP
        
        // EXECUTION
        const ingredients = listRecipeIngredients(sampleRecipe, sampleIngredients);

        // ASSERTION
        expect(ingredients).to.deep.equal(["watermelon", "pineapple"]);
    });
  })

  //===============================================================
  // Calculate the cost of a given recipe’s ingredients
  // describe('', () => {
  //   it('', () => {
  //     expect().to.be.a('function');
  //   });

  //   it('', () => {
  //       // SETUP
  //       // EXECUTION
  //       // ASSERTION
  //   });
  // })

  //===============================================================
  // Return the directions / instructions for a given recipe
  // describe('', () => {
  //   it('', () => {
  //     expect().to.be.a('function');
  //   });

  //   it('', () => {
  //       // SETUP
  //       // EXECUTION
  //       // ASSERTION
  //   });
  // })
});