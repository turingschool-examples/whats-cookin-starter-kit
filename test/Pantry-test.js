import { expect } from 'chai';
import Pantry from '../src/classes/Pantry';
import { ingredientsData } from '../src/data/ingredients';
import { usersData } from "../src/data/users"
import { recipeData } from "../src/data/recipes"
import Recipe from '../src/classes/Recipe';
import Users from '../src/classes/Users'
import Ingredient from '../src/classes/Ingredient'

describe('Pantry Test', () => {

    let user;
    let recipe;
    let pantry;

    beforeEach(() => {
        user = new Users(usersData[0]);
        recipe = new Recipe(recipeData[0], ingredientsData);
        pantry = new Pantry(user.pantry)
    });

    it('Should be a function', () => {
        expect(Pantry).to.be.a('function');
    })

    it('Should be an instance of Pantry', () => {
        // const pantry = new Pantry(ingredientsData[0])
        expect(pantry).to.be.an.instanceOf(Pantry)
    })
    
    it('Should be able to check a users pantry has enough of the ingredients', () => {
        recipe.makeIngredientData()
        pantry.checkUserIngredients(recipe)
        console.log(pantry.missingIngredients)
        expect(pantry.missingIngredients.length).to.equal(4)
    })
})
