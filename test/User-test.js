import { expect } from 'chai';
import User from '../src/classes/User';
import Recipe from '../src/classes/Recipe';
import { userInfo, singleRecipe1, singleRecipe2 } from '../src/test-data/User-test-data';
import Pantry from '../src/classes/Pantry';


describe('User', () => {
  let recipeObject1, recipeObject2, newUser, fancyPantry;

  beforeEach(() => {
    recipeObject1 = new Recipe(singleRecipe1)
    recipeObject2 = new Recipe(singleRecipe2)
    newUser = new User(userInfo)
    fancyPantry = new Pantry(newUser);
    newUser.pantry = fancyPantry;
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
    expect(newUser.pantry.pantry).to.deep.equal(userInfo.pantry)
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

  it('Should be able to add new ingredients to pantry that aren\'t currently in pantry', () => {
    newUser.addIngredientToPantry({
      "id": 6615,
      "name": "vegetable stock",
      "estimatedCostInCents": 613 }, 500)
    expect(newUser.pantry.pantry).to.deep.equal([
      {
        "ingredient": 11297,
        "amount": 4
      },
      {
        "ingredient": 1082047,
        "amount": 10
      },
      {
        "ingredient": 20081,
        "amount": 5
      },
      {
        "ingredient": 11215,
        "amount": 5
      },
      {
        "ingredient": 2047,
        "amount": 6
      },
      {
        "ingredient": 1123,
        "amount": 8
      },
      {
        "ingredient": 11282,
        "amount": 4
      },
      {
        "ingredient": 6172,
        "amount": 2
      },
      {
        "ingredient": 2044,
        "amount": 2
      },
      {
        "ingredient": 2050,
        "amount": 4
      },
      {
        "ingredient": 1032009,
        "amount": 3
      },
      {
        "ingredient": 5114,
        "amount": 3
      },
      {
        "ingredient": 1017,
        "amount": 2
      },
      {
        "ingredient": 18371,
        "amount": 7
      },
      {
        "ingredient": 1001,
        "amount": 6
      },
      {
        "ingredient": 99223,
        "amount": 2
      },
      {
        "ingredient": 1230,
        "amount": 2
      },
      {
        "ingredient": 9152,
        "amount": 4
      },
      {
        "ingredient": 10611282,
        "amount": 2
      },
      {
        "ingredient": 93607,
        "amount": 2
      },
      {
        "ingredient": 14106,
        "amount": 4
      },
      {
        "ingredient": 1077,
        "amount": 4
      },
      {
        "ingredient": 6150,
        "amount": 2
      },
      {
        "ingredient": 1124,
        "amount": 2
      },
      {
        "ingredient": 10011693,
        "amount": 4
      },
      {
        "ingredient": 1102047,
        "amount": 2
      },
      {
        "ingredient": 19206,
        "amount": 2
      },
      {
        "ingredient": 1145,
        "amount": 4
      },
      {
        "ingredient": 1002030,
        "amount": 4
      },
      {
        "ingredient": 12061,
        "amount": 2
      },
      {
        "ingredient": 19335,
        "amount": 4
      },
      {
        "ingredient": 15152,
        "amount": 3
      },
      {
        "ingredient": 9003,
        "amount": 2
      },
      {
        "ingredient": 18372,
        "amount": 3
      },
      {
        "ingredient": 2027,
        "amount": 2
      },
      {
        "ingredient": 6615,
        "amount": 500
      },
    ])
  })

  it('Should be able to add ingredients to pantry that are already in pantry', () => {
    newUser.addIngredientToPantry({
      "id": 11297,
      "name": "flat leaf parsley leaves",
    "estimatedCostInCents": 1030 }, 500)
    expect(newUser.pantry.pantry).to.deep.equal([
      {
        "ingredient": 11297,
        "amount": 504
      },
      {
        "ingredient": 1082047,
        "amount": 10
      },
      {
        "ingredient": 20081,
        "amount": 5
      },
      {
        "ingredient": 11215,
        "amount": 5
      },
      {
        "ingredient": 2047,
        "amount": 6
      },
      {
        "ingredient": 1123,
        "amount": 8
      },
      {
        "ingredient": 11282,
        "amount": 4
      },
      {
        "ingredient": 6172,
        "amount": 2
      },
      {
        "ingredient": 2044,
        "amount": 2
      },
      {
        "ingredient": 2050,
        "amount": 4
      },
      {
        "ingredient": 1032009,
        "amount": 3
      },
      {
        "ingredient": 5114,
        "amount": 3
      },
      {
        "ingredient": 1017,
        "amount": 2
      },
      {
        "ingredient": 18371,
        "amount": 7
      },
      {
        "ingredient": 1001,
        "amount": 6
      },
      {
        "ingredient": 99223,
        "amount": 2
      },
      {
        "ingredient": 1230,
        "amount": 2
      },
      {
        "ingredient": 9152,
        "amount": 4
      },
      {
        "ingredient": 10611282,
        "amount": 2
      },
      {
        "ingredient": 93607,
        "amount": 2
      },
      {
        "ingredient": 14106,
        "amount": 4
      },
      {
        "ingredient": 1077,
        "amount": 4
      },
      {
        "ingredient": 6150,
        "amount": 2
      },
      {
        "ingredient": 1124,
        "amount": 2
      },
      {
        "ingredient": 10011693,
        "amount": 4
      },
      {
        "ingredient": 1102047,
        "amount": 2
      },
      {
        "ingredient": 19206,
        "amount": 2
      },
      {
        "ingredient": 1145,
        "amount": 4
      },
      {
        "ingredient": 1002030,
        "amount": 4
      },
      {
        "ingredient": 12061,
        "amount": 2
      },
      {
        "ingredient": 19335,
        "amount": 4
      },
      {
        "ingredient": 15152,
        "amount": 3
      },
      {
        "ingredient": 9003,
        "amount": 2
      },
      {
        "ingredient": 18372,
        "amount": 3
      },
      {
        "ingredient": 2027,
        "amount": 2
      },
      { "ingredient": 6615,
      "amount": 500
    }
    ])
  })
});