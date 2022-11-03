import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
import  dummy  from '../src/ingredient-test-data';
describe('Recipe', () => {
    let recipeInfo, singleRecipe,ingredient;

    beforeEach(() => {
       
        singleRecipe = {
            "id": 595736,
            "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
            "ingredients": [
                {
                    "id": 20081,
                    "quantity": {
                        "amount": 1.5,
                        "unit": "c"
                    }
                },
                {
                    "id": 18372,
                    "quantity": {
                        "amount": 0.5,
                        "unit": "tsp"
                    }
                },
                {
                    "id": 1123,
                    "quantity": {
                        "amount": 1,
                        "unit": "large"
                    }
                },
                {
                    "id": 19335,
                    "quantity": {
                        "amount": 0.5,
                        "unit": "c"
                    }
                },
                {
                    "id": 19206,
                    "quantity": {
                        "amount": 3,
                        "unit": "Tbsp"
                    }
                },
                {
                    "id": 19334,
                    "quantity": {
                        "amount": 0.5,
                        "unit": "c"
                    }
                },
                {
                    "id": 2047,
                    "quantity": {
                        "amount": 0.5,
                        "unit": "tsp"
                    }
                },
                {
                    "id": 1012047,
                    "quantity": {
                        "amount": 24,
                        "unit": "servings"
                    }
                },
                {
                    "id": 10019903,
                    "quantity": {
                        "amount": 2,
                        "unit": "c"
                    }
                },
                {
                    "id": 1145,
                    "quantity": {
                        "amount": 0.5,
                        "unit": "c"
                    }
                },
                {
                    "id": 2050,
                    "quantity": {
                        "amount": 0.5,
                        "unit": "tsp"
                    }
                }
            ],
            "instructions": [
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
            ],
            "name": "Loaded Chocolate Chip Pudding Cookie Cups",
            "tags": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ]

        },
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
        expect(recipeInfo.returnRecipeIngredientsIds()).to.deep.equal(singleRecipe.ingredients.map(ingredient => ingredient.id))
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
        console.log('yoyo',dummy)
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




