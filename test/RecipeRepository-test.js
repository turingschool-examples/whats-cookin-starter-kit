import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import recipeData from '../src/data/recipes-test';

describe('RecipeRepository', () => {
  let recipeRepository
  let data = recipeData;
  let newRecipe;
  let tagResults;
  let nameResults;
  let recipeRepository2;

    beforeEach( () => {
          recipeRepository = new RecipeRepository(data);
          recipeRepository2 = new RecipeRepository();
          newRecipe = new Recipe(data)
          tagResults = recipeRepository.listRecipeTags("testTag");
          nameResults = recipeRepository.listRecipeNames("Loaded Chocolate Chip Pudding Cookie Cups");

    })

  it('should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be able to take in recipe data', () => {
    expect(recipeRepository.recipeData[0].id).to.equal(595736)
    expect(recipeRepository.recipeData[1].image).to.equal("https://spoonacular.com/recipeImages/678353-556x370.jpg")
    expect(recipeRepository.recipeData[2].ingredients[0]).to.deep.equal({ id: 1002030, quantity: { amount: 4, unit: 'teaspoons' } })
    expect(recipeRepository.recipeData[3].instructions[0]).to.deep.equal({ instruction: 'Watch how to make this recipe.', number: 1 })
    expect(recipeRepository.recipeData[4].name).to.deep.equal("Mock Udi’s Gluten Free Whole Grain Bread")
  })

  it('should have a filtered list of recipes based on a tag', () => {
    expect(tagResults[0].id).to.deep.equal(412309);
  })

  it('should be able to filter recipes by name regardless of caps usage', () => {
    let nameResultsWithCapsAsArg = recipeRepository.listRecipeNames("LOADED CHOCOLATE CHIP PUDDING COOKIE CUPS");
    expect(nameResultsWithCapsAsArg[0].name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  })


  it('should have a filtered list of recipes based on a name', () => {
    expect(nameResults[0].name).to.deep.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  })

  it('should be able to filter recipes by tag regardless of caps usage', () => {
    let tagResultsWithCapsAsArg = recipeRepository.listRecipeTags("STARTER");
    expect(tagResultsWithCapsAsArg[0].tags).to.include("starter");
  })
})
