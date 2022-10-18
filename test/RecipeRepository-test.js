import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import { sampleIngredientsData, sampleUsersData, sampleRecipeData } from '../src/data/sample-data';

describe('RecipeRepo', () => {
  sampleIngredientsData
  sampleUsersData
  sampleRecipeData
  let recipe
  let recipeRepository

  beforeEach(() => {
    recipe = new Recipe(sampleRecipeData[0]);
    recipeRepository = new RecipeRepository(recipe)
    sampleIngredientsData;
    sampleUsersData;
    sampleRecipeData;
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('Should have a property of recipe', () => {
    expect(recipeRepository.recipe).to.be.an.instanceOf(Recipe);
    expect(recipeRepository.recipe).to.deep.equal(recipe);
  });
})


// A RecipeRepository should hold onto all Recipe objects.

// It should have methods to determine:
// A filtered list of recipes based on a tag. (Extension option: filtering by multiple tags)
// A filtered list of recipes based on its name. (Extension option: filtering by name or ingredients)

