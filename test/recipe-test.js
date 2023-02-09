import { expect } from 'chai';
import ingredientSampleData from '../src/data/ingredientSampleData';
import Recipe from '../src/classes/recipe';

describe('Recipe', () => {
  let recipe;
  const ingredientSampleData = [

    { id: 20081, name: "wheat flour", estimatedCostInCents: 142, number: 1, instruction: "In a bowl, whisk together the mayo, chili sauce and sriracha, then set it aside until ready to use.Toss the shrimp with the cornstarch until evenly coated.", image : 'https://spoonacular.com/recipeImages/595736-556x370.jpg', quantity: { amount: 2, unit: "cups"}},    

  { id: 18372, name: "bicarbonate of soda",      estimatedCostInCents: 582, number: 2, instruction: "Heat the canola oil in a large skillet over high heat.", image: "https://spoonacular.com/recipeImages/611858-556x370.jpg", quantity: { amount: 4, unit: "cups"}}, 

  {id: 18376, name: "lemon zest", estimatedCostInCents: 712, number: 3, instruction: "Add the shrimp and cook until it just turns pink and opaque, about 3 minutes.", image: "https://spoonacular.com/recipeImages/621213-556x370.jpg",quantity: { amount: 3, unit: "tsp"}},

  { id: 93672, name: "whipped cream", estimatedCostInCents: 312, number: 4, instruction: "Transfer the shrimp to a large bowl and toss with the mayo mixture.In a separate bowl, add the cabbage and lettuce. Toss with the olive oil, vinegar and honey until well coated. Toss the cilantro in. To serve the shrimp, mix with the slaw and garnish the entire thing with chives. Enjoy!", image: "https://spoonacular.com/recipeImages/799732-556x370.jpg", quantity: { amount: 2, unit: "cups"}}
  ];

beforeEach(() => {
  recipe = new Recipe({
    id: 1001,
    name: "Test Recipe",
    estimatedCostInCents: 712,
    ingredients: ingredientSampleData,
    instructions: "Instructions for the recipe",
    image: "https://spoonacular.com/recipeImages/1001-556x370.jpg",
    tags: ["test", "recipe"],
    quantity: [{amount: 0, unit: "cups"}]
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
    
    expect(result).to.deep.equal([{id: 93672, name: "whipped cream", estimatedCostInCents: 312, image: "https://spoonacular.com/recipeImages/799732-556x370.jpg", instruction:"Transfer the shrimp to a large bowl and toss with the mayo mixture.In a separate bowl, add the cabbage and lettuce. Toss with the olive oil, vinegar and honey until well coated. Toss the cilantro in. To serve the shrimp, mix with the slaw and garnish the entire thing with chives. Enjoy!", number: 4, quantity: { amount: 2, unit: "cups"}}
    ]);
  });

  it('should calculate the total cost of ingredients', () => {
    const ingredients = [
      { id: 20081, quantity: { amount: 2, unit: "cups"} },
      { id: 18372, quantity: { amount: 4, unit: "cups"} },
      { id: 18376, quantity: { amount: 3, unit: "tsp"} },
      { id: 93672, quantity: { amount: 2, unit: "tsp"} }
    ];
    const ingredientsData = [
      { id: 20081, estimatedCostInCents: 168 },
      { id: 18372, estimatedCostInCents: 582 },
      { id: 18376, estimatedCostInCents: 712 },
      { id: 93672, estimatedCostInCents: 312 }
    ];
    const expectedResult = '$53.72';

    const result = recipe.calculateIngredientsCosts(ingredientsData, ingredients);

    expect(result).to.equal(expectedResult);
  });

});







