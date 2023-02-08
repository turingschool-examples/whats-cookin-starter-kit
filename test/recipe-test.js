import { expect } from 'chai';
import Recipe from '../src/classes/recipe';

describe('Recipe', () => {
    let recipe;
    let ingredient1;
    let ingredient2;
    let ingredientDataSet;
    let recipeDataSet;
    let recipeDetails;

  beforeEach(() => {
      ingredient1 =     {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      }
      ingredient2 =     {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      }
      ingredientDataSet = [ingredient1, ingredient2]
      recipeDetails = {"id": 595736,
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
        }], "instructions": [
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
        ]}
        recipe = new Recipe(recipeDetails, ingredientDataSet)
    })
    it('should be a function', () => {
        expect(Recipe).to.be.a('function');
    })
    it('should be an instance of recipe', () => {
        expect(recipe).to.be.an.instanceof(Recipe);
    })
    
})