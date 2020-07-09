const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Recipe = require('../src/Recipe')
const usersData = require('../data/users')
const recipeData = require('../data/recipes')

describe('User', function() {
  let user1, user2, recipe1, recipe2;
  beforeEach(function() {
    user1 = new User(usersData[0]);
    user2 = new User(usersData[1]);
    const recipe1Data = {
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
    };
    const recipe2Data = {
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
    };
    // recipe1 = new Recipe(recipeData[0])
    recipe1 = new Recipe(recipe1Data.id, recipe1Data.image, recipe1Data.ingredients, recipe1Data.instructions, recipe1Data.name, recipe1Data.tags);
    // recipe2 = new Recipe(recipeData[1])
    recipe2 = new Recipe(recipe2Data.id, recipe2Data.image, recipe2Data.ingredients, recipe2Data.instructions, recipe2Data.name, recipe2Data.tags);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function')
  });

  it('should be an instance of User', function() {
    expect(user1).to.be.an.instanceof(User)
  });

  it('should have a name', function() {
    expect(user1.name).to.equal("Saige O'Kon")
  });

  it('should be able to have a different name', function() {
    expect(user2.name).to.equal("Ephraim Goyette")
  });

  it('should have a user ID', function() {
    expect(user1.id).to.equal(1)
  });

  it('should be able to have a different user ID', function() {
    expect(user2.id).to.equal(2)
  })

  it('should have items in its pantry', function() {
    expect(user1.pantry.length).to.equal(36)
  });

  it('should have different items in a different users pantry', function() {
    expect(user2.pantry.length).to.equal(58)
  });

  it('should start with no favorite recipes', function() {
    expect(user1.favoriteRecipes).to.deep.equal([])
  });

  it('should start with no recipes to cook', function() {
    expect(user1.recipesToCook).to.deep.equal([])
  });

  it('should start with an empty grocery list', function() {
    expect(user1.groceryList).to.deep.equal([])
  });

  it('should be able to add recipes to favorites list', function() {
    user1.toggleFavoriteRecipe(recipe1);

    expect(user1.favoriteRecipes.length).to.deep.equal(1)
  });

  it('if a recipe already exists within favorites array, recipe should be removed', function() {
    user1.toggleFavoriteRecipe(recipe1);
    user1.toggleFavoriteRecipe(recipe1);
    user1.toggleFavoriteRecipe(recipe2);

    expect(user1.favoriteRecipes.length).to.deep.equal(1)
  });

  it('should be able to remove prexisting recipe from favorites list', function() {
    user1.toggleFavoriteRecipe(recipe1);
    user1.toggleFavoriteRecipe(recipe1);
    user1.toggleFavoriteRecipe(recipe2);

    expect(user1.favoriteRecipes[0].id).to.equal(678353)
  });

  it('should be able to decide to cook a recipe that week', function() {
    user1.toggleRecipeToCook(recipe1)

    expect(user1.recipesToCook.length).to.deep.equal(1)
  });

  it('should be able to remove prexisting recipe from recipe to cook list', function() {
    user1.toggleRecipeToCook(recipe1)
    user1.toggleRecipeToCook(recipe2)
    user1.toggleRecipeToCook(recipe1)

    expect(user1.recipesToCook[0].id).to.equal(678353)
  });

  it('should be able to save recipes', function() {
    expect(user1.getSavedRecipes()).to.deep.equal([])

    user1.toggleFavoriteRecipe(recipe1)
    user1.toggleFavoriteRecipe(recipe2)
    user1.getSavedRecipes(recipe1)

    expect(user1.getSavedRecipes()).to.deep.equal([recipe1, recipe2])
  });

  it('should be able to search saved recipes by name or by ingredients', function() {
    user1.toggleFavoriteRecipe(recipe1)
    user1.toggleFavoriteRecipe(recipe2)
    // user1.searchRecipeByNameOrIng("loaded")

    expect(user1.searchRecipeByNameOrIng("loaded")).to.deep.equal([recipe1])
    expect(user1.searchRecipeByNameOrIng("LoAdEd")).to.deep.equal([recipe1])

    expect(user1.searchRecipeByNameOrIng("wheat")).to.deep.equal([recipe1])
    expect(user1.searchRecipeByNameOrIng("WhEaT")).to.deep.equal([recipe1])

    expect(user1.searchRecipeByNameOrIng("maple")).to.deep.equal([recipe2])
    expect(user1.searchRecipeByNameOrIng("MaPlE")).to.deep.equal([recipe2])

  });
});
