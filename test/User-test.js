const chai = require('chai');
const expect = chai.expect;

const RecipeRepo = require('../src/RecipeRepo');
const Recipe = require('../src/Recipe');
const User = require('../src/User');
const recipeTestData = require('./recipe-test-data');
const usersData = require('./user-test-data');



describe ('User', () => {
  const recipeData = recipeTestData.recipeData;
  const userData = usersData.usersData;
  let recipeNumberOne;
  let recipeRepo;
  let recipe;
  let user;


  beforeEach('create a recipe repository', () => {
    recipeRepo = new RecipeRepo(recipeData);
    recipeNumberOne = recipeRepo.recipes[0];
    user = new User(userData);

  });

  it('should instantiate a user', () => {

    expect(user).to.be.an.instanceOf(User);
  });

  it('should have a name', () => {

    expect(user.name).to.deep.equal(userData.name);
  });

  it('should have an id', () => {

    expect(user.id).to.deep.equal(userData.id);
  });

  it('should have a pantry', () => {

    expect(user.pantry).to.deep.equal(userData.pantry);
  });

  it('should have favorite recipes', () => {

    expect(user.favorites).to.have.lengthOf(0);
  });

  it('should have planned recipes', () => {

    expect(user.planned).to.have.lengthOf(0);
  });

  it('should be able to see a list of all recipes', () => {

    expect(recipeNumberOne).to.deep.equal(recipeRepo.recipes[0]);
  });

  describe('Favoriting method', () => {

    it('should allow a user to favorite a recipe', () => {
      user.addFavorite(recipeNumberOne);

      expect(user.favorites).to.have.lengthOf(1);
    });

    it('should allow a user to unfavorite a recipe', () => {
      user.addFavorite(recipeNumberOne);

      expect(user.favorites[0]).to.deep.equal(recipeNumberOne);

      user.removeFavorite(recipeNumberOne);

      expect(user.favorites).to.have.lengthOf(0);
    });
  });

})
