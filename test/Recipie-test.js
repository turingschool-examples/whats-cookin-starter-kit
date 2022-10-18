import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('Recipie', () => {
let recipeInfo, recipe;

beforeEach(() => {

 
    recipeInfo = new Recipe(595736, "https://spoonacular.com/recipeImages/595736-556x370.jpg", recipeIngredients, recipieInstructions, "Loaded Chocolate Chip Pudding Cookie Cups", recipeTags)

});

it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
});

it('Should be a function', () => {
    expect(recipeInfo).to.be.an('object');
});

it('should have an id', () => {
    expect(recipeInfo.id).to.equal(595736)
});

it('should have an image', () => {
    expect(recipeInfo.image).to.equal("https://spoonacular.com/recipeImages/595736-556x370.jpg")
});

it('should have an ingredients array', () => {
    expect(recipeInfo.ingredients).to.equal(recipeIngredients)
});

it('should have an ingredients array', () => {
    expect(recipeInfo.instructions).to.equal(recipieInstructions)
});

it('should have a name', () => {
    expect(recipeInfo.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups")
});

it('should have an tags array', () => {
    expect(recipeInfo.tags).to.equal(recipeTags)
});







});