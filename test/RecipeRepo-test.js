const chai = require('chai');
const expect = chai.expect;
// write test: it needs to have a User!!
const RecipeRepo = require('../src/RecipeRepo');
const Recipe = require('../src/Recipe');
const User = require('../src/User');
const recipeTestData = require('./recipe-test-data');
const usersData = require('./user-test-data');

describe('RecipeRepo', () => {
  const userData = usersData.usersData;
  const recipeData = recipeTestData.recipeData;
  let recipeRepo;
  let recipe;
  let recipeNumberOne;

  beforeEach('create a recipe repository', () => {
    recipeRepo = new RecipeRepo(recipeData);
    recipeNumberOne = recipeRepo.recipes[0];
  });

  it('should instantiate a recipe repository', () => {

    expect(recipeRepo).to.be.an.instanceOf(RecipeRepo);
  });

  it('should have Recipe instances', () => {

    expect(recipeNumberOne).to.be.an.instanceOf(Recipe);
  });

  it('should have a name for each recipe', () => {
    expect(recipeNumberOne.name).to.deep.equal(recipeData[0].name);
  });

  it('should have a user', () => {
    expect(recipeRepo.user).to.be.an.instanceOf(User);
  });

  it('should fulfill the whole data set and have many Recipe ojects', () => {

    expect(recipeNumberOne.name).to.deep.equal(recipeData[0].name);
    expect(recipeRepo.recipes[1].name).to.deep.equal(recipeData[1].name);
    expect(recipeRepo.recipes[2].name).to.deep.equal(recipeData[2].name);
  });

  describe('Filter methods', () => {
    let tag = 'cheez-its';
    let ingredientId = 24;
    let name = 'figgy pudding';

    it('should filter recipes by tag', () => {

      recipeRepo.matchTag(tag);

      expect(recipeRepo.recipes[0].tags).to.deep.equal(recipeData[1].tags);
    });

    it('should filter recipes by ingredient', () => {

      recipeRepo.matchIngredient(ingredientId);
      expect(recipeRepo.recipes[1].tags).to.deep.equal(recipeData[1].tags);
    });

    it('should filter recipes by name', () => {

      recipeRepo.matchName(name);
      expect(recipeRepo.recipes[0].name).to.deep.equal(recipeData[1].name);
    });
  });

});
