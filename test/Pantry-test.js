import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import User from '../src/classes/User'




describe('Pantry', () => {

      let usersData;
      let user;
      let usersData2;
      let user2;
      let recipeData;
      let pantry;
      let pantry2;
      let ingredientsData;

    beforeEach( () => {
    usersData =
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
        }
      ]
    }

    usersData2 =
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
    }
    ]
    }

    recipeData = [
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
    ],
    "instructions": [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
    ],
    "name": "Dirty Steve's Original Wing Sauce",
    "tags": [
      "sauce"
    ]
    },

    {
    "id": 593432,
    "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
    "ingredients": [
      {
        "id": 20081,
        "quantity": {
          "amount": 1.5,
          "unit": "c"
        }
      },
    ],
    "instructions": [
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
    ],
    "name": "Dirty Pete's Original Wing Powder",
    "tags": [
      "sauce"
    ]
    }
    ]

    ingredientsData = [
    {
      "id": 11297,
      "name": "flat leaf parsley leaves",
      "estimatedCostInCents": 1030
    },
    {
      "id": 1082047,
      "name": "kosher salt",
      "estimatedCostInCents": 972
    },
    {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 6150,
      "name": "bar b que sauce",
      "estimatedCostInCents": 966
    },
    {
      "id": 1032009,
      "name": "dried red chili",
      "estimatedCostInCents": 1015
    },
    ]

    user = new User(usersData);
    user2 = new User(usersData2);
    pantry = new Pantry(user);
    pantry2 = new Pantry(user2);
    });

    it('should be a function', function() {
        expect(Pantry).to.be.a('function');
      })

      it.skip('should be able to tell the user they have enough ingredients for a given recipe', function() {
      // console.log(user.pantry)
      // user.addRecipeToCook(recipeData[0]);
      // console.log(user.recipesToCook[0].ingredients)
      // expect(user.checkIngredients()).to.equal('You can cook it!')
      // Check recipe to see which ingeredients are needed
      // We want to check the users pantry for current ingeredients
      // If the ingredients that are in the pantry are greater than equal to the 
      // ingredients needed in the recipe, then they can cook the meal - let user know
        expect;
      })

      it.skip('should be able to tell the user they do not have enough ingredients for a given recipe', function() {
        expect;
      })

      it.skip('should be able to determine the amount of missing ingredients still needed to cook a given recipe', function() {
        expect;
      })

      it('should be able to show a user what ingredients and amounts exist inside their pantry', function() {
        // console.log(pantry.returnIngredientNamesAndAmounts())
        const values = "  \nflat leaf parsley leaves: 4,\n  kosher salt: 10,\n  wheat flour: 5"
        expect(pantry.returnIngredientNamesAndAmounts()).to.equal(values);
      })

      it.skip('should allow user to check the list of recipes to cook to see if there are enough ingredients', function() {
        expect;
      })

      it.skip('should be able to tell the user what ingredients are still needed if there are not enough in the pantry', function() {
        expect;
      })

      it.skip('should', function() {
        expect;
      })

      it.skip('should not allow a user to cook a recipe if there are not sufficient ingredients', function() {
        expect;
      })

      it.skip('should not allow a user to cook a recipe if there are not sufficient ingredients', function() {
        expect;
      })

      it.skip('should remove used ingredients from the pantry after cooking a recipe', function() {
        expect;
      })

      it.skip('should allow a user to add more ingredients', function() {
        expect;
      })
})


// Methods
// Determine whether a user’s pantry has enough ingredients to cook a given recipe.
// Determine the amount of missing ingredients still needed to cook a given recipe, based on what’s in the user’s pantry.

// User Stories
// As a user, I should be able to view what ingredients exist inside of my pantry.
// As a user, I should be able to check my list of recipes to cook and see if my pantry has enough ingredients to cook a recipe.
// As a user, I should be told what ingredients are still needed if I don’t have enough ingredients in my pantry to cook the recipe.
// As a user, I should not be able to cook a recipe if I don’t have the ingredients required.
// As a user, when I cook a recipe, those ingredients should be removed from my pantry.
// As a user, I should be able to add more ingredients to my pantry.