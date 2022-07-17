import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import { recipeData } from '../src/data/recipes';

describe('Recipe Repository', () => {

  let recipeRepository;
  let recipeObj;

  beforeEach(() => {
    recipeRepository = new RecipeRepository(recipeData);
    recipeRepository.createAllRecipes()
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of Recipe Repository', function () {
    expect(recipeRepository).to.be.an.instanceOf(RecipeRepository)
  })

  it('should filter recipes using a tag', () => {
    expect(recipeRepository.filterByTag('side dish').length).to.equal(22)
  })

  it('should filter recipes using its name', () => {
    expect(recipeRepository.filterByName('Maple Dijon Apple Cider Grilled Pork Chops').length).to.equal(1)
  })

  it('should be able to be filtered by any name', () => {
    expect(recipeRepository.filterByName('booger').length).to.equal(0)
  })
});