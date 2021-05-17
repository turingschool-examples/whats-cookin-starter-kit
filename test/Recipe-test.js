const chai = require("chai");
const expect = chai.expect;

const Ingredient = require("../src/Ingredient");
const Recipe = require("../src/Recipe");

describe("Recipe", () => {
  let ingredient, recipe
  beforeEach(() => {
    const ingredient = new Ingredient(1123, "eggs", 472);
    const recipe = new Recipe(678353, "https://spoonacular.com/recipeImages/678353-556x370.jpg", "[{ "instruction": "Season the pork chops with salt and pepper", "number": 1}]???",  recipe, "Maple Dijon Apple Cider Grilled Pork Chops", "tags?");
    });
    // Probably we need to create one more class for instructions, with two properies - instruction(string) and number(num); because in other way is not posible to pass an aurgmuent as an array and with objectss as elements.
    // Also for tags, do we need to create another array.
    // If we do not pass it as an arguments how are we gonna give the values ? From where ?
    it('should be a function', () => {

      expect(Recipe).to.be.function());
    });
  it('should be an instance of Recipe', () => {

    expect(recipe).to.be.an.instanceof(Recipe);
  });
  it('should be stored with an id number', () => {

    expect(recipe.id).to.be.number());
  });
  it('should store an image of the recipe', () => {

    expect(recipe.image).to.be.string());
  });
  it('should store the name of the recipe', () => {

    expect(recipe.name).to.be.string());
  });
  it('should store related tags from the recipe', () => {

    expect(recipe.tags).to.be.array());
  });
  it('should store instructions to prepare the recipe', () => {

    expect(recipe.instructions).to.be.array());
  });
  it('should store all the required ingredients for the recipe', () => {

    expect(recipe.ingredients).to.be.array());
  });
});
