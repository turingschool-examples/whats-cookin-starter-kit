import { expect } from 'chai';
import { filterRecipes } from '../src/recipes.js'
import { sampleRecipeData } from '../src/data/sample-recipes.js';

describe ('filter', function() {
  
  it('should return an array of filtered recipes by a tag', function() {
    const filteredRecipes = filterRecipes(sampleRecipeData, 'starter')
    expect(filteredRecipes).to.be.deep.equal([sampleRecipeData[0]])
  })
  
  it('should be able return an array of filtered recipes by a different tag', function() {
    const filteredRecipes = filterRecipes(sampleRecipeData, 'sauce')
    expect(filteredRecipes).to.be.deep.equal([sampleRecipeData[2]])
  })

  it('should be able return an array of filtered recipes by a name', function() {
    const filteredRecipes = filterRecipes(sampleRecipeData, "Dirty Steve's Original Wing Sauce")
    expect(filteredRecipes).to.be.deep.equal([sampleRecipeData[2]]
    )
  })
  
  it('should let the user know if there were no results found', function() {
    const filteredRecipes = filterRecipes(sampleRecipeData, 'Plastic Garbage')
    expect(filteredRecipes).to.be.equal('Sorry, no matching results!')
  })

})