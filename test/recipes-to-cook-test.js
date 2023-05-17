import { expect } from 'chai';
import { recipesToCook, removeRecipes } from '../src/recipes-to-cook'
import { sampleUserData} from './sampleUsers'
import { sampleRecipeData } from './sampleIngredients';


describe('recipesToCook', () => {
  it('should be a fuction', () => {
    expect(recipesToCook).to.be.a('function');
  });

  let currentUser = {
    id: 1,
    name: "Sadye Welch",
    recipesToCook: []
  }

  it('user should be able to bookmark multiple recipes', () => {
    recipesToCook(101, currentUser);
    expect(currentUser.recipesToCook).to.deep.equal(sampleRecipeData[0]);
    recipesToCook(106, currentUser);
    expect(currentUser.recipesToCook).to.have.same.member(sampleRecipeData[0], sampleRecipeData[5]);
    recipesToCook(102, currentUser);
    expect(currentUser.recipesToCook).to.have.same.member(sampleRecipeData[0], sampleRecipeData[5], sampleRecipeData[1]);
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

    recipesToCook(2, currentUser);
    recipesToCook(3, currentUser);
    recipesToCook(4, currentUser);
    removeRecipes(2, currentUser)

    expect(currentUser.recipesToCook).to.deep.equal([3, 4])
  })
});
//we need to have current suer and assign it to a user
//we can expect the recipes to cook to deep
//equal an array of recipe numbers
//sad path: ? no event.target so undefined
//removeREcips = test array length or a deep equal
//sadpath