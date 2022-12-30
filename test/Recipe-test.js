import { expect } from "chai";
import Ingredient from "../src/classes/Ingredient";
import Recipe from "../src/classes/Recipe";

describe("Recipe", () => {
    let recipe1;
    // let recipe1Data;
    let recipe1Data = {
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

    let ingredientObjects = [{
        "id": 2050,
        "name": "vanilla",
        "estimatedCostInCents": 926
      }, 
      {
        "id": 1123,
        "name": "eggs",
        "estimatedCostInCents": 472
      },
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
    }];

    beforeEach(function() {
        recipe1 = new Recipe(recipe1Data);
    });

    it("Should be a function", () => {
        expect(Recipe).to.be.a("function");
    });

    it("Should instantiate our good friend Recipe", () => {
        expect(recipe1).to.be.an.instanceOf(Recipe);
    });

    it("Should have a property to store a recipe's data passed in as an argument", () => {
        expect(recipe1Data.id).to.equal(595736);
    });
        
    it("Should have a property to store a recipe id", () => {
        expect(recipe1.id).to.equal(595736);
    });

    it("Should have a property to store the recipe image", () => {
        expect(recipe1.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg");
    });

    it("Should have a property to store an ingredients object array", () => {
        expect(recipe1.ingredients).to.have.deep.members([
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
        ]);
        //or instantiate an ingredients class?
    });

    it("Should have a property to store the recipe instructions", () => {
        expect(recipe1.instructions).to.have.deep.members([
            {
                "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
                "number": 1
            },
            {
                "instruction": "Add egg and vanilla and mix until combined.",
                "number": 2
            },
        ]);
    });

    it("Should have a property to store the recipe name", () => {
        expect(recipe1.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
    });

    it("Should have a property to store the recipe tags array", () => {
        expect(recipe1.tags).to.have.deep.members([
            "antipasti",
            "starter",
            "snack",
            "appetizer",
            "antipasto",
            "hor d'oeuvre"
        ]);
    });

    it("Should have a method to get ingredient ids from ingredients property and return the ingredient objects from the ingredient data", () => {
        let ingredientObjects2 = [{
        "id": 2050,
        "name": "vanilla",
        "estimatedCostInCents": 926
      }, 
      { 
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      }];
        let method0 = recipe1.findIngredientObjects(ingredientObjects);
        console.log("method0", method0)
        expect(method0).to.have.deep.members(ingredientObjects2);
        //need sad paths, sort ids and no dups
        //I shouldn't be mutating the data.
    })

    it("Should have a method to determine the names of ingredients needed", () => {
        let method1 = recipe1.getIngredientNames();
        console.log("method 1:", method1);
        expect(method1).to.have.deep.members(["vanilla", "wheat flour"]);
    });

    it.skip("Should have a method to determine the cost of those ingredients", () => {
        let method2 = recipe1.getIngredientsTotalCost();
    });

    it("Should have a method to get the recipe instructions", () => {
        let method3 = recipe1.getRecipeInstructions();
        expect(method3).to.be.equal(recipe1Data.instructions);
    });
});