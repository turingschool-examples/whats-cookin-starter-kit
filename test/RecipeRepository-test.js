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
  
    beforeEach( () => {
          recipeRepository = new RecipeRepository(data)
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
    expect(recipeRepository.recipeData[2].ingredients.length).to.equal(13)
    expect(recipeRepository.recipeData[3].instructions.length).to.equal(7)
    expect(recipeRepository.recipeData[4].name).to.equal("Mock Udi’s Gluten Free Whole Grain Bread")
  })
  
  it('should have a filtered list of recipes based on a tag', () => {
    expect(tagResults.length).to.equal(3);
  })
  
  it('should have a filtered list of recipes based on a name', () => {
    expect(nameResults[0].name).to.deep.equal("Loaded Chocolate Chip Pudding Cookie Cups");
  })
})
 