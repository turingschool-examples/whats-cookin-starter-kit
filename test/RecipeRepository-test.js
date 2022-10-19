import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import { sampleIngredientsData, sampleUsersData, sampleRecipeData } from '../src/data/sample-data';

describe('RecipeRepo', () => {
  sampleIngredientsData
  sampleUsersData
  sampleRecipeData
  let recipe1, recipe2, recipeRepository

  beforeEach(() => {
    recipe1 = new Recipe({"id": 595736, "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg","ingredients": [{"id": 20081,"quantity": {"amount": 1.5,"unit": "c"}},{"id": 18372, "quantity": {"amount": 0.5,"unit": "tsp"} }, {   "id": 1123,  "quantity": {    "amount": 1,    "unit": "large"  }},{"id": 19335,"quantity": {"amount": 0.5,"unit": "c"}},],"instructions": [{"instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.","number": 1},{"instruction": "Add egg and vanilla and mix until combined.","number": 2}],"name": "Loaded Chocolate Chip Pudding Cookie Cups","tags": ["antipasti","starter","snack","appetizer","antipasto","hor d'oeuvre"]});
    recipe2 = new Recipe({"id": 678353, "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg","ingredients": [{"id": 1009016,"quantity": {"amount": 1.5,"unit": "cups"}},{"id": 9003,"quantity": {"amount": 2,"unit": ""}},{"id": 20027,"quantity": {"amount": 1,"unit": "tablespoon"}},{"id": 1002046,"quantity": {"amount": 1,"unit": "tablespoon"}},{"id": 11215,"quantity": {"amount": 1,"unit": "clove"}},{"id": 1012046,"quantity": {"amount": 1,"unit": "tablespoon"}},{"id": 19911,"quantity": {"amount": 0.25,"unit": "cup"}},{"id": 16112,"quantity": {"amount": 1,"unit": "tablespoon"}},{"id": 10010062,"quantity": {"amount": 24,"unit": "ounce"}},{"id": 1102047,"quantity": {"amount": 4,"unit": "servings"}},{"id": 16124,"quantity": {"amount": 1,"unit": "tablespoon"}},{"id": 1016168,"quantity": {"amount": 1,"unit": "tablespoon"}}],"instructions": [{"instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!","number": 1}],"name": "Maple Dijon Apple Cider Grilled Pork Chops","tags": ["lunch","main course","main dish","dinner"]});
    recipeRepository = new RecipeRepository(sampleRecipeData)
    sampleIngredientsData;
    sampleUsersData;
    sampleRecipeData;
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('Should have a property of recipes which holds an array of Recipe instances', () => {
    expect(recipeRepository.recipes).to.deep.equal([recipe1, recipe2]);
  });
  it('Should create recipe instances.', () => {
    expect(recipeRepository.createRecipes(sampleRecipeData)).to.deep.equal([recipe1, recipe2])
  });
  it('Should filter a list of recipes based on a tag.', () => {
    expect(recipeRepository.filterTag("lunch")).to.deep.equal([recipe2]);
    expect(recipeRepository.filterTag("hor d'oeuvre")).to.deep.equal([recipe1]);
  });
  it('Should filter list of recipes based on its name.', () => {
    expect(recipeRepository.filterName("Maple Dijon Apple Cider Grilled Pork Chops")).to.deep.equal([recipe2]);
    expect(recipeRepository.filterName("Loaded Chocolate Chip Pudding Cookie Cups")).to.deep.equal([recipe1]);
  });
});

