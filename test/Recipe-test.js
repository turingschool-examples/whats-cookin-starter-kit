import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient';



let testRecipe1;
let testRecipe2;
let testRecipe3;
let testRecipes;
describe('Recipe / Ingredient Test', () => {
    beforeEach(function() {
        testRecipes = [
            {
            "id": 111,
            "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
            "ingredients": 
              [
                {
                "id": 4025,
                "quantity": { //mayo
                  "amount": 1,
                  "unit": "cups"
                  }
                },{
                "id": 10020005,
                "quantity": {
                  "amount": 2, //farro
                  "unit": "units"
                  }
                },{
                "id": 1041009,
                "quantity": {
                  "amount": 3, //cheese
                  "unit": "tsp"
                  }
                },
              ],
            "instructions": 
              [
                {
                "instruction": "1-INSTRUCTION1",
                "number": 1
                },{
                "instruction": "1-INSTRUCTION2",
                "number": 2
                },{
                "instruction": "1-INSTRUCTION3",
                "number": 3
                }
              ],
            "name": "TEST RECIPE 1",
            "tags": 
              [
              "1antipasto",
              "1hor d'oeuvre"
              ]
            },
            {
            "id": 2222,
            "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
            "ingredients": 
              [
                {
                "id": 4025,
                "quantity": {
                  "amount": 1,
                  "unit": "2-A"
                  }
                },{
                "id": 4025,
                "quantity": {
                  "amount": 2,
                  "unit": "2-B"
                  }
                },{
                "id": 4025,
                "quantity": {
                  "amount": 3,
                  "unit": "2-C"
                  }
                },
              ],
            "instructions": 
              [
                {
                "instruction": "2-INSTRUCTION1",
                "number": 1
                },{
                "instruction": "2-INSTRUCTION2",
                "number": 2
                },{
                "instruction": "2-INSTRUCTION3",
                "number": 3
                }
              ],
            "name": "TEST RECIPE 2",
            "tags": [
              "2antipasto",
              "2hor d'oeuvre"
              ]
            },
            {
            "id": 3333,
            "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
            "ingredients": 
              [
                {
                "id": 4025,
                "quantity": {
                  "amount": 1,
                  "unit": "3-A"
                  }
                },{
                "id": 4025,
                "quantity": {
                  "amount": 2,
                  "unit": "3-B"
                  }
                },{
                "id": 4025,
                "quantity": {
                  "amount": 3,
                  "unit": "3-C"
                  }
                },
              ],
            "instructions": 
              [
                {
                "instruction": "3-INSTRUCTION1",
                "number": 1
                },{
                "instruction": "3-INSTRUCTION2",
                "number": 2
                },{
                "instruction": "3-INSTRUCTION3",
                "number": 3
                }
              ],
            "name": "TEST RECIPE 3",
            "tags": [
              "3antipasto",
              "3hor d'oeuvre"
              ]
            },
          ]


        testRecipe1 = new Recipe(testRecipes[0]);
        testRecipe2 = new Recipe(testRecipes[1]);
        testRecipe3 = new Recipe(testRecipes[2]);
    });
    it('Should be an instance of Recipe', () => {

        expect(testRecipe1).to.be.instanceOf(Recipe);
        expect(testRecipe2).to.be.instanceOf(Recipe);
        expect(testRecipe3).to.be.instanceOf(Recipe);
    });
    it('Be able to store data about the recipe (id, image, etc.)', () => {
        
        expect(testRecipe1.name).to.deep.equal(testRecipes[0].name)
        expect(testRecipe1.name).to.deep.equal("TEST RECIPE 1")

        expect(testRecipe2.name).to.deep.equal("TEST RECIPE 2")
        expect(testRecipe3.name).to.deep.equal("TEST RECIPE 3")
    });
    it('Should be able to store the ingredients of the recipe', () => {
        
        testRecipe1.updateIngredientData()

        expect(testRecipe1.ingredients[1]).to.be.instanceOf(Ingredient);
        expect(testRecipe1.ingredients[0].name).to.deep.equal("mayonnaise")
        expect(testRecipe1.ingredients[1].name).to.deep.equal("farro")
        expect(testRecipe1.ingredients[2].name).to.deep.equal("cheese")
        
    });
    it('Should be able to return the ingredients of the recipe', () => {
        
        expect(testRecipe1.returnIngredients()).to.deep.equal("mayonnaise,farro,cheese 1cups,2units,3tsp")
        //need more tests here but sample data isn't mapped correctly for ingredients

        
    });
    it('Should be able to return the estimated cost of the recipe', () => {
        
        expect(testRecipe1.returnCostEstimation()).to.deep.equal("3752 cents.")
        //need more tests here too lacking bc same reason as above

    });
    it('Should be able to return the instructions/directions', () => {
        
        
        expect(testRecipe1.returnInstructions()).to.deep.equal(['1-INSTRUCTION1', '1-INSTRUCTION2', '1-INSTRUCTION3'])
        expect(testRecipe2.returnInstructions()).to.deep.equal(['2-INSTRUCTION1', '2-INSTRUCTION2', '2-INSTRUCTION3'])
        expect(testRecipe3.returnInstructions()).to.deep.equal(['3-INSTRUCTION1', '3-INSTRUCTION2', '3-INSTRUCTION3'])


    });
  })