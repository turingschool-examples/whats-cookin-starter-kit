import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
const data = require('../src/data/RecipeRepository-test-data.js')

describe('RecipeRepository', () => {

  beforeEach(() => {
    let recipesList = data.recipesList
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function')
  })
  it('Should store recipes', () => {
    const recipeRepo = new RecipeRepository(recipesList)
    expect(recipeRepo.recipes).to.be.an('array')
  })
  it('Should be able to filter recipes by tag', () => {
    const recipeRepo = new RecipeRepository(recipesList)
    expect(recipeRepo.filterByTag('side dish').length).to.equal(2)
    expect(recipeRepo.filterByTag('snack').length).to.equal(1)
  })
  it('Should be able to filter recipes by name', () => {
    const recipeRepo = new RecipeRepository(recipesList)
    expect(recipeRepo.filterByName('sauce').length).to.equal(1)
    expect(recipeRepo.filterByName('pork chop').length).to.equal(1)
  })
  it('Should not be case-sensitive when filtering recipes by name', () => {
    const recipeRepo = new RecipeRepository(recipesList)
    expect(recipeRepo.filterByName('SaUCe').length).to.equal(1)
    expect(recipeRepo.filterByName('PORK chop').length).to.equal(1)
  })
})