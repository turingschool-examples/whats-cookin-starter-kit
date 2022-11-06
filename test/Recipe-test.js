import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import dummy from '../src/test-data/ingredient-test-data';
import { singleRecipe, recipe, multiRecipe } from '../src/test-data/Recipe-data';

describe('Recipe', () => {
    let recipeInfo, ingredient;
    beforeEach(() => {
        recipeInfo = new Recipe(singleRecipe)
        ingredient = {
            "id": 20081,
            "name": "wheat flour",
            "estimatedCostInCents": 142,
        }
    });

    it('Should be a function', () => {
        expect(Recipe).to.be.a('function');
    });

    it('Should be a instance of Recipe', () => {
        expect(recipeInfo).to.be.an.instanceOf(Recipe);
    });

    it('should have an id', () => {
        expect(recipeInfo.id).to.equal(singleRecipe.id)
    });

    it('should have an image', () => {
        expect(recipeInfo.image).to.equal(singleRecipe.image)
    });

    it('should have an ingredients array', () => {
        expect(recipeInfo.ingredients).to.deep.equal(singleRecipe.ingredients)
    });

    it('should have an ingredients array made of objects', () => {
        expect(recipeInfo.ingredients).to.deep.equal(singleRecipe.ingredients)
    });

    it('should have an instructions array', () => {
        expect(recipeInfo.instructions).to.deep.equal(singleRecipe.instructions)
    });

    it('should have a name', () => {
        expect(recipeInfo.name).to.equal("Loaded Chocolate Chip Pudding Cookie Cups")
    });

    it('should have a tags array', () => {
        expect(recipeInfo.tags).to.equal(singleRecipe.tags)
    });

    it('should have a tags array made of strings', () => {
        expect(recipeInfo.tags[0]).to.deep.equal(singleRecipe.tags[0])
    });

    it('should have a tags array made of strings', () => {
        expect(recipeInfo.tags[1]).to.deep.equal(singleRecipe.tags[1])
    });

    it('should have a method that returns an array of ingredient ids', () => {
        expect(recipeInfo.returnRecipeIngredientsIds()).to.be.an('array').with.a.lengthOf(11)
    });

    it('should have a method that returns an array of instructions', () => {
        let result = singleRecipe.instructions.reduce((acc, instruction) => {
            acc.push(`${instruction.number}) ${instruction.instruction}`)
            return acc;
        }, [])
        let returnTheInstructions = recipeInfo.returnRecipeInstructions()
        expect(returnTheInstructions).to.deep.equal(result)
    });

    it('should have a method that returns an array where each element is a concatenated string of ingredient quantity, unit, and name', () => {
        expect(recipeInfo.returnRecipeIngredientsInfo(dummy)).to.deep.equal([
            '1.5 c wheat flour',
            '0.50 tsp bicarbonate of soda',
            '1 large eggs',
            '0.50 c sucrose',
            '3 Tbsp instant vanilla pudding',
            '0.50 c brown sugar',
            '0.50 tsp salt',
            '24 servings fine sea salt',
            '2 c semi sweet chips',
            '0.50 c unsalted butter',
            '0.50 tsp vanilla'
        ])
    });

    it('should have a method that returns the total cost of a recipe', () => {
        expect(recipeInfo.returnCostOfIngredients(dummy)).to.equal(`$ 177.76`)
    });
});




