const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const User = require('../src/User');

describe('User', () => {
	let ingredients, user, recipe1, recipe2, recipe3;
  beforeEach(() => {
    ingredients = [
      {
        "id": 11,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 22,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      },
      {
        "id": 1123,
        "name": "eggs",
        "estimatedCostInCents": 472
      },
      {
        "id": 44,
        "name": "sucrose",
        "estimatedCostInCents": 902
      },
      {
        "id": 55,
        "name": "instant vanilla pudding",
        "estimatedCostInCents": 660
      },
      {
        "id": 66,
        "name": "brown sugar",
        "estimatedCostInCents": 559
      },
      {
        "id": 77,
        "name": "salt",
        "estimatedCostInCents": 280
      },
      {
        "id": 88,
        "name": "fine sea salt",
        "estimatedCostInCents": 528
      },
      {
        "id": 99,
        "name": "semi sweet chips",
        "estimatedCostInCents": 253
      },
      {
        "id": 00,
        "name": "unsalted butter",
        "estimatedCostInCents": 617
      },
      {
        "estimatedCostInCents": 926
      }
    ];
    user = new User(
      {
        "name": "Nicole",
        "id": 1,
        "pantry": [
          {
            "ingredient": 11,
            "amount": 4
          },
          {
            "ingredient": 00,
            "amount": 4
          },
          {
            "ingredient": 1123,
            "amount": 10
          },
          {
            "ingredient": 44,
            "amount": 2
          },
          {
            "ingredient": 55,
            "amount": 2
          }
        ]
      }, ingredients);
		recipe1 = new Recipe({
      "id": 1111,
      "image": "image",
      "ingredients": [
        {
          "id": 11,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 22,
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
          "id": 44,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 55,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Do the thing",
          "number": 1
        },
        {
          "instruction": "Then another thing",
          "number": 2
        },
        {
          "instruction": "Lastly, the thing",
          "number": 3
        },
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "lunch",
        "sauce",
        "main dish"
      ]
    }, ingredients);
		recipe2 = new Recipe({
      "id": 2222,
      "image": "image",
      "ingredients": [
        {
          "id": 66,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 77,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 88,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 99,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "COOK STUFF",
          "number": 1
        },
        {
          "instruction": "cook some more stuff",
          "number": 2
        }
      ],
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    }, ingredients);
		recipe3 = new Recipe({
      "id": 3333,
      "image": "image",
      "ingredients": [
        {
          "id": 00,
          "quantity": {
            "amount": 5,
            "unit": "teaspoons"
          }
        },
        {
          "id": 66,
          "quantity": {
            "amount": 8,
            "unit": "tablespoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Do the thing",
          "number": 1
        }
      ],
      "name": "Dirty Steve's Original Wing Sauce",
      "tags": [
        "sauce"
      ]
    }, ingredients);
	});
  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be able to favorite a recipe', () => {
		user.addFavoriteRecipe(recipe1);

		expect(user.favoriteRecipes).to.deep.equal([recipe1]);
  });

  it('Should be able to remove a favorite recipe', () => {
    user.addFavoriteRecipe(recipe1);
    user.removeFavoriteRecipe(recipe1);

    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('Should not add a duplicate favorite recipe', () => {
    user.addFavoriteRecipe(recipe1);    
    user.addFavoriteRecipe(recipe1);

    expect(user.favoriteRecipes).to.deep.equal([recipe1]);  
  });

  it('Should be able to add a recipe to cook', () => {
    user.addRecipeToCook(recipe1);

    expect(user.recipesToCook).to.deep.equal([recipe1]);
  });

  it('Should be able to remove a recipe to cook', () => {
    user.addRecipeToCook(recipe1);
    user.removeRecipeToCook(recipe1);

    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('Should not add a duplicate recipe to cook', () => {
    user.addRecipeToCook(recipe1);    
    user.addRecipeToCook(recipe1);

    expect(user.recipesToCook).to.deep.equal([recipe1]);  
	});
	
	it('Should be able to filter favorite recipes by tag', () => {
		user.addFavoriteRecipe(recipe1);
		user.addFavoriteRecipe(recipe2);
		user.addFavoriteRecipe(recipe3);

		expect(user.filterFavoriteRecipesByTag('sauce')).to.deep.equal([recipe1, recipe3]);
	});

	it('Should return no results if tag not found in favorite recipes', () => {
		expect(user.filterFavoriteRecipesByTag('antipasto')).to.deep.equal([]);
	});

	it('Should be able to filter recipes to cook by tag', () => {
		user.addRecipeToCook(recipe1);
		user.addRecipeToCook(recipe2);
		user.addRecipeToCook(recipe3);

		expect(user.filterRecipesToCookByTag('sauce')).to.deep.equal([recipe1, recipe3]);
	});
  
  it('Should be able to filter favorite recipes by name, not case sensitive', () => {
		user.addFavoriteRecipe(recipe1);
		user.addFavoriteRecipe(recipe2);
    user.addFavoriteRecipe(recipe3);

		expect(user.filterFavoriteRecipesByName('coOKie')).to.deep.equal([recipe1]);
  });
  
  it('Should be able to filter recipes to cook by name, not case sensitive', () => {
		user.addRecipeToCook(recipe1);
		user.addRecipeToCook(recipe2);
    user.addRecipeToCook(recipe3);

		expect(user.filterRecipesToCookByName('coOKie')).to.deep.equal([recipe1]);
  });
  
  it('Should be able to filter favorite recipes by ingredient', () => {
		user.addFavoriteRecipe(recipe1);
		user.addFavoriteRecipe(recipe2);
    user.addFavoriteRecipe(recipe3);

		expect(user.filterFavoriteRecipesByIngredient('eggs')).to.deep.equal([recipe1]);
  });

  it('Should be able to filter recipes to cook by ingredient', () => {
		user.addRecipeToCook(recipe1);
		user.addRecipeToCook(recipe2);
    user.addRecipeToCook(recipe3);

		expect(user.filterRecipesToCookByIngredient('eggs')).to.deep.equal([recipe1]);
  });

});
