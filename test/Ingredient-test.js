const chai = require("chai");

const expect = chai.expect;
var Ingredient = require('../src/Ingredient')

describe('Ingredient', function () {
            let ingredient;
            beforeEach(function () {
                var ingredientData = {
                    "id": 20081,
                    "name": "wheat flour",
                    "estimatedCostInCents": 142
                };
                ingredient = new Ingredient(ingredientData);
            });

            it('should be a function', function () {
                expect(Ingredient).to.be.a('function');
            });