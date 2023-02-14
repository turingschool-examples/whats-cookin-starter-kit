import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import mockdata from '../src/data/mockdata';

describe('Recipe', () => {
  let recipe1;
  let recipe2;

  beforeEach(() => {
    recipe1 = new Recipe(mockdata.recipes[0], mockdata.ingredients);
    recipe2 = new Recipe(mockdata.recipes[1], mockdata.ingredients);
  })
        
  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('should have an id, image, ingredients, instructions, name, and tags', () => {
    expect(recipe1.id).to.equal(595736);
    expect(recipe1.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
    expect(recipe1.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
    expect(recipe1.ingredients[0].id).to.equal(20081);
    expect(recipe1.tags[1]).to.equal('starter');
});

  it('should be able to have any id, image, ingredients, instructions, name, and tags', () => {
    expect(recipe2.id).to.equal(678353);
    expect(recipe2.name).to.equal('Maple Dijon Apple Cider Grilled Pork Chops');
    expect(recipe2.image).to.equal("https://spoonacular.com/recipeImages/678353-556x370.jpg");
    expect(recipe2.ingredients[0].id).to.equal(1009016);
    expect(recipe2.tags[1]).to.equal('main course');
});

  it('should have a method to find the names of the ingredients in the recipe', () => {
    const cookieIngredients = recipe1.findIngredientNames();
    expect(cookieIngredients[0]).to.deep.equal("wheat flour");
  });

  it('should be able to calculate the total cost of the recipe', () => {
    expect(recipe1.calculateCost()).to.equal('177.76');
  });

  it('should have a method that returns the instructions from the recipe', () => {
    const porkChopInstructions = recipe2.returnInstructions();
    expect(recipe2.returnInstructions()).to.deep.equal([{"instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!","number": 1}]);
  });
})

