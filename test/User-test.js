const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

describe('User', () => {
  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be able to favorite a recipe', () => {
    const user = new User();

    user.addFavoriteRecipe(595736);

    expect(user.favoriteRecipes).to.deep.equal([595736]);
  });

  it('Should be able to remove a favorite recipe', () => {
    const user = new User();

    user.addFavoriteRecipe(595736);
    user.removeFavoriteRecipe(595736);

    expect(user.favoriteRecipes).to.deep.equal([]);
  })
});