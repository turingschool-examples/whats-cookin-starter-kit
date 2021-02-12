const chai = require('chai');
const expect = chai.expect;

const RecipeRepo = require('../src/RecipeRepo');
const Recipe = require('../src/Recipe');
const User = require('../src/User');
const recipeTestData = require('./recipe-test-data');
const usersData = require('./user-test-data');
const ingredientsTestData = require('./ingredient-test-data');


describe ('User', () => {
  const recipeData = recipeTestData.recipeData;
  const userData = usersData.usersData;
  const ingredientsData = ingredientsTestData.ingredientsData;

  let recipeNumberOne;
  let recipeRepo;
  let recipe;
  let user;


  beforeEach('create a recipe repository', () => {
    recipeRepo = new RecipeRepo(recipeData, userData, ingredientsData);
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

  describe('Favoriting methods', () => {

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

  describe('Favorite List Filtering Methods', () => {

    beforeEach('add favorites to user favorites', () => {

      user.addFavorite(recipeNumberOne);
      user.addFavorite(recipeRepo.recipes[1]);
    });

    it('should be able to filter favorites by multiple tags', () => {

      const newFaves = user.getFavoritesByTags(['cheerios', 'chocolate']);

      expect(newFaves).to.have.lengthOf(2);
    });

    it('should be able to filter favorites by recipe name search', () => {

      const newFaves = user.getFavoritesByName('fluffer-nutter');

      expect(newFaves).to.have.lengthOf(1);

    });

    it.skip('should be able to filter favorites by ingredient search', () => {

      const newFaves = user.getFavoritesByIngredient('gumdrops');
console.log(user.favorites)
console.log(newFaves)
      expect(newFaves).to.have.lengthOf(1);
    });

    it('should be able to add to planned recipe list', () => {
      user.addPlanned(recipeNumberOne);

      expect(user.planned).to.have.lengthOf(1);
    });
  });

})
