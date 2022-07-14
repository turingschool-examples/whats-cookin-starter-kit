import { expect } from 'chai';
import { sampleRecipeData } from '../src/data/sampleRecipeData.js';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';

//Should we have multiple describe block for each test file to break up what is being tested? (i.e. class constructor vs class methods)

describe('Recipe Repository', () => {
  let recipe;
  let repository;

  beforeEach( () => {
    // ingredient = new Ingredient(ingredientData);
    recipe = new Recipe(sampleRecipeData);
    repository = new RecipeRepository(recipe);
  })

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('should be an instance of the Recipe Respository', () => {
    expect(repository).to.be.an.instanceOf(RecipeRepository);
  });

  it('should have recipes', () => {
    expect(repository.recipes[2].id).to.equal(550940);
    expect(repository.recipes[2].name).to.equal('Egg and Rapini Casserole');
  });

  it('should have tags for each recipe', () => {
    expect(repository.recipes[1].tags).to.deep.equal('side dish')
  });

  it('should have ingredient information for a recipe', () => {
    const ingredients1 = [
      {id: 20081, name: 'wheat flour', estimatedCostInCents: 142},
      {id: 18372, name: 'bicarbonate of soda', estimatedCostInCents: 582},
      {id: 1123, name: 'eggs', estimatedCostInCents: 472},
      {id: 19335, name: 'sucrose', estimatedCostInCents: 902},
      {id: 19206, name: 'instant vanilla pudding', estimatedCostInCents: 660},
      {id: 19334, name: 'brown sugar', estimatedCostInCents: 559},
      {id: 2047, name: 'salt', estimatedCostInCents: 280},
      {id: 1012047, name: 'fine sea salt', estimatedCostInCents: 528},
      {id: 10019903, name: 'semi sweet chips', estimatedCostInCents: 253},
      {id: 1145, name: 'unsalted butter', estimatedCostInCents: 617},
      {id: 2050, name: 'vanilla', estimatedCostInCents: 926}
    ];
    
    expect(repository.recipes[0].ingredients).to.deep.equal(ingredients1);  
  });

  it('should have ingredient information for a different recipe', () => {
    const ingredients2 = [
      {id: 11135, name: 'cauliflower', estimatedCostInCents: 486},
      {id: 6172, name: 'chicken stock', estimatedCostInCents: 454},
      {id: 1002046, name: 'dijon style mustard',estimatedCostInCents: 619},
      {id: 1123, name: 'eggs', estimatedCostInCents: 472},
      {id: 11215, name: 'whole garlic clove', estimatedCostInCents: 220},
      {id: 93632, name: 'ghee', estimatedCostInCents: 370},
      {id: 12120, name: 'hazelnut', estimatedCostInCents: 812},
      {id: 93690, name: 'nutritional yeast flakes',estimatedCostInCents: 969},
      {id: 11282, name: 'onions', estimatedCostInCents: 439},
      {id: 1002030, name: 'black pepper', estimatedCostInCents: 441},
      {id: 10010123, name: 'proscuitto', estimatedCostInCents: 217},
      {id: 11096, name: 'rapini', estimatedCostInCents: 846},
      {id: 1012047, name: 'fine sea salt', estimatedCostInCents: 528},
    ];

    expect(repository.recipes[1].ingredients).to.deep.equal(ingredients2)
  })

  it('should filter recipes by tags', () => {
    const expected =  repository.filterByTag('side dish')
    
    expect(expected[1].name).to.equal('Elvis Pancakes');
  })

  it('should not return a recipe if tag is not found', () => {
    const expected = repository.filterByTag('dessert')

    expect(expected).to.deep.equal([]);
    expect(expected.name).to.equal(undefined);
  });

  it('should filter recipes by name', () => {
    const expected = repository.filterByRecipeName('Loaded Chocolate Chip Pudding Cookie Cups');

    expect(expected[0]).to.deep.equal(repository[0])
  });

  it('should not return a recipe if name is not found', () => {
    const expected = repository.filterByRecipeName('Creme L\'ainglaise')

    expect(expected).to.deep.equal({});
    expect(expected).to.equal(undefined);
  })
});