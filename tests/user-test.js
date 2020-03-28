const chai = require('chai');
const expect = chai.expect;

let users = require('../data/users');
let ingredients = require('../data/ingredients');
let recipes = require('../data/recipes');

const Ingredient = require('../src/Ingredient');
const Pantry = require('../src/Pantry');
const Recipe = require('../src/Recipe');
const User = require('../src/User');

describe ('User', function() {

  let user;
  let recipe;

  beforeEach(function() {
    user = new User(users[0].name, users[0].id, users[0].pantry);
    recipe1 = new Recipe(
      recipes[0].id, 
      recipes[0].image, 
      recipes[0].ingredients, 
      recipes[0].instructions, 
      recipes[0].name, 
      recipes[0].tags,
    )
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have a name', function() {
    expect(user.name).to.equal('Saige O\'Kon');
  });

  it('should have an id', function() {
    expect(user.id).to.equal(1);
  });

  it('should have a pantry', function() {
    expect(user.pantry).to.be.an('array');
    expect(user.pantry[0].ingredient).to.equal(11477);
    expect(user.pantry[2].ingredient).to.equal(1082047);
  });
  
  it('should be able to check pantry', function() {
    //check pantry array vs recipe array
    //return array of items not in pantry
    user.checkPantry(recipe1)
  })

  it('should be able to be added from favorites list', function() {
    expect(user.favoriteRecipes).to.deep.equal([]);
    user.addFavoriteRecipe(recipe1);
    expect(user.favoriteRecipes).to.deep.equal([recipe1]);
    expect(recipe1.isFavorite).to.be.true
  })

  it('should be able to be removed from the favorites list', function() {
    user.addFavoriteRecipe(recipe1);
    user.removeFavoriteRecipe(recipe1);
    expect(user.favoriteRecipes).to.deep.equal([]);
    expect(recipe1.isFavorite).to.be.false;
  })

  it('should be able to be added from recipes to cook list', function() {
    expect(user.recipesToCook).to.deep.equal([]);
    user.addRecipeToCook(recipe1);
    expect(user.recipesToCook).to.deep.equal([recipe1]);
    expect(recipe1.cookNext).to.be.true
  })

  it('should be able to be removed from the recipes to cook list', function() {
    user.addRecipeToCook(recipe1);
    user.removeRecipeToCook(recipe1);
    expect(user.recipesToCook).to.deep.equal([]);
    expect(recipe1.cookNext).to.be.false;
  })
})
