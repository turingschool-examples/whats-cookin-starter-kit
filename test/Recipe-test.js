import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
    it('Should be a function', () => {
      expect(Recipe).to.be.a('function');
    });
    let recipeNoTags;
    let recipeNoInstructions;
    let recipeUndefined; 
    let recipeNoPortions;   
    let recipe1;
    let recipe2;
    let recipe3; 
    let recipe4;   

    beforeEach(() => {

        recipeNoTags = new Recipe({id: 6, name: 'Succotash', image:'https://recipe-image-7.jpg', portions: [{ ingredientId: 1, name: 'Lima Beans',  amount: 1, cost: 605, unit: 'Bag'}], instructions: ['Open Bag'], tags: []});

        recipeNoInstructions = new Recipe({id: 6, name: 'Pancakes', image:'https://recipe-image-6.jpg', portions: [{ ingredientId: 1, name: 'Batter',  amount: 1, cost: 201, unit: 'Bag'}], instructions: [], tags: ['Breakfast', 'Brunch']});

        recipeNoPortions = new Recipe({id: 5, name: 'Frittata', image:'https://recipe-image-1.jpg', portions: [], instructions: ['Bake In Oven'], tags: ['Breakfast', 'Brunch']});

        recipeUndefined = new Recipe({id: undefined, name: 'Chips', image:'https://recipe-image-Und.jpg', portions: [{ ingredientId: 1, name: 'Potato',  amount: 1, cost: 101, unit: 'Bag'}], instructions: ['Fry it'], tags: ['snack', 'Dinner']});


        recipe1 = new Recipe({id: 1, name: 'Chocolate Chip Cookie', image:'https://recipe-image-1.jpg', portions: [{ ingredientId: 1, name: 'Flour',  amount: 2, cost: 101, unit: 'C'}], instructions: ['Bake it'], tags: ['snack', 'dessert']});

        recipe2 = new Recipe({id: 2, name: 'Ham Sandwich', image:'https://recipe-image-2.jpg', portions: [{ingredientId: 2, name: 'Bread', amount: 5, cost: 200,  unit: 'loaf'}], instructions: ['Make Sandwich'],  tags: ['snack', 'lunch']});

        recipe3 = new Recipe({id: 3, name: 'Glazed Chops', image:'https://recipe-image-3.jpg', portions: [{ingredientId: 3, name: 'Pork Chop', amount: 1, cost: 300, unit: 'serving'}], instructions: ['Grill it up'],  tags: ['pork', 'dinner']});

        recipe4 = new Recipe({id: 4, name: 'Thai Chicken Noodles', image:'https://recipe-image-4.jpg', portions: [{ingredientId: 4, name: 'Chicken', amount: 1, cost: 423, unit: 'each'}, {ingredientId: 5, name: 'Curry', amount: 2, cost: 500, unit: 'Cup'} ], instructions: ['Saute it', 'Simmer it, Eat it'],  tags: ['Chicken', 'Spicy']});

});

    it('the constructor should have an id number', () => {
    expect(recipe1.id).to.equal(1);
    expect(recipe2.id).to.equal(2);
    
}); 

    it('the constructor should generate a random number by default', () => {
    expect(recipe1.id).to.equal(1);

    expect(recipeUndefined.generateRandomId()).to.be.a('number');
    
});

    it('the constructor should contain a recipe name', () => {
    
    expect(recipe1.name).to.equal('Chocolate Chip Cookie');
    expect(recipe2.name).to.equal('Ham Sandwich');

});

    it('the constructor should contain a recipe image', () => {

    expect(recipe1.image).to.equal('https://recipe-image-1.jpg');
    expect(recipe2.image).to.equal('https://recipe-image-2.jpg');

});

it('the constructor should default to an empty portions array', () => {

    expect(recipeNoPortions.portions).to.deep.equal([]);

});

it('the constructor should have list of ingredients needed', () => {

    expect(recipe3.portions).to.deep.equal([{ingredientId: 3, name: 'Pork Chop', amount: 1, cost: 300, unit: 'serving'}])

    expect(recipe3.portions.length).to.equal(1);
    expect(recipe3.portions[0].name).to.equal('Pork Chop');

    expect(recipe2.portions.length).to.equal(1);
    expect(recipe1.portions[0].name).to.deep.equal('Flour');

    
});

it('the constructor should default to an empty portions array', () => {
    expect(recipeNoInstructions.instructions).to.deep.equal([]);

});

it('the constructor should contain instructions to make a recipe', () => {

    expect(recipe1.instructions[0]).to.equal('Bake it');
    expect(recipe2.instructions[0]).to.equal('Make Sandwich');

});

it('the constructor should default to an empty tags array', () => {

    expect(recipeNoTags.tags).to.deep.equal([]);

});

it('should have a list of tags', () => {

    expect(recipe2.tags).to.deep.equal(['snack', 'lunch']);
    expect(recipe2.tags).to.have.lengthOf(2);
});

it('should be able to show the names of ingredients needed', () => {

    expect(recipe1.getPortionNames().length).to.equal(1)

    expect(recipe1.getPortionNames()[0]).to.equal('Flour');

    expect(recipe2.getPortionNames()[0]).to.equal('Bread');

});

it('should be able to calculate the total cost of ingredients', () => {

    expect(recipe1.getPortionCosts(2, 100)[0]).to.equal(2.02);

});

it('should be able to calculate the total cost of a recipe', () => {

    expect(recipe1. calcTotalRecipeCost()).to.equal(2.02);

    expect(recipe4. calcTotalRecipeCost()).to.equal(14.23);

});

it('should be return the recipe instructions', () => {

    expect(recipe4.getInstructions()).to.deep.equal(['Saute it', 'Simmer it, Eat it'])
});

});

