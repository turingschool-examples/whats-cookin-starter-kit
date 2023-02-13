import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import sampleRecipeData from '../src/data/sample-recipe-data';


describe('RecipeRepository', () => {
  let recipe;

  beforeEach(() => {
    recipe = new RecipeRepository(sampleRecipeData.slice(0, 3));
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of RecipeRepository', () => {
    expect(recipe).to.be.an.instanceOf(RecipeRepository);
  });

  it('should have a recipes property', () => {
    expect(recipe.recipes).to.have.lengthOf(3);
    expect(recipe.recipes[0]).to.be.an.instanceOf(Recipe);
  });

  it('should start with no filtered recipes', () => {
    expect(recipe.filteredRecipes).to.equal(undefined);
  });

  it('should be able to filter recipes by tag', () => {
    recipe.filterByTag('starter')
    expect(recipe.filteredRecipes).to.have.lengthOf(1);
  });
  it('should be able to filter by multiple tags', () => {
    recipe.filterByTag(['lunch','sauce'])
    expect(recipe.filteredRecipes).to.have.lengthOf(2);
  })
  it('should not save duplicates when filtering by tag', () => {
    recipe.filterByTag(['main course', 'main dish'])
    expect(recipe.filteredRecipes).to.have.lengthOf(1);
  })

  it('should not be able to filter recipes without a tag', () => {
    recipe.filterByTag()
    expect(recipe.filteredRecipes).to.equal(null);
  });

  it('should not be able to filter by nonexistant tag', () => {
    recipe.filterByTag('hello')
    expect(recipe.filteredRecipes).to.equal(null);
  });

  it('should not let user know if no recipes include that tag', () => {
    expect(recipe.filterByTag('hello')).to.equal(undefined);
  });

  it('should be able to filter recipes by name', () => {
    recipe.filterByName('cookie')
    expect(recipe.filteredRecipes).to.have.lengthOf(1);
  });

  it('should not be able to filter recipes without a name', () => {
    recipe.filterByName()
    expect(recipe.filteredRecipes).to.equal(undefined);
  });

  it('should allow adding recipes', () => {
    recipe.addRecipe(sampleRecipeData[3])
    expect(recipe.recipes).to.have.lengthOf(4);
    recipe.filterByName('Easy Creamy Potato Salad with Yogurt');
    
  });

  it('should be able to remove recipes', () => {
    recipe.removeRecipe(sampleRecipeData[0].id);
    expect(recipe.recipes).to.have.lengthOf(2);
    recipe.filterByName('Loaded Chocolate Chip Pudding Cookie Cups')
    expect(recipe.filteredRecipes).to.equal(null);

  });

});