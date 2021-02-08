const ingredientsData = [
  {
    "id": 11,
    "name": "salt",
    "estimatedCostInCents": 343
  },
  {
    "id": 22,
    "name": "sugar",
    "estimatedCostInCents": 293
  },
  {
    "id": 33,
    "name": "butter",
    "estimatedCostInCents": 615
  },
  {
    "id": 44,
    "name": "green beans",
    "estimatedCostInCents": 535
  },
  {
    "id": 55,
    "name": "garlic",
    "estimatedCostInCents": 251
  },
  {
    "id": 66,
    "name": "milk",
    "estimatedCostInCents": 771
  },
  {
    "id": 77,
    "name": "cheddar cheese",
    "estimatedCostInCents": 603
  },
  {
    "id": 88,
    "name": "olives",
    "estimatedCostInCents": 1003
  },
  {
    "id": 99,
    "name": "italian herbs",
    "estimatedCostInCents": 309
  },
  {
    "id": 1010,
    "name": "cumin",
    "estimatedCostInCents": 972
  },
];

const recipeData = [ 
  {
    "id": 111,
    "image": "https://imageForRecipeOne",
    "ingredients": [
      {
        "id": 11,        
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 88,
        "quantity": {
          "amount": 3,
          "unit": "cups"
        }
      },
      {
        "id": 22,
        "quantity": {
          "amount": 1,
          "unit": "tbsp"
        }
      },
      {
        "id": 1010,
        "quantity": {
          "amount": 8,
          "unit": ""
        }
      }
    ],
    "instructions": [
      {
        "instruction": "Preheat oven to 400 degrees",
        "number": 1
      },
      {
        "instruction": "Add all the ingredients together in a large mixing bowl",
        "number": 2
      },
      {
        "instruction": "pour ingredients into a 9 X 11 oven safe dish and bake for 45-50 minutes",
        "number": 3
      },
      {
        "instruction": "Enjoy!",
        "number": 4
      }
    ],
    "name": "Random dish 1",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner",
      "delicous"
    ]
  },
  {
    "id": 222,
    "image": "https://imageForRecipeTwo",
    "ingredients": [
      {
        "id": 33,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 55,
        "quantity": {
          "amount": 2,
          "unit": "tbsp"
        }
      },
      {
        "id": 77,
        "quantity": {
          "amount": 1,
          "unit": "cup"
        }
      },
      {
        "id": 88,
        "quantity": {
          "amount": 3,
          "unit": "large"
        }
      },
      {
        "id": 11,
        "quantity": {
          "amount": 3,
          "unit": "tbsp"
        }
      },
      {
        "id": 66,
        "quantity": {
          "amount": 1,
          "unit": "large"
        }
      }
    ],
    "instructions": [
      {
        "instruction": "This is step 1",
        "number": 1
      },
      {
        "instruction": "This is step 2",
        "number": 2
      },
      {
        "instruction": "This is step 3",
        "number": 3
      },
      {
        "instruction": "This is step 4",
        "number": 4
      }
    ],
    "name": "Random dish 2",
    "tags": [
      "lunch",
      "main course",
      "main dish",
      "dinner",
      "party platter"
    ]
  }
];

const usersData = [
  {
    "name": "Cameron Mackintosh",
    "id": 1,
    "pantry": [
      {
        "ingredient": 11,
        "amount": 4
      },
      {
        "ingredient": 1010,
        "amount": 4
      },
      {
        "ingredient": 55,
        "amount": 10
      },
      {
        "ingredient": 22,
        "amount": 5
      },
      {
        "ingredient": 99,
        "amount": 5
      },
      {
        "ingredient": 33,
        "amount": 6
      }
    ]
  },
  {
    "name": "Steven Mancine",
    "id": 2,
    "pantry": [
      {
        "ingredient": 666,
        "amount": 3
      },
      {
        "ingredient": 111,
        "amount": 7
      },
      {
        "ingredient": 88,
        "amount": 8
      },
      {
        "ingredient": 77,
        "amount": 6
      },
      {
        "ingredient": 33,
        "amount": 10
      }
    ]
  }
];

module.exports = {usersData, 
  recipeData, 
  ingredientsData}