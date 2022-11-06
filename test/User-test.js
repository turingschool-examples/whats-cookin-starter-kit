import { expect } from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import { userInfo, singleRecipe1, singleRecipe2 } from '../src/test-data/User-test-data';

describe('User', () => {
  let recipeObject1, recipeObject2, newUser;
  beforeEach(() => {
    recipeObject1 = new Recipe(singleRecipe1)
    recipeObject2 = new Recipe(singleRecipe2)
    newUser = new User(userInfo)
  })

  it('Should be a function', () => {
    expect(User).to.be.a('function')
  })

  it('Should have a name', () => {
    expect(newUser.name).to.equal(userInfo.name)
  })

  it('Should have an id', () => {
    expect(newUser.id).to.equal(userInfo.id)
  })

  it('Should have a pantry', () => {
    expect(newUser.pantry).to.deep.equal(userInfo.pantry)
  })

  it('Should add a recipe to the recipesToCook array', () => {
    newUser.addRecipeToRecipesToCook(recipeObject1)
    newUser.addRecipeToRecipesToCook(recipeObject2)
    expect(newUser.recipesToCook[0]).to.deep.equal(recipeObject1)
    expect(newUser.recipesToCook[1]).to.deep.equal(recipeObject2)
  })

  it('should not add a recipe to recipesToCook if it already exists there ', () => {
    newUser.recipesToCook.push(recipeObject1)
    newUser.recipesToCook.push(recipeObject2)
    newUser.addRecipeToRecipesToCook(recipeObject1)
    newUser.addRecipeToRecipesToCook(recipeObject2)
    expect(newUser.recipesToCook).to.deep.equal(newUser.recipesToCook)
  });

  it('Should be able to remove a recipe from the recipesToCook array', () => {
    newUser.recipesToCook.push(recipeObject1)
    newUser.removeRecipeFromRecipesToCook(recipeObject1)
    expect(newUser.recipesToCook).to.deep.equal([])
  })

  it('Should be able to filter the recipiesToCook array by name', () => {
    newUser.recipesToCook.push(recipeObject1)
    newUser.filterRecipesToCookByName('Loaded Chocolate Chip Pudding Cookie Cups')
    expect(newUser.filterRecipesToCookByName('Loaded Chocolate Chip Pudding Cookie Cups')).to.deep.equal([recipeObject1])
  })

  it('Should return an empty array when name search results in no match', () => {
    newUser.recipesToCook.push(recipeObject1)
    expect(newUser.filterRecipesToCookByName('Ryan\'s famous chili')).to.deep.equal([])
  })

  it('Should be able to filter the recipiesToCook array by tag', () => {
    newUser.recipesToCook.push(recipeObject1)
    newUser.filterRecipesToCookByTag('snack')
    expect(newUser.filterRecipesToCookByTag('snack')).to.deep.equal([recipeObject1])
  })

  it('Should return an empty array when tag search results in no match', () => {
    newUser.recipesToCook.push(recipeObject1)
    expect(newUser.filterRecipesToCookByTag('Midnight Snack')).to.deep.equal([])
  })

  it('Should have a name', () => {
    expect(newUser.returnUserName()).to.equal("Saige O'Kon")
  })

  it('Should have an ID', () => {
    expect(newUser.returnUserId()).to.equal(1)
  })
});