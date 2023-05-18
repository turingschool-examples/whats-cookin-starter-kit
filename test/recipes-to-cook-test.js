import { expect } from 'chai';
import { recipesToCook, removeRecipes, matchRecipe} from '../src/recipes-to-cook'
import { sampleRecipeData } from './sampleIngredients';

describe('matchRecipe', () => {
  it('should be a function', () => {
    expect(matchRecipe).to.be.a('function');
  });

  it('should return the matching recipe object', () => {
    expect(matchRecipe(101, sampleRecipeData)).to.equal(sampleRecipeData[0]);
    expect(matchRecipe(102, sampleRecipeData)).to.equal(sampleRecipeData[1]);
  });
});


describe('recipesToCook', () => {
  it('should be a function', () => {
    expect(recipesToCook).to.be.a('function');
  });

  let currentUser = {
    id: 1,
    name: "Sadye Welch",
    recipesToCook: []
  }

  it('user should be able to bookmark multiple recipes', () => {
    recipesToCook(101, currentUser, sampleRecipeData);

    expect(currentUser.recipesToCook).to.deep.equal([sampleRecipeData[0]]);
    recipesToCook(106, currentUser, sampleRecipeData);
    
    expect(currentUser.recipesToCook).to.deep.equal([sampleRecipeData[0], sampleRecipeData[5]]);
    recipesToCook(102, currentUser, sampleRecipeData);
    expect(currentUser.recipesToCook).to.deep.equal([sampleRecipeData[0], sampleRecipeData[5], sampleRecipeData[1]]);
  });
});

describe('removeRecipes', () => {
  it('should be a function', () => {
    expect(removeRecipes).to.be.a("function");
  });

  it('removes recipe when bookmark is unchecked', () => {
    let currentUser = {
      id: 1,
      name: "Sadye Welch",
      recipesToCook: []
    }

    recipesToCook(101, currentUser, sampleRecipeData);
    recipesToCook(105, currentUser, sampleRecipeData);
    recipesToCook(102, currentUser, sampleRecipeData);
    recipesToCook(104, currentUser, sampleRecipeData);
    removeRecipes(101, currentUser);
    
    expect(currentUser.recipesToCook).to.deep.equal([sampleRecipeData[4], sampleRecipeData[1], sampleRecipeData[3]]);
    removeRecipes(104, currentUser);
    expect(currentUser.recipesToCook).to.deep.equal([sampleRecipeData[4], sampleRecipeData[1]]);
  })
});
//we need to have current suer and assign it to a user
//we can expect the recipes to cook to deep
//equal an array of recipe numbers
//sad path: ? no event.target so undefined
//removeREcips = test array length or a deep equal
//sadpath