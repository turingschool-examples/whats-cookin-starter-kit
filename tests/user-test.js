const chai = require('chai');
const expect = chai.expect;

const User = require('./src/User.js');

let user1
let user5

describe('User', () => {
  beforeEach(() => {
    user1 = new User(1, 'Boba', [
      {
        "ingredient": 1077,
        "amount": 1
      },
      {
        "ingredient": 14412,
        "amount": 1
      },
      {
        "ingredient": 1009054,
        "amount": 3
      }];
    );
    user5 = new User(5, 'Krennick', [
      {
        "ingredient": 11477,
        "amount": 1
      },
      {
        "ingredient": 93820,
        "amount": 1
      },
      {
        "ingredient": 11297,
        "amount": 3
      },
      {
        "ingredient": 11547,
        "amount": 5
      }];
    );
  });

  it.skip('Should have a property of favoriteRecipes with a default value', () => {
    expect(user1.favoriteRecipes).to.eql([]);
  });

  it.skip('Should be able to add recipes from favoriteRecipes', () =>{
    expect(user1.changeFavorites(recipe)).to.eql(["Loaded Chocolate Chip Pudding Cookie Cups"]);
  });

  it.skip('Should be able to remove recipes from favoriteRecipes', () =>{
    user1.changeFavorites(recipe);
    expect(user1.changeFavorites(recipe)).to.eql([]);
  });

  it.skip('Should be able to filter through favoriteRecipes by tag', () => {
    user1.changeFavorites(recipe);
    user1.changeFavorites(recipe);
    user1.changeFavorites(recipe);
    user1.changeFavorites(recipe);
    expect(user1.filterFavorites(tag)).to.eql([recipesIncludingTags]);
  });

  it.skip('Should be able to search favoriteRecipes by name or ingredient', () => {
    expect(user1.findFavorites(name/ingredient)).to.eql(recipeWithName/recipeWithIngredient);
  });

  it.skip('Should be able to check ingredients in User/s pantry for a given recipe', () => {
    user1.;
    expect(user1.checkPantry(recipeIngredients)).to.eql('You have the ingredients!');
  });

  it.skip('Should inform User if they lack required ingredients for a given recipe', () => {
    expect(user1.checkPantry(recipeIngredients)).to.eql(missingIngredientsWithPrice);
  });
});
