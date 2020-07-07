/* eslint-disable */
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
    
    it('should be an instance of Ingredient', function () {
        expect(ingredient).to.be.an.instanceof(Ingredient);
    });

    it('should have an id', function () {
        expect(ingredient.id).to.deep.equal(20081);
    });

    it('should have a name', function () {
        expect(ingredient.name).to.deep.equal('wheat flour');
    });

    it('should have an estimatedCostInCents property', function () {
        expect(ingredient.estimatedCostInCents).to.deep.equal(142);
    });
    });