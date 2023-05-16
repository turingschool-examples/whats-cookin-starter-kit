import { assert } from 'chai'
import { sampleIngredientsData, sampleRecipeData } from '../src/data/sampleData';
import {
  getInstructions,
  getIngredients,
  calculateRecipeCost,
} from '../src/recipes';

describe('recipe', () => {
  const cookies = sampleRecipeData[0];
  const porkChops = sampleRecipeData[1];
  const allIngredients = sampleIngredientsData;
  it('should be a funciton', () => {
    // Determine the names of ingredients needed for a given recipe.
    // Calculate the cost of a given recipe’s ingredients
    assert.isFunction(getInstructions);
    assert.isFunction(getIngredients);
    assert.isFunction(calculateRecipeCost);
  });
  it('should determine the names of ingredients needed for a recipe', () => {
    const cookieIngredients = getIngredients(cookies, allIngredients);
    const cookieIngredientList = [
      'wheat flour',
      'bicarbonate of soda',
      'eggs',
      'sucrose',
      'instant vanilla pudding',
      'brown sugar',
      'salt',
      'fine sea salt',
      'semi sweet chips',
      'unsalted butter',
      'vanilla',
    ];
    assert.deepEqual(cookieIngredients, cookieIngredientList);
  });
  it.skip('should determine the names of ingredients for a different recipe', () => {});
  it.skip("should calculate the cost of a given recipe's ingredients", () => {
    // [
    //   {
    //     "id": 20081,
    //     "quantity": {
    //       "amount": 1.5,
    //       "unit": "c"
    //     }
    //   },
    //   {
    //     "id": 18372,
    //     "quantity": {
    //       "amount": 0.5,
    //       "unit": "tsp"
    //     }
    //   },
    //   {
    //     "id": 1123,
    //     "quantity": {
    //       "amount": 1,
    //       "unit": "large"
    //     }
    //   },
    //   {
    //     "id": 19335,
    //     "quantity": {
    //       "amount": 0.5,
    //       "unit": "c"
    //     }
    //   },
    //   {
    //     "id": 19206,
    //     "quantity": {
    //       "amount": 3,
    //       "unit": "Tbsp"
    //     }
    //   },
    //   {
    //     "id": 19334,
    //     "quantity": {
    //       "amount": 0.5,
    //       "unit": "c"
    //     }
    //   },
    //   {
    //     "id": 2047,
    //     "quantity": {
    //       "amount": 0.5,
    //       "unit": "tsp"
    //     }
    //   },
    //   {
    //     "id": 1012047,
    //     "quantity": {
    //       "amount": 24,
    //       "unit": "servings"
    //     }
    //   },
    //   {
    //     "id": 10019903,
    //     "quantity": {
    //       "amount": 2,
    //       "unit": "c"
    //     }
    //   },
    //   {
    //     "id": 1145,
    //     "quantity": {
    //       "amount": 0.5,
    //       "unit": "c"
    //     }
    //   },
    //   {
    //     "id": 2050,
    //     "quantity": {
    //       "amount": 0.5,
    //       "unit": "tsp"
    //     }
    //   }
    // ]
  });
  it.skip("should calulcaulte the cost of a different receipe's ingredients", () => {});
  it('should return the intsructions for a given recipe', () => {
    const cookieInstructions = getInstructions(cookies);
    const cookieDirections = [
      'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
      'Add egg and vanilla and mix until combined.',
      'Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.',
      'Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.',
      'Bake for 9 to 10 minutes, or until you see the edges start to brown.',
      'Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.',
    ];

    assert.deepEqual(cookieInstructions, cookieDirections);
  });
  it('should return instructions for a different recipe', () => {
    const porkChopInstructions = getInstructions(porkChops);
    const porkChopDirections = [
      'Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!',
    ];

    assert.deepEqual(porkChopInstructions, porkChopDirections);
  });
});
