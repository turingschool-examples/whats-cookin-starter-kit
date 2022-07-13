import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('RecipeRepository', () => {
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  
  let recipeRepository;

  beforeEach( () => {
    recipeRepository = new RecipeRepository();
  });
  

  it("Should have an array of recipes", () => {
    expect(recipeRepository.recipes).to.be.an("Array")
  });

  it("Should be able to add a recipe to the array of recipes", () => {
    
    let recipe = new Recipe()
    recipeRepository.addRecipe(recipe)

    expect(recipeRepository.recipes.length).to.equal(1)
    expect(recipeRepository.recipes[0]).to.deep.equal(recipe)

    let anotherRecipe= new Recipe()
    recipeRepository.addRecipe(anotherRecipe)
    
    expect(recipeRepository.recipes.length).to.equal(2)
    expect(recipeRepository.recipes[0]).to.deep.equal(recipe)
    expect(recipeRepository.recipes[1]).to.deep.equal(anotherRecipe)
  });

  it("Should be able to filter recipes by tag", () => {

    let dinnerRecipeData = {
      tags: [
        "dinner", "main dish"
      ]
    }
    let breakfastRecipeData = {
      tags: [
        "breakfast", "side"
      ]
    }
    let dinnerRecipe = new Recipe(dinnerRecipeData)
    let breakfastRecipe = new Recipe(breakfastRecipeData)
    recipeRepository.addRecipe(dinnerRecipe)
    recipeRepository.addRecipe(breakfastRecipe)

    expect(recipeRepository.filterRecipesByTag("dinner")).to.include(dinnerRecipe)
    expect(recipeRepository.filterRecipesByTag("breakfast")).to.include(breakfastRecipe)
    
    expect(recipeRepository.filterRecipesByTag("dinner")).to.not.include(breakfastRecipe)
    expect(recipeRepository.filterRecipesByTag("breakfast")).to.not.include(dinnerRecipe)
  });

  it("Should be able to filter recipes by a portion of their name", () => {
    
    expect()
  });

  it("Should have an array of tags that is empty by default", () => {
    
    expect()
  });

  it("Should update its array of tags whenever new recipes are added", () => {
    
    expect()
    // if a recipe is added which has a tag that isn't in the tags array yet, the new tag should be added to the tags array
    // whenever a recipe is added, the tags it has should be updated in the tag array to include the IDs of those recipes
  });
})