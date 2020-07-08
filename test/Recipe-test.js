/* eslint-disable */

const chai = require('chai');

const expect = chai.expect;
var Recipe = require('../src/Recipe')

describe('Recipe', function () {
    let recipe;
    beforeEach(function () {
        var recipeData = {
            'id': 595736,
            'image': 'test-src',
            'ingredients': [
                {
                    'id': 20081,
                    'quantity': {
                        'amount': 1.5,
                        'unit': 'c'
                    }
                },
                {
                    'id': 18372,
                    'quantity': {
                        'amount': 0.5,
                        'unit': 'tsp'
                    }
                }
            ],
            'instructions': [
                {
                    'instruction': 'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
                    'number': 1
                },
                {
                    'instruction': 'Add egg and vanilla and mix until combined.',
                    'number': 2
                }
            ],
            'name': 'Loaded Chocolate Chip Pudding Cookie Cups',
            'tags': [
                'antipasti',
                'starter',
                'snack',
                'appetizer',
                'antipasto',
                'hor d\'oeuvre'
            ]
        };
        recipe = new Recipe(recipeData);
    });

    it('should be a function', function () {
        expect(Recipe).to.be.a('function');
    });

    it('should be an instance of Recipe', function () {
        expect(recipe).to.be.an.instanceof(Recipe);
    });

    it('should have an id', function () {
        expect(recipe.id).to.equal(595736);
    });

    it('should have an image src', function () {
        expect(recipe.image).to.deep.equal('test-src');
    });

    it('should have ingredients', function () {
        var expectedIngredients = [{
                'id': 20081,
                'quantity': {
                    'amount': 1.5,
                    'unit': 'c'
                }
            },
            {
                'id': 18372,
                'quantity': {
                    'amount': 0.5,
                    'unit': 'tsp'
                }
            }
        ];
        expect(recipe.ingredients).to.deep.equal(expectedIngredients);
    });

    it('should have instructions', function () {
        var expectedInstructions = [{
                'instruction': 'In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.',
                'number': 1
            },
            {
                'instruction': 'Add egg and vanilla and mix until combined.',
                'number': 2
            }
        ];
        expect(recipe.instructions).to.deep.equal(expectedInstructions);
    });

    it('should have a name', function () {
        expect(recipe.name).to.deep.equal('Loaded Chocolate Chip Pudding Cookie Cups');
    });

    it('should have tags', function () {
        var expectedTags = [
            'antipasti',
            'starter',
            'snack',
            'appetizer',
            'antipasto',
            'hor d\'oeuvre'
        ];
        expect(recipe.tags).to.deep.equal(expectedTags);
    });

    describe('getIngredientCost', function () {
        it('should get cost of all ingredients', function () {
            const expectedCost = (142 * 1.5) + (582 * 0.5);
            expect(recipe.getIngredientCost()).to.equal(expectedCost);
        });
    });
    });

    if (typeof module !== 'undefined') {
        module.exports = usersData;
    }