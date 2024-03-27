import { expect } from "chai";
import { recipe1, recipe2 } from "../src/data/mockRecipe.js";
import { addRecipeToArray, removeRecipeFromArray } from '../src/cookbook.js';



describe('recipesToCook', function() {
    let recipesToCook;

    beforeEach(() => {
        recipesToCook = [];
    });

    it('should add a recipe to the cookbook', function() {
        addRecipeToArray(recipesToCook, recipe1);
        
        expect(recipesToCook).to.include(recipe1);
    });

    it('should add multiple unique recipes to the cookbook', function() {
        addRecipeToArray(recipesToCook, recipe1);
        addRecipeToArray(recipesToCook, recipe2);

        expect(recipesToCook).to.deep.equal([recipe1, recipe2]);
    });

    it('should only add unique recipes to the cookbook', function() {
        addRecipeToArray(recipesToCook, recipe1);
        addRecipeToArray(recipesToCook, recipe1);
        addRecipeToArray(recipesToCook, recipe2);
        addRecipeToArray(recipesToCook, recipe2);

        expect(recipesToCook.length).to.equal(2); 
        expect(recipesToCook).to.deep.equal([recipe1, recipe2]);
    });
});

describe('removeRecipesToCook', function() {
    let recipesToCook;

    beforeEach(() => {
        recipesToCook = [recipe1, recipe2];
    });

    it('should be able to remove a recipe from the cookbook', function() {
        removeRecipeFromArray(recipesToCook, recipe1.id);

        expect(recipesToCook).to.not.include(recipe1);
        expect(recipesToCook).to.include(recipe2);
    });
});
