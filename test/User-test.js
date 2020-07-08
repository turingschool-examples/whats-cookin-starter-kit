const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const userInfo = require('../data/users').usersData;
const recipeInfo = require('../data/recipes').recipeData;
const ingredientInfo = require('../data/ingredients').ingredientsData;

describe('User', () => {
  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be able to favorite a recipe', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

		user.addFavoriteRecipe(recipeInfo[0]);

		expect(user.favoriteRecipes).to.deep.equal([recipeInfo[0]]);
  });

  it('Should be able to remove a favorite recipe', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

    user.addFavoriteRecipe(recipeInfo[0]);
    user.removeFavoriteRecipe(recipeInfo[0]);

    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('Should not add a duplicate favorite recipe', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

    user.addFavoriteRecipe(recipeInfo[0]);    
    user.addFavoriteRecipe(recipeInfo[0]);

    expect(user.favoriteRecipes).to.deep.equal([recipeInfo[0]]);  
  });

  it('Should be able to add a recipe to cook', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

    user.addRecipeToCook(recipeInfo[0]);

    expect(user.recipesToCook).to.deep.equal([recipeInfo[0]]);
  });

  it('Should be able to remove a recipe to cook', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

    user.addRecipeToCook(recipeInfo[0]);
    user.removeRecipeToCook(recipeInfo[0]);

    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('Should not add a duplicate recipe to cook', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

    user.addRecipeToCook(recipeInfo[0]);    
    user.addRecipeToCook(recipeInfo[0]);

    expect(user.recipesToCook).to.deep.equal([recipeInfo[0]]);  
	});
	
	it('Should be able to filter favorite recipes by tag', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

		user.addFavoriteRecipe(recipeInfo[0]);
		user.addFavoriteRecipe(recipeInfo[3]);
		user.addFavoriteRecipe(recipeInfo[7]);

		expect(user.filterFavoriteRecipesByTag('antipasto')).to.deep.equal([recipeInfo[0], recipeInfo[7]]);
	});

	it('Should return no results if tag not found in favorite recipes', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

		expect(user.filterFavoriteRecipesByTag('antipasto')).to.deep.equal([]);
	});

	it('Should be able to filter recipes to cook by tag', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

		user.addRecipeToCook(recipeInfo[0]);
		user.addRecipeToCook(recipeInfo[3]);
		user.addRecipeToCook(recipeInfo[7]);

		expect(user.filterRecipesToCookByTag('antipasto')).to.deep.equal([recipeInfo[0], recipeInfo[7]]);
	});
  
  it('Should be able to filter favorite recipes by name, not case sensitive', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

		user.addFavoriteRecipe(recipeInfo[0]);
		user.addFavoriteRecipe(recipeInfo[3]);
    user.addFavoriteRecipe(recipeInfo[7]);

		expect(user.filterFavoriteRecipesByName('coOKie')).to.deep.equal([recipeInfo[0], recipeInfo[7]]);
  });
  
  it('Should be able to filter recipes to cook by name, not case sensitive', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

		user.addRecipeToCook(recipeInfo[0]);
		user.addRecipeToCook(recipeInfo[3]);
    user.addRecipeToCook(recipeInfo[7]);

		expect(user.filterRecipesToCookByName('coOKie')).to.deep.equal([recipeInfo[0], recipeInfo[7]]);
  });
  
  it('Should be able to filter favorite recipes by ingredient', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

		user.addFavoriteRecipe(recipeInfo[0]);
		user.addFavoriteRecipe(recipeInfo[3]);
    user.addFavoriteRecipe(recipeInfo[7]);

		expect(user.filterFavoriteRecipesByIngredient('eggs')).to.deep.equal([recipeInfo[0], recipeInfo[3]]);
  });

  it('Should be able to filter recipes to cook by ingredient', () => {
		const user = new User(userInfo[0].name, userInfo[0].id, userInfo[0].pantry);

		user.addRecipeToCook(recipeInfo[0]);
		user.addRecipeToCook(recipeInfo[3]);
    user.addRecipeToCook(recipeInfo[7]);

		expect(user.filterRecipesToCookByIngredient('eggs')).to.deep.equal([recipeInfo[0], recipeInfo[3]]);
  });

});
