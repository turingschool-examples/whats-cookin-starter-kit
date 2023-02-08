import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/recipe';
import sampleData from '../src/sampleData';

describe('Recipe', () => {
  let recipe

  beforeEach(() => {
    recipe = new RecipeRepository(sampleData)
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should create a new class instance of Recipe', () => {
   expect(recipe).to.be.an.instanceOf(RecipeRepository)
  });

  it('should get recipe by tag', () => {
    const result = recipe.getRecipeByTag('dinner');
    expect(result).to.deep.equal([{ id: 1929, name: 'Pasta Alfredo', tags: 'dinner' }]);
    
    const result2 = recipe.getRecipeByTag('breakfast');
    expect(result2).to.deep.equal([{ id: 4322, name: "Biscuits and Gravy", tags: 'breakfast' }]);
    
    const result3 = recipe.getRecipeByTag('side dish');
    expect(result3).to.deep.equal([{ id: 1123, name: "Pastry Cream", tags: 'side dish' }, { id: 3456, name: "Vegan Lentil Loaf", tags: 'side dish' } ]);

    const result4 = recipe.getRecipeByTag('dessert');
    expect(result4).to.deep.equal([]);
  });

  it('should get recipe by name', () => {
    const result = recipe.getRecipeByName('Biscuits and Gravy');
    expect(result).to.deep.equal([{id: 4322, name: "Biscuits and Gravy",tags: "breakfast" }]);

    const result2 = recipe.getRecipeByName('Pasta Alfredo');
    expect(result2).to.deep.equal([{id: 1929, name: 'Pasta Alfredo', tags: 'dinner' }]);

    const result3 = recipe.getRecipeByName('Pastry Cream');
    expect(result3).to.deep.equal([{id: 1123, name: 'Pastry Cream', tags: 'side dish' }]);  

    const result4 = recipe.getRecipeByName('ice cream');
    expect(result4).to.deep.equal([]);
  });
})