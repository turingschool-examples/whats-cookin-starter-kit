const chai = require('chai');
const expect = chai.expect;
const Recipe = require('../src/Recipe');
const User = require('../src/User');
const testData = require('../data/test-data');
const recipeTestData = testData.recipeTestData;
const usersTestData = testData.usersTestData;


describe('User', () => {
	let user, recipe1, recipe2, recipe3;
	beforeEach(() => {
		user = new User(usersTestData[0]);
		recipe1 = new Recipe(recipeTestData[0]);
		recipe2 = new Recipe(recipeTestData[1]);
		recipe3 = new Recipe(recipeTestData[2]);
	});

  it('Should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('Should be able to favorite a recipe', () => {
		user.addFavoriteRecipe(recipe1);

		expect(user.favoriteRecipes).to.deep.equal([recipe1]);
  });

  it('Should be able to remove a favorite recipe', () => {
    user.addFavoriteRecipe(recipe1);
    user.removeFavoriteRecipe(recipe1);

    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('Should not add a duplicate favorite recipe', () => {
    user.addFavoriteRecipe(recipe1);    
    user.addFavoriteRecipe(recipe1);

    expect(user.favoriteRecipes).to.deep.equal([recipe1]);  
  });

  it('Should be able to add a recipe to cook', () => {
    user.addRecipeToCook(recipe1);

    expect(user.recipesToCook).to.deep.equal([recipe1]);
  });

  it('Should be able to remove a recipe to cook', () => {
    user.addRecipeToCook(recipe1);
    user.removeRecipeToCook(recipe1);

    expect(user.recipesToCook).to.deep.equal([]);
  });

  it('Should not add a duplicate recipe to cook', () => {
    user.addRecipeToCook(recipe1);    
    user.addRecipeToCook(recipe1);

    expect(user.recipesToCook).to.deep.equal([recipe1]);  
	});
	
	it('Should be able to filter favorite recipes by tag', () => {
		user.addFavoriteRecipe(recipe1);
		user.addFavoriteRecipe(recipe2);
		user.addFavoriteRecipe(recipe3);

		expect(user.filterFavoriteRecipesByTag('sauce')).to.deep.equal([recipe1, recipe3]);
	});

	it('Should return no results if tag not found in favorite recipes', () => {
		expect(user.filterFavoriteRecipesByTag('antipasto')).to.deep.equal([]);
	});

	it('Should be able to filter recipes to cook by tag', () => {
		user.addRecipeToCook(recipe1);
		user.addRecipeToCook(recipe2);
		user.addRecipeToCook(recipe3);

		expect(user.filterRecipesToCookByTag('sauce')).to.deep.equal([recipe1, recipe3]);
	});
  
  it('Should be able to filter favorite recipes by name, not case sensitive', () => {
		user.addFavoriteRecipe(recipe1);
		user.addFavoriteRecipe(recipe2);
    user.addFavoriteRecipe(recipe3);

		expect(user.filterFavoriteRecipesByName('coOKie')).to.deep.equal([recipe1]);
  });
  
  it('Should be able to filter recipes to cook by name, not case sensitive', () => {
		user.addRecipeToCook(recipe1);
		user.addRecipeToCook(recipe2);
    user.addRecipeToCook(recipe3);

		expect(user.filterRecipesToCookByName('coOKie')).to.deep.equal([recipe1]);
  });
  
  it('Should be able to filter favorite recipes by ingredient', () => {
		user.addFavoriteRecipe(recipe1);
		user.addFavoriteRecipe(recipe2);
    user.addFavoriteRecipe(recipe3);

		expect(user.filterFavoriteRecipesByIngredient('eggs')).to.deep.equal([recipe1]);
  });

  it('Should be able to filter recipes to cook by ingredient', () => {
		user.addRecipeToCook(recipe1);
		user.addRecipeToCook(recipe2);
    user.addRecipeToCook(recipe3);

		expect(user.filterRecipesToCookByIngredient('eggs')).to.deep.equal([recipe1]);
  });

});
