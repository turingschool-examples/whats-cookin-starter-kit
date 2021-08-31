import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('RecipeRepo', () => {
  
  let recipeRepo;

  let ingredientRepo = [{
    "id": 1009016,
    "name": "apple cider",
    "estimatedCostInCents": 468
  },
  {
    "id": 9003,
    "name": "apple",
    "estimatedCostInCents": 207
  }]

  beforeEach(() => {
    recipeRepo = new RecipeRepository(
      [{ "id": 595736,
      "image": "some image",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "some instructions",
          "number": 1
        },
        {
          "instruction": "some instructions",
          "number": 2
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
      ]
    },
    {
      "id": 678353,
      "image": "some image",
      "ingredients": [
        {
          "id": 1009016,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 9003,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        }
      ],
      "instructions": [
        {
          "instruction": "some instructions",
          "number": 1
        }
      ],
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    }])
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should hold recipe data', () => {
    expect(recipeRepo.recipeRepo).to.deep.equal(recipeRepo.recipeRepo)    
  })
//filter by name has to be in arrays
  it('Should filter through recipes by one or more tags', () => {
    expect(recipeRepo.filterByTags(["main dish"])).to.deep.equal([recipeRepo.recipeRepo[1]])
    expect(recipeRepo.filterByTags(["main dish", "snack"])).to.deep.equal([recipeRepo.recipeRepo[1], recipeRepo.recipeRepo[0]])
  })
//filter by name has to be strings
  it('Should filter by name', () => {
    expect(recipeRepo.filterByName("Loaded Chocolate Chip Pudding Cookie Cups")).to.deep.equal([recipeRepo.recipeRepo[0]])
  })

  it('Should filter by name partial name', () => {
    expect(recipeRepo.filterByName("Chocolate Chip Pudding")).to.deep.equal([recipeRepo.recipeRepo[0]])

  })

  it('Should filter by ingredients', () => {
    expect(recipeRepo.filterByIngredients("apple cider, apple", ingredientRepo)).to.deep.equal([recipeRepo.recipeRepo[1]])
  })

})