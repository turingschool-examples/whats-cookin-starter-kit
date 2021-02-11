const chai = require('chai');
const expect = chai.expect;

const ingredientTestData = require('./ingredient-test-data');
const ingredientData = ingredientTestData.ingredientData;

const recipeTestData = require('./recipe-test-data');
const usersData = require('./user-test-data');
const RecipeRepo = require('../src/RecipeRepo');
const Recipe = require('../src/Recipe');


describe ('Recipe', () => {
  const recipeData = recipeTestData.recipeData;
  const userData = usersData.usersData;
  let recipeRepo;
  let recipe;

  beforeEach('create a recipe repository', () => {
    recipeRepo = new RecipeRepo(recipeData);
    recipeNumberOne = recipeRepo.recipes[0];
  });


  it('should have an id number', () => {

    expect(recipeNumberOne.id).to.deep.equal(2021);
  });

  it('should have an image', () => {

    expect(recipeNumberOne.image).to.deep.equal('https://i.pinimg.com/originals/ee/28/89/ee288996db69afeb8ec5cbf84f8c0d10.jpg');
  });

  it('should have tags', () => {

    expect(recipeNumberOne.tags).to.deep.equal(['chocolate','cheese']);
  });

  it('should have a name', () => {

    expect(recipeNumberOne.name).to.deep.equal('fluffer-nutter');
  });

  it('should have instructions', () => {

    expect(recipeNumberOne.instructions).to.deep.equal(recipeData[0].instructions);
  });

  it('should instantiate an ingredient', () => {
    expect(recipeNumberOne.ingredients[0].id).to.deep.equal(23);
  });

  it('should have an ingredients list', () => {

    expect(recipeNumberOne.ingredients[0].quantity.unit).to.deep.equal('octoban');
  });

  describe('Inquiries', () => {

    it('should determine names of needed ingredients', () => {
      recipeNumberOne.getIngredientsNeeded();

      expect()
    });

    it.skip('should get the total cost of the ingredients', () => {
      const cost = recipeNumberOne.getCost();

      expect(cost).to.deep.equal(42*42/100)
    });

    it('should return instructions', () => {

    });

  });
});
