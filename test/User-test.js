const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const userInfo = require('../data/users').usersData;
const recipeInfo = require('../data/recipes').recipeData;

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
  });

  it('Should not add a duplicate favorite recipe', () => {
    const user = new User();

    user.addFavoriteRecipe(595736);    
    user.addFavoriteRecipe(595736);

    expect(user.favoriteRecipes).to.deep.equal([595736]);  
  });

  it('Should be able to add a recipe to cook', () => {
    const user = new User();

    user.addRecipeToCook(595736);

    expect(user.recipesToCook).to.deep.equal([595736]);
  });

  it('Should be able to remove a recipe to cook', () => {
    const user = new User();

    user.addRecipeToCook(595736);
    user.removeRecipeToCook(595736);

    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('Should not add a duplicate recipe to cook', () => {
    const user = new User();

    user.addRecipeToCook(595736);    
    user.addRecipeToCook(595736);

    expect(user.recipesToCook).to.deep.equal([595736]);  
	});
	
	it('Should be able to filter favorite recipes by tag', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

		user.addFavoriteRecipe(recipeInfo[0])
		user.addFavoriteRecipe(recipeInfo[3])
		user.addFavoriteRecipe(recipeInfo[5])

		expect(user.filterFavoriteRecipeByTag('side dish')).to.deep.equal([741603, 507921])
	});
	
});