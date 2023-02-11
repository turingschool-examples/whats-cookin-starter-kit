import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import User from '../src/classes/User';
import mockdata from '../src/data/mockdata';

describe.only('User', () => {
    let user, recipe;

    beforeEach(() => {
        user = new User(mockdata.users[0]);
        recipe = new Recipe(mockdata.recipes[0], mockdata.ingredients);
        
        user.saveRecipe(recipe);
    });

    it('should be a function', () => {
        expect(User).to.be.a('function');
    });

    it('should be an instance of User', () => {
        expect(user).to.be.an.instanceOf(User);
    });

    it('should have a name and id', () => {
        expect(user.name).to.equal("Saige O'Kon");
        expect(user.id).to.equal(1);
    });

    it('should have a pantry that holds ingredients', () => {
        expect(user.pantry[0]).to.deep.equal({"ingredient": 11297, "amount": 4});
    });

    it('should be able to hold recipes to cook', () => {
        expect(user.recipesToCook).to.be.an.instanceOf(RecipeRepository);
        expect(user.recipesToCook.recipes).to.be.an('array');
    });

    it('should be able to save recipes', () => {
        expect(user.recipesToCook.recipes).to.deep.equal([recipe]);
    });

    it('should be able to filter saved recipes by tag', () => {
        expect(user.filterSavedByTag('snack')).to.deep.equal([recipe]);
    });

    it('should return an empty array when filtered by a tag that doesn\'t exist', () => {
        expect(user.filterSavedByTag('chocolate').length).to.equal(0);
    });

    it('should be able to filter saved recipes by name', () => {
        user.filterSavedByName("Loaded Chocolate Chip Pudding Cookie Cups".toUpperCase());
        expect(user.recipesToCook.recipesByName).to.deep.equal([recipe]);
    });

    it('should return an empty array when filtered by a name that doesn\'t exist', () => {
        user.filterSavedByName("Chicken Marsala".toUpperCase());
        expect(user.recipesToCook.recipesByName.length).to.equal(0);
    });
});