import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import Users from '../src/classes/Users';
import { recipeData } from '../src/data/recipes';
import { usersData } from '../src/data/users';
describe('User test', () => {
    let user;
    let recipe;
    let recipe1;
    let recipe2;
    beforeEach(() => {
        user = new Users(usersData[0]);  
        recipe = new Recipe(recipeData[0]);
        recipe1 = new Recipe(recipeData[1]);
        recipe2 = new Recipe(recipeData[2]);
    });
    it('Should be a function', () => {
        expect(Users).to.be.a('function');
    });
    it('Should be an instance of Users', () => {
        expect(user).to.be.an.instanceOf(Users)
    });
    it('Should be able to add recipes to cook', () => {
        user.addRecipesToCook(recipe);
        user.addRecipesToCook(recipe1);
        expect(user.recipeToCook.length).to.equal(2);
    });
    it('Should be able to remove recipes to Cook', () => {
        user.addRecipesToCook(recipe);
        user.addRecipesToCook(recipe1);
        user.addRecipesToCook(recipe2);
        user.removeRecipesToCook(recipe);
        expect(user.recipeToCook.length).to.equal(2);
    });
    it('Should be able to filter saved recipes using a tag', () => {
        user.addRecipesToCook(recipe);
        user.addRecipesToCook(recipe1);
        expect(user.filterByTagUser('snack').length).to.equal(1)
    })
    it('Should be able to filter saved recipes using a name', () => {
        user.addRecipesToCook(recipe);
        user.addRecipesToCook(recipe1);
        expect(user.filterByNameUser("Loaded Chocolate Chip Pudding Cookie Cups").length).to.equal(1)
    })
     
      it('should be able to be filtered by any name', () => {
        expect(user.filterByNameUser('booger').length).to.equal(0)
      })
})