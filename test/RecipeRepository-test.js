import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe'


describe('RecipeRepository', () => {
  let dataRecipe;
  let dataIngredient;
  let recipe;
  let recipeRepo;

  beforeEach(() => {
     
      dataRecipe =  {
          "id": 595736,
          "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
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
            },
            {
              "id": 1123,
              "quantity": {
                "amount": 1,
                "unit": "large"
              }
            },
            {
              "id": 19335,
              "quantity": {
                "amount": 0.5,
                "unit": "c"
              }
            }
          ],
          "instructions": [
            {
              "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
              "number": 1
            },
            {
              "instruction": "Add egg and vanilla and mix until combined.",
              "number": 2
            },
            {
              "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
              "number": 3
            }
          ],
          "name": "Loaded Chocolate Chip Pudding Cookie Cups",
          "tags": [
            "antipasti",
            "starter",
            "snack",
          ]
        };
        
      dataIngredient = [
        {
          "id": 20081,
          "name": "wheat flour",
          "estimatedCostInCents": 142
        },
        {
          "id": 18372,
          "name": "bicarbonate of soda",
          "estimatedCostInCents": 582
        },
        {
          "id": 1123,
          "name": "eggs",
          "estimatedCostInCents": 472
        },
        {
          "id": 19335,
          "name": "sucrose",
          "estimatedCostInCents": 902
        },
        {
          "id": 19206,
          "name": "instant vanilla pudding",
          "estimatedCostInCents": 660
        }
      ];
        
      recipe = new Recipe(dataRecipe, dataIngredient);

      recipeRepo = new RecipeRepository(recipe)
  });



  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of RecipeRepo', () => {
    expect(recipeRepo).to.be.an.instanceOf(RecipeRepository);
  })

  it('should filter by tag', () => {
    expect(recipeRepo.filterRecipeByTag('Antipasti')).to.equal('antipasti')
  });
})