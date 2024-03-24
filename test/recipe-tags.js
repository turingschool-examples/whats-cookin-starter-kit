import { expect } from 'chai';
import { recipeTagFilter } from '../src/tags.js';

describe('recipeTagFilter', function () {
    const recipes = [
        { name: 'Avocado toast', tags: ['vegan', 'breakfast', 'quick'] },
        { name: 'Steak & Potatoes', tags: ['American', 'dinner', 'steak'] },
        { name: 'Spaghetti & Meatballs', tags: ['Italian', 'dinner', 'pasta'] },
        { name: 'Cheese board', tags: [] }
    ];
    it.skip('should be able to find a recipe by its tag', function () {
    });

    it.skip('should be able to find more than recipe', function () {

    });

    it.skip('should be able to find recipes with no tag', function () {

    });
});