import { expect } from 'chai';
import Recipe from '../src/classes/Recipe'
import { recipeData } from '../src/data/recipes';
import { ingredientsData } from '../src/data/ingredients';
describe('Recipe Test', () => {
    it('Should be an instance of recipe', () => {
        expect(Recipe).to.be.a('function');
    });
    const keys = Object.keys(recipeData[0]);
    const firstRecipe = recipeData[0];
    const recipe = new Recipe(firstRecipe, ingredientsData);
    keys.forEach(key => {
        it(`should create a recipe object with a key of ${key}`, () => {
            expect(recipe[key]).to.equal(firstRecipe[key]);
        });
    });
    it('should be able to get ingredients names', () => {
        recipe.makeIngredientData()
        expect(recipe.returnNeeded(recipeData)).to.deep.equal([
            "wheat flour",
            "bicarbonate of soda",
            "eggs",
            "sucrose",
            "instant vanilla pudding",
            "brown sugar",
            "salt",
            "fine sea salt",
            "semi sweet chips",
            "unsalted butter",
            "vanilla"
        ]);
    });
    it('should be dynamic for ingredients names', () => {
        const recipe2 = new Recipe(recipeData[1], ingredientsData)
        recipe2.makeIngredientData()
        const firstRecipe = recipeData[1];
        expect(recipe2.returnNeeded(recipeData)).to.deep.equal([
            "apple cider",
            "apple",
            "corn starch",
            "dijon style mustard",
            "whole garlic clove",
            "whole grain dijon mustard",
            "maple",
            "miso",
            "pork chop",
            "s&p",
            "soy sauce",
            "sriracha sauce",
        ]);
    });
    it('should get cost of ingredients', () => {
        expect(recipe.getCostToDollar(recipe.requiredIngredients)).to.deep.equal(59.21);
    });
    it('should be able to get recipe instructions', () => {
        expect(recipe.getInstructions()).to.deep.equal([
            {
                "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
                "number": 1
            },
            {
                "instruction": "Add egg and vanilla and mix until combined.",
                "number": 2
            },
            {
                "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
                "number": 3
            },
            {
                "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
                "number": 4
            },
            {
                "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
                "number": 5
            },
            {
                "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
                "number": 6
            }
        ]);
    })
});