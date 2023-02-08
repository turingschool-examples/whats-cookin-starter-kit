import { expect } from 'chai';
import User from '../src/classes/User';
import sampleUserData from '../src/data/sample-users';
import ingredientsData from '../src/data/ingredients';
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

    it('should start with no recipes to cook', () => {

        expect(user.recipesToCook).to.have.lengthOf(0);
    });

    it('should be able to add recipe to recipes to cook', () => {

        user.addToRecipesToCook(sampleRecipeData[0]);
        expect(user.recipesToCook).to.have.lengthOf(1);
    });

    it('should be able to remove recipe from recipes to cook', () => {

        user.addToRecipesToCook(sampleRecipeData[0]);
        user.addToRecipesToCook(sampleRecipeData[1]);

        expect(user.recipesToCook).to.have.lengthOf(2);

        user.removeFromRecipesToCook(user.recipesToCook[1]);

        expect(user.recipesToCook).to.have.lengthOf(1);
    });

    it('should be able to filter recipes to cook by tag', () => {

        user.addToRecipesToCook(sampleRecipeData[0]);
        user.addToRecipesToCook(sampleRecipeData[1]);
        user.filterRecipesToCook('starter', null);

        expect(user.filteredRecipes).to.have.lengthOf(1);
        expect(user.filteredRecipes[0].name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
    });

    it('should NOT be able to filter recipes to cook by tag if no recipes match that tag', () => {

        user.addToRecipesToCook(sampleRecipeData[0]);
        user.addToRecipesToCook(sampleRecipeData[1]);
        user.filterRecipesToCook('heaven', null);

        expect(user.filteredRecipes).to.have.lengthOf(0);
    });

    it('should be able to filter recipes to cook by name', () => {

        user.addToRecipesToCook(sampleRecipeData[0]);
        user.addToRecipesToCook(sampleRecipeData[1]);
        user.addToRecipesToCook(sampleRecipeData[2]);
        user.filterRecipesToCook(null, 'Pork Chops');

        expect(user.filteredRecipes).to.have.lengthOf(1);
        expect(user.filteredRecipes[0].name).to.equal('Maple Dijon Apple Cider Grilled Pork Chops');
    });

    it('should NOT be able to filter recipes to cook if no recipes match that name', () => {

        user.addToRecipesToCook(sampleRecipeData[0]);
        user.addToRecipesToCook(sampleRecipeData[1]);
        user.addToRecipesToCook(sampleRecipeData[2]);
        user.filterRecipesToCook(null, 'shortbread');

        expect(user.filteredRecipes).to.have.lengthOf(0);
    });


});