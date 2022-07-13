import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';


describe('Recipe', () => {
  let recipeData;
  let newRecipe;

    beforeEach( () => {
        recipeData =
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
          };

          newRecipe = new Recipe(recipeData)
    })

    it('should be a function', () => {
      expect(Recipe).to.be.a('function');

    })

    it('should be an instance of Recipe', () => {
      expect(newRecipe).to.be.an.instanceOf(Recipe);
    })

    it('should be able to store id of a recipe', () => {
        expect(newRecipe.id).to.equal(595736)
    })

    it('should be able to store an image of a recipe', () => {
        expect(newRecipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg")
    })

    it('should be able to store a ingredients of a recipe', () => {

        expect(newRecipe.ingredients.length).to.equal(11);

      });

    it('should be able to store instructions of a recipe', () => {
        expect(newRecipe.instructions.length).to.equal(6);

    })

    it('should be able to store a name of a recipe', () => {
        expect(newRecipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups')

    })

    it('should be able to store a tag of a recipe', () => {
        expect(newRecipe.tags.length).to.equal(6);

    })

    it('should be able to get the names of all ingredients in a recipe', () => {
        let ingredientNames = newRecipe.returnIngredientNames()
        expect(ingredientNames[0]).to.equal('wheat flour');

    })

    it.skip('should be able to get the cost of the ingredients of a recipe', () => {
        let ingredientCosts = newRecipe.returnIngredientCosts()
        expect(ingredientCosts).to.equal(176.36)

    })

    it('should be able to return its instructions', () => {
        let recipeInstructions = newRecipe.returnRecipeInstructions();
        let expectedInstructions = `
      1) In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.
      2) Add egg and vanilla and mix until combined.
      3) Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.
      4) Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.
      5) Bake for 9 to 10 minutes, or until you see the edges start to brown.
      6) Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.`;

        expect(recipeInstructions).to.equal(expectedInstructions)
    })

});
