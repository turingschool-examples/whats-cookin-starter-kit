import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import { sampleIngredientsData, sampleUsersData, sampleRecipeData } from '../src/data/sample-data';

describe('Recipe', () => {
  sampleIngredientsData
  sampleUsersData
  sampleRecipeData
  let recipe


  beforeEach(() => {
    recipe = new Recipe(sampleRecipeData[0]);
    sampleIngredientsData;
    sampleUsersData;
    sampleRecipeData;
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });
  it('should hold property of id', () => {
    expect(recipe.id).to.equal(sampleRecipeData[0].id)
  });
  it("should hold property of image", () => {
    expect(recipe.image).to.equal(sampleRecipeData[0].image)
  });
  it("should hold property of ingredients", () => {
    expect(recipe.ingredients).to.deep.equal(sampleRecipeData[0].ingredients)
  });
  it("should hold property of instructions", () => {
    expect(recipe.instructions).to.deep.equal(sampleRecipeData[0].instructions)
  });
  it("should hold property of name", () => {
    expect(recipe.name).to.equal(sampleRecipeData[0].name)
  });
  it("should hold property of tags", () => {
    expect(recipe.tags).to.deep.equal(sampleRecipeData[0].tags)
  });
  it("should hold property of ingredient list", () => {
    expect(recipe.ingredientsList).to.deep.equal([])
  });
  it("determine the names of ingredients needed", () => {
    expect(recipe.determineIngredients(sampleIngredientsData)).to.deep.equal(['wheat flour', 'bicarbonate of soda', 'eggs', 'sucrose'])
  });
  it("should hold property of total cost", () => {
    expect(recipe.totalCost).to.equal()
  });
  it('should calculate the cost of its ingredients', () => {
    expect(recipe.calculateCost(sampleIngredientsData)).to.equal(14.27)
  });
  it('should return its instructions', () => {
    expect(recipe.getInstructions()).to.deep.equal(["1. In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.", "2. Add egg and vanilla and mix until combined."])
  });
});

