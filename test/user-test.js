const chai = require('chai');
const expect = chai.expect;
const User = require('../src/user-class.js');
const Pantry = require('../src/pantry-class.js');
const Recipe = require('../src/recipe-class.js');
const usersData = require('../data/users.js');
const recipeData = require('../data/recipes.js');

describe('user', () => {

  let user;

  beforeEach(() => {
    user = new User(usersData[0]);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should have a name', () => {
    expect(user.name).to.be.a('string');
    expect(user.name).to.deep.equal(usersData[0].name);
  });

  it('should only have a string as a name', () => {
    const robotChef = new User({name: 12567, id: 1, pantry: []});
    expect(robotChef.name).to.equal('12567');
  });

  it('should have an ID', () => {
    expect(user.id).to.be.a('number');
    expect(user.id).to.deep.equal(usersData[0].id);
  });

  it('should assign a number for an ID if no number is given', () => {
    const karen = new User({name: 'Karen', id: 'I don\'t believe in numbers', pantry: [{ingredient: 'essential oils'}]});
    const anotherRobotChef = new User({ name: 12567, id: ['Error'], pantry: []});

    expect(karen.id).to.equal(Date.now());
    expect(anotherRobotChef.id).to.equal(Date.now());
  });

  it('should have a pantry that is an instance of Pantry', () => {
    expect(user.pantry).to.be.an.instanceOf(Pantry);
  });
  
  it('should have a pantry that contains ingredients', () => {
    expect(user.pantry).to.be.an('object');
    expect(user.pantry.supplies).to.deep.equal(usersData[0].pantry);
  });

  it('should start with an empty array of favorite recipes', () => {
    expect(user.favoriteRecipes).to.be.an('array');
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should start with an empty array of recipes to cook', () => {
    expect(user.recipesToCook).to.be.an('array');
    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('should be able to add a recipe to its list of favorites', () => {
    const recipe = new Recipe(recipeData[0]);
    
    user.chooseFavoriteRecipe(recipe);

    expect(user.favoriteRecipes[0]).to.deep.equal(recipe);
  });

  it('should only be able to add recipes to its list of favorites', () => {
    const recipe = 'Delicious food';
    const otherRecipe = 42;
    const wrongRecipe = ['food'];

    user.chooseFavoriteRecipe(recipe);
    user.chooseFavoriteRecipe(otherRecipe);
    user.chooseFavoriteRecipe(wrongRecipe);

    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should let the user search for a recipe by name', () => {
    const recipe1 = new Recipe(recipeData[0]);
    const recipe2 = new Recipe(recipeData[1]);
    const recipe3 = new Recipe(recipeData[2]);

    user.chooseFavoriteRecipe(recipe1);
    user.chooseFavoriteRecipe(recipe2);
    user.chooseFavoriteRecipe(recipe3);

    const searchResults = user.searchFavoriteRecipesByName('Map');

    expect(searchResults[0].name).to.equal(recipe2.name);
  })

  it('should be able to convert an ingredient name to its id', () => {
    const wheatFlourID = user.convertIngredientNameToID('wheat');
    const wheatFlourID2 = user.convertIngredientNameToID('whe');
    const wheatFlourID3 = user.convertIngredientNameToID('wheat flour');

    expect(wheatFlourID).to.equal(20081);
    expect(wheatFlourID2).to.equal(20081);
    expect(wheatFlourID3).to.equal(20081);
  });

  it('should return an empty string if no matching id is found', () => {
    const randomSearch = user.convertIngredientNameToID('a car');

    expect(randomSearch).to.deep.equal([]);
  });

  it('should return a list of ingredients for a given recipe', () => {
    const cookieRecipe = new Recipe(recipeData[0]);
    expect(user.generateIngredientList(cookieRecipe)).to.deep.equal([20081, 18372, 1123, 19335, 19206, 19334, 2047, 1012047, 10019903, 1145, 2050]);
  });

  it('should only take a recipe as an argument for generating an ingredient list', () => {
    const number = 123;
    const array = ['something', 'something'];
    const bool = false;
    const cookieRecipe = new Recipe(recipeData[0]);

    expect(user.generateIngredientList(number)).to.deep.equal([]);
    expect(user.generateIngredientList(array)).to.deep.equal([]);
    expect(user.generateIngredientList(bool)).to.deep.equal([]);
    expect(user.generateIngredientList(cookieRecipe)).to.deep.equal([20081, 18372, 1123, 19335, 19206, 19334, 2047, 1012047, 10019903, 1145, 2050]);
  });

  it('should be able to return a list of recipes that include a specified ingredient', () => {
    const recipe1 = new Recipe(recipeData[0]);
    const recipe2 = new Recipe(recipeData[1]);
    const recipe3 = new Recipe(recipeData[2]);

    user.chooseFavoriteRecipe(recipe1);
    user.chooseFavoriteRecipe(recipe2);
    user.chooseFavoriteRecipe(recipe3);

    const searchResults = user.searchFavoriteRecipesByIngredient('brown sugar');

    expect(searchResults).to.deep.equal([recipe1, recipe3]);
  });
});