const chai = require('chai');
const expect = chai.expect;
const RecipeRepo = require('../src/reciperepo');
const Recipe = require('../src/recipe');

describe('RecipeRepo', () => {
  let recipe, buffaloChicken, beefNoodle;

  beforeEach(() => {
    recipe = new RecipeRepo();
    buffaloChicken = {
      id: 991136,
      image: "https://spoonacular.com/recipeImages/991136-556x370.jpg",
      ingredients: [
        {
          id: 1001,
          quantity: {
            amount: 0.25,
            unit: 'cup'
          }
        },
        {
          id: 98871,
          quantity: {
            amount: 12,
            unit: 'unit'
          }
        },
      ],
      instructions: [
        { instruction: 'step 1', number: 1 },
        { instruction: 'step 1', number: 1 },
        { instruction: 'step 1', number: 1 }
      ],
      name: 'Buffalo Chicken Example',
      tags: ['lunch', 'main course', 'main dish', 'dinner']
    };
    beefNoodle = {
      id: 2,
      image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
      ingredients: [
        {
          id: 302,
          quantity: {
            amount: 10,
            unit: 'cup'
          }
        },
        {
          id: 410,
          quantity: {
            amount: 3,
            unit: 'tbs'
          }
        }
      ],
      instructions: [
        { instruction: 'step 1', number: 1 },
        { instruction: 'step 2', number: 2 },
        { instruction: 'step 3', number: 3 }
      ],
      name: 'Beef Noodle',
      tags: ['flour made', 'main dish', 'hot dish'],
    };
  })

  describe('Properties', () => {

    it('should be a function', () => {
      expect(RecipeRepo).to.be.a('function');
    });

    it('should be an instance of RecipeRepo', () => {
      expect(recipe).to.be.an.instanceof(RecipeRepo);
    });

    it('should have no recipe(s) by default', () => {
      expect(recipe.recipes).to.deep.equal([]);
    });

    it('should be able to hold a recipe if passed in', () => {
      recipe = new RecipeRepo([buffaloChicken]);
      expect(recipe.recipes).to.deep.equal([buffaloChicken]);
    });

    it('should be able to hold mutiple recipes', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle]);
      expect(recipe.recipes).to.deep.equal([buffaloChicken, beefNoodle]);
    });

    it('should create a Recipe instance from a recipe passed in', () => {
      recipe = new RecipeRepo([buffaloChicken]);
      expect(recipe.recipes[0]).to.be.an.instanceof(Recipe);
    });

    it('should be able to create multiple Recipe instances', () => {
      recipe = new RecipeRepo([buffaloChicken, beefNoodle]);
      expect(recipe.recipes[0]).to.be.an.instanceof(Recipe);
      expect(recipe.recipes[1]).to.be.an.instanceof(Recipe);
    });




  })


});