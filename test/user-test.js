import { expect } from 'chai';
import User from '../src/classes/user';
import Recipe from '../src/classes/recipe';
import RecipeRepository from '../src/classes/RecipeRepository';
import Ingredient from '../src/classes/ingredient';

describe('user', () =>{
    let user;
    let recipe;
    let recipe2;
    let ingredient;

    beforeEach(() =>{
        user = new User(
        {
              name: "Brexye Quysh",
              id: 1,
              pantry: [
                {
                  ingredient: 11297,
                  amount: 4
                },
            ],
        }
        )
      
        ingredient = new Ingredient({

            id: 7,
            name: 'choccy chips',
            cost: 50
    })
          recipe = new Recipe({
            id: 4,
            name: 'cookies',
            ingredients: ingredient,

            tags: ["dessert"]   

              
        })
        recipe2 = new Recipe({
            id: 8,
            name: 'scrambled eggs',
            ingredients: ingredient,
            tags: ["breakfast"]
        })
    })


    it('should be a function', () => {
        expect(User).to.be.a('function');
    })

    it('user has a name', () => {
        expect(user.name).to.equal("Brexye Quysh")
    })

    it('user has an id', () => {
        expect(user.id).to.equal(1)
    })

    it('should add a recipe', () =>{
        user.addRecipeToCook(recipe)
        expect(user.recipesToCook).to.contain(recipe)
    })

    it('should remove a recipe', () => {
        user.addRecipeToCook(recipe)
        expect(user.recipesToCook).to.contain(recipe)
        user.removeRecipeToCook(recipe.id)
        expect(user.recipesToCook).to.not.contain(recipe)
    })
    

    it('should filter a recipe by the tag', () => {
        user.addRecipeToCook(recipe)
        user.addRecipeToCook(recipe2)
        const filteredRecipes = user.filterRecipesByTag('dessert')
        expect(filteredRecipes[0].id).to.equal(4)

    })
})
