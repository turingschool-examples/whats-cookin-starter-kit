const chai = require("chai");
const expect = chai.expect;
let recipe;


const Recipes = require("../src/scripts/Recipes");

beforeEach(() => {
  // Will need to input arguments to match the data file
  recipe = new Recipes('Loaded Chocolate Chip Pudding Cookie Cups', 595736,
'https://spoonacular.com/recipeImages/595736-556x370.jpg', [
  {
    "number": 1,
    "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
  },
  {
    "number": 2,
    "instruction": "Add egg and vanilla and mix until combined."
  }], [34, 28, 21], [
    "lunch",
    "main course",
    "main dish",
    "dinner"
  ]);
  })

describe ('Recipes', () => {

  it('should be a function', () => {
    expect(Recipes).to.be.a('function');
  })

  it('should be an instance of a Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipes);
  })

  it('should have the name of the Recipe', () => {
    expect(recipe.name).to.equal('Loaded Chocolate Chip Pudding Cookie Cups');
  })

  it('should have a unique id', () => {
    expect(recipe.id).to.equal(595736);
  })

  it('should have a unique image path', () => {
    expect(recipe.image).to.equal('https://spoonacular.com/recipeImages/595736-556x370.jpg');
  })

  it('should have instructions', () => {
    expect(recipe.instructions).to.deep.equal([
      {
        "number": 1,
        "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy."
      },
      {
        "number": 2,
        "instruction": "Add egg and vanilla and mix until combined."
      }]);
  })

  it('should have a list of Ingrediets', () => {
    expect(recipe.ingredients).to.deep.equal([34, 28, 21]);
  })

  it('should have a list of tags', () => {
    expect(recipe.tags).to.deep.equal([
      "lunch",
      "main course",
      "main dish",
      "dinner"
    ]);
  })
});
