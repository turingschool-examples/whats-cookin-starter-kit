import { expect } from 'chai';
import { recipesFromTag, recipesfromName, findRecipe, findIngredientNames, calculateRecipeCost, recipeInstructions, shuffleData } from '../src/recipeUtils';
import recipeData from '../src/data/recipes-sample.js';
import ingredientsData from '../src/data/ingredients-sample.js';
import { recipesToCook, saveRecipe } from '../src/userUtils';


describe('RecipeUtils', () => {
  it('Should be a function', () => {
    expect(recipesFromTag).to.be.a('function');
  });
  it ('Should filter recipes based on tag', () => {
    const expected = 'Loaded Chocolate Chip Pudding Cookie Cups'
    const filtered = recipesFromTag(recipeData, ['starter'])
    expect(filtered.length).to.equal(1)
    expect(filtered[0].name).to.equal(expected)
  });
  it('should filter recipesToCook based on a tag', ()=> {
    const save = saveRecipe(recipeData, 'Loaded Chocolate Chip Pudding Cookie Cups')
    const sav2 = saveRecipe(recipeData, 'Maple Dijon Apple Cider Grilled Pork Chops')
    const expectedRecipesToCook = [recipeData[0]];
    const filteredRecipesToCook = recipesFromTag(recipesToCook, ['starter'])

    expect(filteredRecipesToCook.length).to.equal(1)
    expect(filteredRecipesToCook).to.deep.equal(expectedRecipesToCook)
  })
  it ('Should filter recipes if tag applies to multiple recipes', () => {
    const expected = ['Thai Chicken Tenders with Broiled Pineapple Slaw', 'Maple Dijon Apple Cider Grilled Pork Chops']
    const filtered = recipesFromTag(recipeData, ['lunch'])
    expect(filtered.length).to.equal(2)
    const names = filtered.map(f => f.name)
    expect(names).to.have.members(expected)
  });
  it('Should filter recipesToCook if tag applies to multiple recipes', () => {
    const save = saveRecipe(recipeData, 'Loaded Chocolate Chip Pudding Cookie Cups')
    const sav2 = saveRecipe(recipeData, 'Maple Dijon Apple Cider Grilled Pork Chops')
    const sav3 = saveRecipe(recipeData, 'Thai Chicken Tenders with Broiled Pineapple Slaw')
    const expectedRecipesToCook2 = [recipeData[1], recipeData[3]]
    const filteredRecipesToCook2 = recipesFromTag(recipesToCook, ['main dish'])

    expect(filteredRecipesToCook2.length).to.equal(2)
    expect(filteredRecipesToCook2).to.deep.equal(expectedRecipesToCook2)
  });
  it ('Should filter recipes when multiple tags are applied', () => {
    const expected = ['Thai Chicken Tenders with Broiled Pineapple Slaw', 'Maple Dijon Apple Cider Grilled Pork Chops']
    const filtered = recipesFromTag(recipeData, ['lunch', 'main dish'])
    expect(filtered.length).to.equal(2)
    const names = filtered.map(f => f.name)
    expect(names).to.have.members(expected)
  });
  it ('Should filter recipes based on name', () => {
    const filtered = recipesfromName(recipeData, 'Thai Chicken Tenders with Broiled Pineapple Slaw')
    expect(filtered.length).to.equal(1)
  })
  it ('Should filter recipes based on a similar name', () => {
    const expected = 'Thai Chicken Tenders with Broiled Pineapple Slaw'
    const filtered = recipesfromName(recipeData, 'chicken')
    expect(filtered.length).to.equal(1)
    expect(filtered[0].name).to.equal(expected)
  })
  it('Should filter recipesToCook based on name', () => {
    const save1 = saveRecipe(recipeData, 'Thai Chicken Tenders with Broiled Pineapple Slaw')
    const save2 = saveRecipe(recipeData, 'Loaded Chocolate Chip Pudding Cookie Cups')
    console.log('0',recipesToCook)
    const filtered = recipesfromName(recipesToCook, 'Thai Chicken Tenders with Broiled Pineapple Slaw')
    console.log('1',filtered)

    expect(filtered.length).to.equal(1)
  })
  it ('Should return nothing if no recipes match the user input name', () => {
    const filtered = recipesfromName(recipeData, 'Spicy Potatoes')
    expect(filtered.length).to.equal(0)
  })
});

