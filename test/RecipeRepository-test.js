import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from "../src/Recipe";

describe('RecipeRepository', () => {
  let recipeRepo, recipe
  beforeEach(() => {
    recipe = new Recipe(678353, "https://spoonacular.com/recipeImages/678353-556x370.jpg", [{ "instruction": "Season the pork chops with salt and pepper", "number": 1}], "Maple Dijon Apple Cider Grilled Pork Chops", "tags?");
    recipeRepo = new RecipeRepository(recipe);
  });
  it('should be a function', () => {

    expect(RecipeRepository).to.be.a('function');
  });
  it('should be an instances of RecipeRepository' () => {

    expect(recipeRepo).to.be.an.instanceof(RecipeRepository);
  });
  it('should store multiple recipes' () => {

    expect(recipeRepo.recipes).to.be.array();
  });
});
