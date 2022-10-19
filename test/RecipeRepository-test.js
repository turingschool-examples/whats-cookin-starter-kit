import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import { sampleIngredientsData, sampleUsersData, sampleRecipeData } from '../src/data/sample-data';

describe('RecipeRepo', () => {
  sampleIngredientsData
  sampleUsersData
  sampleRecipeData
  let recipe1
  let recipe2
  let recipeRepository

  beforeEach(() => {
    recipe1 = new Recipe(sampleRecipeData[0]);
    recipe2 = new Recipe(sampleRecipeData[1]);
    recipeRepository = new RecipeRepository([recipe1, recipe2])
    sampleIngredientsData;
    sampleUsersData;
    sampleRecipeData;
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
  it('Should have a property of recipe', () => {
    //expect(recipeRepository.recipes).to.be.an.instanceOf(Recipe);
    expect(recipeRepository.recipes).to.deep.equal([recipe1, recipe2]);
  });
  it('Should filter a list of recipes based on a tag.', () => {
    expect(recipeRepository.filterTag("lunch")).to.deep.equal([recipe2]);
    expect(recipeRepository.filterTag("hor d'oeuvre")).to.deep.equal([recipe1]);
  })
  it('Should filter list of recipes based on its name.', () => {
    expect(recipeRepository.filterName("Maple Dijon Apple Cider Grilled Pork Chops")).to.deep.equal([recipe2]);
    expect(recipeRepository.filterName("Loaded Chocolate Chip Pudding Cookie Cups")).to.deep.equal([recipe1]);
  })
})


// A RecipeRepository should hold onto all Recipe objects.

// It should have methods to determine:
// A filtered list of recipes based on a tag.
// A filtered list of recipes based on its name.

