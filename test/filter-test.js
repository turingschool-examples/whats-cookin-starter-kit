import { expect } from 'chai';
import { filterRecipes } from '../src/recipes.js'
import { sampleRecipeData } from '../src/data/sample-recipes.js';

describe ('filter', function() {
  
  it('should return an array of filtered recipes by a tag', function() {
    let filteredRecipes = filterRecipes(sampleRecipeData, 'starter')
    expect(filteredRecipes).to.be.deep.equal(
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
        }
      ]
      )
  })
  
  it('should be able return an array of filtered recipes by a different tag', function() {
    let filteredRecipes = filterRecipes(sampleRecipeData, 'sauce')
    expect(filteredRecipes).to.be.deep.equal(
      [
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
            "sauce"
          ]
        }
      ])
  })

  it('should be able return an array of filtered recipes by a name', function() {
    let filteredRecipes = filterRecipes(sampleRecipeData, "Dirty Steve's Original Wing Sauce")
    expect(filteredRecipes).to.be.deep.equal(
      [
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
            "sauce"
          ]
        }
      ]
    )
  })
  
  it('should let the user know if there were no results found', function() {
    let filteredRecipes = filterRecipes(sampleRecipeData, 'Plastic Garbage')
    expect(filteredRecipes).to.be.equal('Sorry, no matching results!')
  })

})