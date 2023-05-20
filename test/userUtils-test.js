import { expect } from 'chai';
import { saveRecipe, deleteRecipe, recipesToCook, addSavedRecipesToUser} from '../src/userUtils.js';
import usersData from '../src/data/users.js';
import recipeData1 from '../src/data/recipes-sample.js';


describe('saveRecipe', () => {
  it('should be a function', () => {
    expect(saveRecipe).to.be.a('function');
  });

  it('should be able to add a recipe to a users recipesToCook array', () => {
    const savedRecipes = saveRecipe(recipeData1, "Thai Chicken Tenders with Broiled Pineapple Slaw");

    expect(savedRecipes.length).to.equal(1);
    expect(savedRecipes[0]).to.equal(recipesToCook[0]);
  });

  it('should not have duplicate recipes in the array', () => {
    const savedRecipes = saveRecipe(recipeData1, "Thai Chicken Tenders with Broiled Pineapple Slaw");
    const savedRecipeDuplicate = saveRecipe(recipeData1, "Thai Chicken Tenders with Broiled Pineapple Slaw");

    expect(savedRecipeDuplicate.length).to.equal(1);
    expect(savedRecipes[0]).to.equal(recipesToCook[0]);
  });
});

describe('deleteRecipe', () => {
  it('should be a function', () => {
    expect(deleteRecipe).to.be.a('function');
  });

  it('should be able to remove a recipe from the data model array', () => {
    const savedRecipes = saveRecipe(recipeData1, "Thai Chicken Tenders with Broiled Pineapple Slaw");
    const newRecipes = deleteRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");

    expect(newRecipes.length).to.equal(0);
    expect(newRecipes).to.deep.equal(recipesToCook);
  });
});

describe('addSavedRecipesToUser', () => {
  it('should be a function', () => {
    expect(addSavedRecipesToUser).to.be.a('function');
  });

  it('should update the currentUser object with recipesToCook array', () => {
    const savedRecipes = saveRecipe(recipeData1, "Thai Chicken Tenders with Broiled Pineapple Slaw");
    const savedRecipes2 = saveRecipe(recipeData1, "Thai Chicken Tenders with Broiled Pineapple Slaw");
    const currentUser = usersData[0];
    const updatedUser = addSavedRecipesToUser(currentUser, savedRecipes);

    expect(savedRecipes.length).to.equal(1);
    expect(savedRecipes[0]).to.equal(recipesToCook[0]);
    expect(updatedUser.recipesToCook).to.equal(savedRecipes);
  });
});