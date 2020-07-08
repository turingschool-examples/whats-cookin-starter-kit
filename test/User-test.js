/* eslint-disable */

const expect = require('chai').expect;
const usersData = require('../data/users.js');
// const recipeData = require('../data/recipes.js');

const User = require('../src/User');
// const Recipe = require('../src/Recipe');

describe('User', function () {
    let user1;
    let user2;
    let recipe;
    // let recipe1;
    // let recipe2;

    beforeEach(function () {
        user1 = new User(usersData[0].name, usersData[0].id, usersData[0].pantry);
        user2 = new User(usersData[1].name, usersData[1].id, usersData[1].pantry);
        // recipe1 = new Recipe(recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
        // // recipe1 = new Recipe(usersRecipes.recipeData[0].id, recipeData[0].image, recipeData[0].ingredients, recipeData[0].instructions, recipeData[0].name, recipeData[0].tags);
        // recipe2 = new Recipe(recipeData[1].id, recipeData[1].image, recipeData[1].ingredients, recipeData[1].instructions, recipeData[1].name, recipeData[1].tags);

        // recipe1 = new Recipe(recipeData);
    });

    it('should be a function', function () {
        expect(User).to.be.a('function');
    });

    it('should be an instance of User', function () {
        expect(user2).to.be.an.instanceof(User);
        expect(user1).to.be.an.instanceof(User);
    });

    it('should have a unique id', function () {
        expect(user1.id).to.equal(1);
        expect(user2.id).to.equal(2);
    });

    it('should have a property of name', () => {
        expect(user1.name).to.equal('Saige O\'Kon');
        expect(user2.name).to.equal('Ephraim Goyette');
    })

    it('should have a property of pantry', function () {
        expect(user1.pantry).to.deep.equal(usersData[0].pantry);
        expect(user2.pantry).to.deep.equal(usersData[1].pantry);
    });

    it('should have a list of favoriteRecipes', function () {
        expect(user1.favoriteRecipes).to.deep.equal([]);
        expect(user2.favoriteRecipes).to.deep.equal([]);
    });

    it('should have a property of recipesToCook', function () {
        expect(user1.recipesToCook).to.deep.equal([]);
        expect(user2.recipesToCook).to.deep.equal([]);
    });

    describe('addFavoriteRecipe', function () {
        it('should be able to add favorite a recipe', () => {
            user1.addFavoriteRecipe(595736);
            expect(user1.favoriteRecipes).to.deep.equal([595736]);
        });
    });

    describe('removeFavoriteRecipe', function () {
        it('should be able to remove a favorite recipe', () => {
            user1.removeFavoriteRecipe(595736);
            expect(user1.favoriteRecipes).to.deep.equal([]);
        });
    });

    describe('addRecipesToCook', function () {
        it('should be able to add a recipe to recipesToCook', () => {
            user1.addRecipesToCook(595736);
            expect(user1.recipesToCook).to.deep.equal([595736]);
        });
    });

    describe('removeRecipesToCook', function () {
        it('should be able to remove a recipe from recipesToCook', () => {
            user1.removeRecipesToCook(595736);
            expect(user1.recipesToCook).to.deep.equal([]);
        });
    });

    describe('findRecipesByType', function () {
        it('should be able to find a recipe by type', () => {
            let mockRecipes = [{
                id: 1,
                tags: ['good', 'bad']
            }, {
                id: 2,
                tags: ['good', 'food']
            }] 
            // how do I know the function has been implemented correctly
            // first case returns multiples if they match
            // returns 1 if only 1 matches
            // returns 0 if none match
            expect(user1.findRecipesByType(mockRecipes, 'anything')).to.deep.equal([]);
            expect(user1.findRecipesByType(mockRecipes, 'bad')).to.deep.equal([mockRecipes[0]]);
            expect(user1.findRecipesByType(mockRecipes, 'good')).to.deep.equal(mockRecipes);

        });
        });
    });