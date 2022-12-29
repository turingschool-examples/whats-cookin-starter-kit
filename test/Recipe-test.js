import { expect } from "chai";
import Ingredient from "../src/classes/Ingredient";
import { Recipe } from "../src/classes/Recipe";

describe("Recipe", () => {
    let recipe1;
    let recipe1Data;
    beforeEach(function() {
        recipe1 = new Recipe(recipe1Data);
        recipe1Data = {
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
    });

    it("Should be a function", () => {
        expect(Recipe).to.be.a('function');
      });

    it("Should instantiate our good friend RecipesContainer", () => {
        expect(recipe1).to.be.an.instanceOf(Recipe);
      });

    it("Should have a property to store a recipe id")

    it("Should have a property to store the recipe image")

    it("Should have a property to store an ingredients object array")
    //or instantiate an ingredients class?
    it("Should have a property to store the recipe instructions")

    it("Should have a property to store the recipe name")

    it("Should have a property to store the recipe tags array")

    it("Should have a method to determine the names of ingredients needed")
        let method1;
    it("Should have a method to determine the cost of those ingredients")
        let method2;
    it("Should have a method to get the recipe directions")
        let method3;
})