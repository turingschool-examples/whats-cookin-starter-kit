const chai = require('chai');
const expect = chai.expect;
import {  findRecipeIngredients, calculateCost,  findDirections} from '../src/ingredient-functions'
import ingredientsData from '../src/data/ingredients-test-data.js';
import recipeData from '../src/data/recipe-test-data.js';

describe('findRecipeIngredients', () => {
  it('Should return an array of ingredient names for a specific recipe id passed as a number', () => {
    let ingredientList = findRecipeIngredients(recipeData, ingredientsData, 595736);
    expect(ingredientList).to.deep.equal([ 'wheat flour', 'bicarbonate of soda' ])
});
  it('Should return an array of ingredient names for a specific recipe id passed as a string', () => {
    let ingredientList = findRecipeIngredients(recipeData, ingredientsData, "595736");
    expect(ingredientList).to.deep.equal([ 'wheat flour', 'bicarbonate of soda' ])
});
})

describe('calculateCost', () => {
    it(' should calculate the cost of a given recipe\'s ingredients', () => {
      
      
    const clickedId = 595736
    const recipeCost = calculateCost(recipeData, ingredientsData, clickedId)
  
    expect(recipeCost).to.deep.equal('$5.04')
    });
    it(' should calculate the cost of a different given recipe\'s ingredients', () => {
      
      
      const clickedId = 678353
      const recipeCost = calculateCost(recipeData, ingredientsData, clickedId)
    
      expect(recipeCost).to.deep.equal('$31.58')
      })
})

describe('findDirections', () => {
  it('should be a function', () => {
        expect(findDirections).to.be.a('function');
   });
  it('should return recipe directions for a recipe', function() {
    var cookieDirections = findDirections(recipeData, "Loaded Chocolate Chip Pudding Cookie Cups");
    var cookieInstructions = [
      {
        "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
        "number": 3
      },
      {
        "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
        "number": 4
      },
      {
        "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
        "number": 5
      },
      {
        "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
        "number": 6
      }
    ];
    expect(cookieDirections).to.deep.equal(cookieInstructions);
  });
  it('should return recipe directions for another recipe', function() {
    var porkDirections = findDirections(recipeData, "Maple Dijon Apple Cider Grilled Pork Chops");
    var porkInstructions = [
      {
        "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
        "number": 1
      }
    ];
    expect(porkDirections).to.deep.equal(porkInstructions);
  });
});