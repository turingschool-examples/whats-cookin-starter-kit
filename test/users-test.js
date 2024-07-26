import { expect } from 'chai';
import { testUsersData, testRecipeData } from '../src/data/sampleData';
import { addToFavorites, removeFromFavorites } from '../src/users';

let user;
let recipeFirst, recipeSecond, recipeThird;
beforeEach(function () {
    user = testUsersData[0];
    recipeFirst = testRecipeData[0];
    recipeSecond = testRecipeData[1];
    recipeThird = testRecipeData[2];
});

describe("Add To Favorites", () => {
    it('Should add a recipe to user\'s recipesToCook list', () => {
        const updatedUser1 = addToFavorites(user, recipeFirst);
        expect(updatedUser1.recipesToCook).to.deep.equal([{
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
                }],
            "instructions": [
                {
                    "instruction": "In a large mixing bowl, whisk together the dry ingredients...",
                    "number": 1
                },
                {
                    "instruction": "Add egg and vanilla and mix until combined.",
                    "number": 2
                },
                {
                    "instruction": "Add dry ingredients and mix on low just until...",
                    "number": 3
                }],
            "name": "Loaded Chocolate Chip Pudding Cookie Cups",
            "tags": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ]
        }])
    });
    it('Should add another recipe to user\'s recipesToCook list', () => {
        const updatedUser2 = addToFavorites(user, recipeSecond);
        expect(updatedUser2.recipesToCook).to.deep.equal([{
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
                }],
            "instructions": [
                {
                    "instruction": "In a large mixing bowl, whisk together the dry ingredients...",
                    "number": 1
                },
                {
                    "instruction": "Add egg and vanilla and mix until combined.",
                    "number": 2
                },
                {
                    "instruction": "Add dry ingredients and mix on low just until...",
                    "number": 3
                }],
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
        {
            "id": 678353,
            "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
            "ingredients": [
                {
                    "id": 1009016,
                    "quantity": {
                        "amount": 1.5,
                        "unit": "cups"
                    }
                },
                {
                    "id": 9003,
                    "quantity": {
                        "amount": 2,
                        "unit": ""
                    }
                }],
            "instructions": [
                {
                    "instruction": "Season the pork chops with salt and pepper and grill or pan fry...",
                    "number": 1
                }
            ],
            "name": "Maple Dijon Apple Cider Grilled Pork Chops",
            "tags": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ]
        }])
    });
    it('Should make no change if recipe is already in favorites', () => {
        const updatedUser3 = addToFavorites(user, recipeSecond);
        expect(updatedUser3.recipesToCook).to.deep.equal([{
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
                }],
            "instructions": [
                {
                    "instruction": "In a large mixing bowl, whisk together the dry ingredients...",
                    "number": 1
                },
                {
                    "instruction": "Add egg and vanilla and mix until combined.",
                    "number": 2
                },
                {
                    "instruction": "Add dry ingredients and mix on low just until...",
                    "number": 3
                }],
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
        {
            "id": 678353,
            "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
            "ingredients": [
                {
                    "id": 1009016,
                    "quantity": {
                        "amount": 1.5,
                        "unit": "cups"
                    }
                },
                {
                    "id": 9003,
                    "quantity": {
                        "amount": 2,
                        "unit": ""
                    }
                }],
            "instructions": [
                {
                    "instruction": "Season the pork chops with salt and pepper and grill or pan fry...",
                    "number": 1
                }
            ],
            "name": "Maple Dijon Apple Cider Grilled Pork Chops",
            "tags": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ]
        }])
    });
});

describe("Remove from Favorites", () => {
    it('Should remove a recipe from user\'s recipesToCook list', () => {
        const updatedUser4 = removeFromFavorites(user, recipeSecond)
        expect(updatedUser4.recipesToCook).to.deep.equal([{
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
                }],
            "instructions": [
                {
                    "instruction": "In a large mixing bowl, whisk together the dry ingredients...",
                    "number": 1
                },
                {
                    "instruction": "Add egg and vanilla and mix until combined.",
                    "number": 2
                },
                {
                    "instruction": "Add dry ingredients and mix on low just until...",
                    "number": 3
                }],
            "name": "Loaded Chocolate Chip Pudding Cookie Cups",
            "tags": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ]
        }])
    });
    it('Should remove another recipe from user\'s recipesToCook list', () => {
        const updatedUser5 = removeFromFavorites(user, recipeFirst)
        expect(updatedUser5.recipesToCook).to.deep.equal([])
    });
    it('Should make no change if recipe is not in user\'s recipesToCook list', () => {
        const updatedUser6 = addToFavorites(user, recipeFirst);
        const updatedUser7 = addToFavorites(user, recipeSecond);
        const updatedUser8 = removeFromFavorites(user, recipeThird)
        expect(updatedUser8.recipesToCook).to.deep.equal([{
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
                }],
            "instructions": [
                {
                    "instruction": "In a large mixing bowl, whisk together the dry ingredients...",
                    "number": 1
                },
                {
                    "instruction": "Add egg and vanilla and mix until combined.",
                    "number": 2
                },
                {
                    "instruction": "Add dry ingredients and mix on low just until...",
                    "number": 3
                }],
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
        {
            "id": 678353,
            "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
            "ingredients": [
                {
                    "id": 1009016,
                    "quantity": {
                        "amount": 1.5,
                        "unit": "cups"
                    }
                },
                {
                    "id": 9003,
                    "quantity": {
                        "amount": 2,
                        "unit": ""
                    }
                }],
            "instructions": [
                {
                    "instruction": "Season the pork chops with salt and pepper and grill or pan fry...",
                    "number": 1
                }
            ],
            "name": "Maple Dijon Apple Cider Grilled Pork Chops",
            "tags": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ]
        }])
    });
})