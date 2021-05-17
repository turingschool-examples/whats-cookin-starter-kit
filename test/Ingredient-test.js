import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe("Ingredient", () => {
  let ingredient
  beforeEach(() => {
    const ingredient = new Ingredient(20081, "wheat flour", 142);
    });
    it('should be a function', () => {

      expect(Ingredient).to.be.function());
    });
  it('should be an instance of Ingredient', () => {

    expect(ingredient).to.be.an.instanceof(Ingredient);
  });
  it('should be stored with an id number', () => {

    expect(ingredient.id).to.be.number());
    expect(ingredient.id).to.queal(20081));
  });
  it('should store the name of the ingredient', () => {

    expect(ingredient.name).to.be.string());
  });
  it('should store the cost of the ingredient', () => {

    expect(ingredient.cost).to.be.number());
  });
});
