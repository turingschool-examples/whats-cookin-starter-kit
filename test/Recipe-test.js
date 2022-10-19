import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import { sampleIngredientsData, sampleUsersData, sampleRecipeData } from '../src/data/sample-data';

describe('Recipe', () => {
  sampleIngredientsData
  sampleUsersData
  sampleRecipeData
  let recipe


  beforeEach(() => {
    recipe = new Recipe({"id": 595736,"image": "https://spoonacular.com/recipeImages/595736-556x370.jpg","ingredients": [{"id": 20081,"quantity": {"amount": 1.5,"unit": "c"}},{"id": 18372, "quantity": {"amount": 0.5,"unit": "tsp"} }, {   "id": 1123,  "quantity": {    "amount": 1,    "unit": "large"  }},{"id": 19335,"quantity": {"amount": 0.5,"unit": "c"}},],"instructions": [{"instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.","number": 1},{"instruction": "Add egg and vanilla and mix until combined.","number": 2}],"name": "Loaded Chocolate Chip Pudding Cookie Cups","tags": ["antipasti","starter","snack","appetizer","antipasto","hor d'oeuvre"]});
    sampleIngredientsData;
    sampleUsersData;
    sampleRecipeData;
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });
  it('should hold property of id', () => {
    expect(recipe.id).to.equal(595736)
  });
  it("should hold property of image", () => {
    expect(recipe.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg")
  });
  it("should hold property of ingredients", () => {
    expect(recipe.ingredients).to.deep.equal([
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
    ])
  });
  it("should hold property of instructions", () => {
    expect(recipe.instructions).to.deep.equal([
      {
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
        "number": 1
      },
      {
        "instruction": "Add egg and vanilla and mix until combined.",
        "number": 2
      }
    ])
  });
  it("should hold property of name", () => {
    expect(recipe.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups")
  });
  it("should hold property of tags", () => {
    expect(recipe.tags).to.deep.equal([
      "antipasti",
      "starter",
      "snack",
      "appetizer",
      "antipasto",
      "hor d'oeuvre"
    ])
  });
  it("should hold property of ingredient list", () => {
    expect(recipe.ingredientsList).to.deep.equal([])
  });
  it("determine the names of ingredients needed", () => {
    expect(recipe.determineIngredients(sampleIngredientsData)).to.deep.equal(['wheat flour', 'bicarbonate of soda', 'eggs', 'sucrose'])
  });
  it("should hold property of total cost", () => {
    expect(recipe.totalCost).to.equal(undefined)
  });
  it('should calculate the cost of its ingredients', () => {
    expect(recipe.calculateCost(sampleIngredientsData)).to.equal(14.27)
  });
  it('should return its instructions', () => {
    expect(recipe.getInstructions()).to.deep.equal(["1. In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.", "2. Add egg and vanilla and mix until combined."])
  });
});

