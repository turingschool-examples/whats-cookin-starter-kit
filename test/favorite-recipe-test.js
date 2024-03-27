import { expect } from "chai"
import { recipe1, recipe2 } from "../src/data/mockRecipe";
import { isFavorited } from "../src/favorite-recipe";


describe('isFavorited', () => {
    let favoriteRecipes;
    let recipe_dataset;
  
    beforeEach(() => {
      favoriteRecipes = [recipe1, recipe2];
      recipe_dataset = [recipe1, recipe2];
    });
  
    it('returns favorited recipes that exist in the dataset', () => {
      const favoritedRecipes = isFavorited(favoriteRecipes, recipe_dataset);
  
      expect(favoritedRecipes).to.deep.equal([recipe1, recipe2]);
    });
  
    it('returns an empty array if no favorited recipes are found in the dataset', () => {
      favoriteRecipes = [];
  
      const favoritedRecipes = isFavorited(favoriteRecipes, recipe_dataset);
  
      expect(favoritedRecipes).to.deep.equal([]);
    });
  });