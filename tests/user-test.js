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
  let recipe1;

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
  
  it('should be able to find recipe ingredient ids', function() {
    expect(user.getRecipeIds(recipe1)).to.deep.equal([20081, 18372, 1123, 19335, 19206, 19334, 2047, 1012047, 10019903, 1145, 2050])
  });
  
  it('should be able to find pantry ingredient ids', function() {
    expect(user.getPantryIds()).to.deep.equal([11477, 11297, 1082047, 20081, 11215, 2047, 1123, 11282, 6172, 2044, 2050, 1032009, 5114, 1017, 18371, 1001, 99223, 1230, 9152, 10611282, 93607, 14106, 1077, 6150, 1124, 10011693, 1102047, 19206, 1145, 1002030, 12061, 19335, 15152, 9003, 18372, 2027])
  });
  
  it('should find what recipe ingredients are in the pantry', function() {
    expect(user.compareIngredients(recipe1)).to.deep.equal([20081, 2047, 1123, 2050, 19206, 1145,19335, 18372])
  })
  
  it('should find what ingredients are needed', function() {
    expect(user.getNeededIngredients(recipe1)).to.deep.equal([19334, 1012047, 10019903])
  })
  
  it('should check pantry amounts against recipe amounts', function() {
    expect(user.compareIngredientsAmounts(recipe1)).to.deep.equal([19334, 1012047, 10019903, 19206])
    console.log(user.compareIngredientsAmounts(recipe1))
  })
  
  it('should be able to tell the missing amounts', function() {
    expect(user.getShoppingList(recipe1)).to.deep.equal([
      {"id": 19334,
      "quantity": {
        "amount": 0.5,
        "unit": "c"
      }}, { 
        "id": 1012047,
        "quantity": {
          "amount": 24,
          "unit": "servings"
      }}, {         
        "id": 10019903,
        "quantity": {
          "amount": 2,
          "unit": "c"
      }}, { 
        "id": 19206,
        "quantity": {
          "amount": 3,
          "unit": "Tbsp"
      }}
    ])
  });
  
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
