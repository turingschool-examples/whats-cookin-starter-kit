import { expect } from 'chai';
import ingredientSampleData from '../src/data/ingredientSampleData';
import Recipe from '../src/classes/recipe';

describe('Recipe', () => {
  let recipe;
  const ingredientSampleData = [
    { "id": 20081,"name": "wheat flour","estimatedCostInCents": 142, "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.", "number": 1, "image" : 'https://spoonacular.com/recipeImages/595736-556x370.jpg'},    

  { "id": 18372, "name": "bicarbonate of soda",      "estimatedCostInCents": 582, "instruction": "Add bicarbonate mix until combined.", "number": 2,      "image": "https://spoonacular.com/recipeImages/611858-556x370.jpg"}, 

  {"id": 18372, "name": "lemon zest", "estimatedCostInCents": 712,"instruction": "Add dry ingredients and mix on low just until incorporated. lemon zest.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.", "number": 3, "image": "https://spoonacular.com/recipeImages/621213-556x370.jpg"},

  { "id": 93672, "name": "whipped cream", "estimatedCostInCents": 312, "instruction": "Place the whipped cream balls into ungreased muffin pan. Sprinkle with sea salt.", "number": 4, "image": "https://spoonacular.com/recipeImages/799732-556x370.jpg"}];

beforeEach(() => {
  recipe = new Recipe({
    id: 1001,
    name: "Test Recipe",
    ingredients: ingredientSampleData,
    instructions: "Instructions for the recipe",
    image: "https://spoonacular.com/recipeImages/1001-556x370.jpg",
    tags: ["test", "recipe"]
  }, ingredientSampleData);
});

  it('should be a function', () => {
      expect(Recipe).to.be.a('function');
  })

  it('should be an instance of recipe', () => {
      expect(recipe).to.be.an.instanceof(Recipe);
  })
  it('should have an id', () => {
    ingredientSampleData.forEach(ingredient => {
      expect(ingredient).to.have.property('id');
    });
  });

  it('should have an image', () => {
    const result = recipe.getIngredientsName('Test Recipe');
      expect(recipe.image).to.deep.equal('https://spoonacular.com/recipeImages/1001-556x370.jpg');
  })

  it('should get ingredients by name', () => {
    const result = recipe.getIngredientsName('whipped cream');
    
    expect(result).to.deep.equal([{id: 93672, name: "whipped cream", estimatedCostInCents: 312,
    instruction: "Place the whipped cream balls into ungreased muffin pan. Sprinkle with sea salt.",
    number: 4, image: "https://spoonacular.com/recipeImages/799732-556x370.jpg"  }]);
  });

})