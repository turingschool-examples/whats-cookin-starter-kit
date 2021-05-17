import { expect } from 'chai';
import Recipe = from "../src/Recipe";
import Ingredient from '../src/classes/Ingredient';

describe("Recipe", () => {
  let ingredient, recipe
  beforeEach(() => {
    const ingredient = new Ingredient(1123, "eggs", 472);
    const recipe = new Recipe(678353, "https://spoonacular.com/recipeImages/678353-556x370.jpg", [{ "instruction": "Season the pork chops with salt and pepper", "number": 1}???], "Maple Dijon Apple Cider Grilled Pork Chops", "tags?");
    });
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