describe('findRecipe', () => {
  it('should be a function', () => {
    expect(findRecipe).to.be.a('function');
  });

  it('should return the correct recipe based on the recipe name', () => {
    const recipeName = 'Loaded Chocolate Chip Pudding Cookie Cups';
    const recipe = findRecipe(recipeData, recipeName);
    expect(recipe).to.deep.equal(recipeData[0]);
  });

  it('should return undefined if the recipe is not found', () => {
    const recipeName = 'Spaghetti and Meatballs';
    const recipe = findRecipe(recipeData, recipeName);
    expect(recipe).to.be.undefined;
  });
});

describe('findIngredientNames', () => {
  it('should be a function', () => {
    expect(findRecipe).to.be.a('function');
  });

  it.skip('should return an array of ingredient names for specific recipe', () => {
    const recipeName = 'Loaded Chocolate Chip Pudding Cookie Cups';
    const ingredients = findIngredientNames(recipeData, recipeName);
    expect(ingredients).to.deep.equal([ 'wheat flour',
      'bicarbonate of soda',
      'eggs',
      'sucrose',
      'instant vanilla pudding',
      'brown sugar',
      'salt',
      'fine sea salt',
      'semi sweet chips',
      'unsalted butter',
      'vanilla' ]);
  });

  it.skip('should return message if no recipe is found', () => {
    const recipeName = 'Not a recipe';
    const ingredients = findIngredientNames(recipeData, ingredientsData,recipeName);
    expect(ingredients).to.equal("Sorry, we don't have that recipe.");
  });
});

describe('calculateRecipeCost', () => {
  it('should be a function', () => {
    expect(calculateRecipeCost).to.be.a('function');
  });

  it.skip('should return the total cost of a recipe', () => {
    const recipe = recipeData[0];
    const expectedCost = '177.76';
    const actualCost = calculateRecipeCost(recipe);
    expect(actualCost).to.equal(expectedCost);
  })

  it('should return undefined if the recipe cannot be found', () => {
    const recipe = recipeData[1000];
    const totalCost = calculateRecipeCost(recipe)
    expect(totalCost).to.equal('Sorry, that recipe cannot be found.')
  })
});

describe('recipeInstructions', () => {
  it('should be a function', () => {
    expect(recipeInstructions).to.be.a('function');
  });

  it('should return a given recipes instruction in numerical order', () => {
    const recipe = recipeData[0];
    const instructions = recipeInstructions(recipe);
    expect(instructions).to.equal('1. In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy. 2. Add egg and vanilla and mix until combined. 3. Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees. 4. Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt. 5. Bake for 9 to 10 minutes, or until you see the edges start to brown. 6. Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.')
  });

  it('should return a message if the recipe cannot be found', () => {
    const recipe = recipeData[1000]
    const instructions = (recipeInstructions(recipe));
    expect(instructions).to.equal("Sorry, that recipe cannot be found.")
  });

describe('shuffleData function', () => {
  it ('should randomize the recipe array order', () => {
    const shuffled = shuffleData(recipeData)
    expect(shuffled).to.not.equal(recipeData)  
  })
})

});

describe('saveRecipe', () => {
  it('should be a function', () => {
    expect(saveRecipe).to.be.a('function');
  });

  it('should be able to add a recipe to the data model array', () => {
    const savedRecipes = saveRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");

    expect(savedRecipes.length).to.equal(1);
    expect(savedRecipes[0]).to.equal(recipesToCook[0]);
  });

  it('should not have duplicate recipes in the array', () => {
    const savedRecipes = saveRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");
    const savedRecipeDuplicate = saveRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");

    expect(savedRecipes.length).to.equal(1);
    expect(savedRecipes[0]).to.equal(recipesToCook[0]);
  });
});

describe('deleteRecipe', () => {
  it('should be a function', () => {
    expect(deleteRecipe).to.be.a('function');
  });

  it('should be able to remove a recipe from the data model array', () => {
    const recipes = saveRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");
    const newRecipes = deleteRecipe("Thai Chicken Tenders with Broiled Pineapple Slaw");

    expect(newRecipes.length).to.equal(0);
    expect(newRecipes).to.deep.equal(recipesToCook);
  });
});