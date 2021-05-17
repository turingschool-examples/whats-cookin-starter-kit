import { expect } from 'chai';
import User = from "../src/User";
import Ingredient from '../src/classes/Ingredient';

describe("User", () => {
  let user
  beforeEach(() => {
    user = new User(11297, "Saige O'Kon", ["ge", "o", "i"], ingredient);
    ingredient = new Ingredient(18372, "bicarbonate of soda", 582);
    });
    it('should be a function', () => {

      expect(User).to.be.function());
    });
  it('should be an instance of User', () => {

    expect(user).to.be.an.instanceof(User);
  });
  it('should be stored with an id number', () => {

    expect(user.id).to.be.number());
  });
  it('should store the name of the user', () => {

    expect(user.name).to.be.string());
  });
  it('should store related ingredients', () => {

    expect(user.pantry).to.deep.equal(["ge", "o", "i"]));
  });
  it('should be able to store favorites recipes', () => {

    user.addTofavoriteRecipe("eggs");

    expect(user.favoriteRecipes).to.deep.equal(["eggs"]));
    // expect(user.addToFavoriteRecipe())
  });
  it('should store all the required ingredients for the recipe', () => {

        user.addToRecipeCook("cookies");

     expect(user.recipesToCook).to.deep.equal(["cookies"]));
     // expect(user.addToRecipeCook());
  });
});
