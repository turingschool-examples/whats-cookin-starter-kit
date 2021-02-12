const chai = require('chai');
const expect = chai.expect;

const RecipeRepo = require('../src/RecipeRepo');
const User = require('../src/User');
const recipeTestData = require('../test-data/recipe-test-data');
const usersData = require('../test-data/user-test-data');
const ingredientsTestData = require('../test-data/ingredient-test-data');


describe ('User', () => {
  const recipeData = recipeTestData.recipeData;
  const userData = usersData.usersData;
  const ingredientsData = ingredientsTestData.ingredientsData;

  let recipeNumberOne;
  let recipeRepo;

  beforeEach('create a recipe repository', () => {
    recipeRepo = new RecipeRepo(recipeData, userData, ingredientsData);
    recipeNumberOne = recipeRepo.recipes[0];

  });

  it('should instantiate a user', () => {

    expect(recipeRepo.user).to.be.an.instanceOf(User);
  });

  it('should have a name', () => {

    expect(recipeRepo.user.name).to.deep.equal(userData.name);
  });

  it('should have an id', () => {

    expect(recipeRepo.user.id).to.deep.equal(userData.id);
  });

  it('should have a pantry', () => {

    expect(recipeRepo.user.pantry).to.deep.equal(userData.pantry);
  });

  it('should have favorite recipes', () => {

    expect(recipeRepo.user.favorites).to.have.lengthOf(0);
  });

  it('should have planned recipes', () => {

    expect(recipeRepo.user.planned).to.have.lengthOf(0);
  });

  it('should be able to see a list of all recipes', () => {

    expect(recipeNumberOne).to.deep.equal(recipeRepo.recipes[0]);
  });

  describe('Favoriting methods', () => {

    it('should allow a user to favorite a recipe', () => {
      recipeRepo.user.addFavorite(recipeNumberOne);

      expect(recipeRepo.user.favorites).to.have.lengthOf(1);
    });

    it('should allow a user to unfavorite a recipe', () => {
      recipeRepo.user.addFavorite(recipeNumberOne);

      expect(recipeRepo.user.favorites[0]).to.deep.equal(recipeNumberOne);

      recipeRepo.user.removeFavorite(recipeNumberOne);

      expect(recipeRepo.user.favorites).to.have.lengthOf(0);
    });
  });

  describe('Favorite List Filtering Methods', () => {

    beforeEach('add favorites to user favorites', () => {

      recipeRepo.user.addFavorite(recipeNumberOne);
      recipeRepo.user.addFavorite(recipeRepo.recipes[1]);
    });

    it('should be able to filter favorites by multiple tags', () => {

      const filteredFaves = recipeRepo.user.getFavoritesByTags(
        ['cheerios', 'chocolate']);

      expect(filteredFaves).to.have.lengthOf(2);
    });

    it('should be able to filter favorites by recipe name search', () => {

      const filteredFaves = recipeRepo.user.getFavoritesByName('fluffer-nutter');

      expect(filteredFaves).to.have.lengthOf(1);

    });

    it('should be able to filter favorites by ingredient search', () => {

      let filteredFaves = recipeRepo.user.getFavoritesByIngredient('gumdrops');

      expect(filteredFaves).to.have.lengthOf(1);

      recipeRepo.user.addFavorite(recipeRepo.recipes[2]);

      filteredFaves = recipeRepo.user.getFavoritesByIngredient('barbarol');

      expect(filteredFaves).to.have.lengthOf(2);
    });

    it('should be able to add to planned recipe list', () => {
      recipeRepo.user.addPlanned(recipeNumberOne);

      expect(recipeRepo.user.planned).to.have.lengthOf(1);
    });
  });
});
