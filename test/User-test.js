import { expect } from 'chai';
import User from '../src/classes/User';
import sampleUserData from '../src/data/sample-users';
import sampleRecipeData from '../src/data/sample-recipe-data';

describe('User', () => {
    let user;

    beforeEach(() => {
        user = new User(sampleUserData[0]);
    });

    it('should be an instance of User', () => 

        expect(user).to.be.instanceOf(User));

    it('should have a name', () => {

        expect(user.name).to.equal('Saige O\'Kon');
    });

    it('should have an id', () => {

        expect(user.id).to.equal(1);
    });

    it('should have a pantry', () => {

        expect(user.pantry).to.have.lengthOf(35);
    });

    // it('should be able to add recipe to recipes to cook', () => {

    //     user.addToSavedRecipes(sampleRecipeData[0]);
    //     user.savedRecipes = user.changeIdToRecipe([678353])
    //     expect(user.savedRecipes.recipes).to.have.lengthOf(1);
    // });

    // it('should be able to remove recipe from recipes to cook', () => {

    //     user.addToSavedRecipes(sampleRecipeData[0]);
    //     user.addToSavedRecipes(sampleRecipeData[1]);

    //     expect(user.savedRecipes.recipes).to.have.lengthOf(2);

    //     user.removeFromSavedRecipes(sampleRecipeData[1]);

    //     expect(user.savedRecipes.recipes).to.have.lengthOf(1);
    // });

});