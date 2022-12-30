import { expect } from "chai";
import Ingredient from "../src/classes/Ingredient";

describe("Ingredient", () => {
    let ingredient1;
    let ingredient1Data = [{"id": 18372, "name": "bicarbonate of soda", "estimatedCostInCents": 582}];

    let ingredientsData = [
        {"id": 19206, "name": "instant vanilla pudding", "estimatedCostInCents": 660},
        {"id": 19334, "name": "brown sugar", "estimatedCostInCents": 559},
        {"id": 18372, "name": "bicarbonate of soda", "estimatedCostInCents": 582},
        {"id": 2047, "name": "salt", "estimatedCostInCents": 280}];

    beforeEach(function() {
        ingredient1 = new Ingredient(18372, ingredientsData);
    });

    it("Should be a function", () => {
        expect(Ingredient).to.be.a("function");
    });

    it("Should instantiate our good friend Ingredient", () => {
        expect(ingredient1).to.be.an.instanceOf(Ingredient);
    });

    it("Should have a property to store an ingredient's id", () => {
        expect(ingredient1.id).to.be.equal(18372);
        expect(ingredient1.id).to.be.equal(ingredient1Data[0].id);
    });

    it("Should have a property to store the ingredient name", () => {
        expect(ingredient1.name).to.be.equal("bicarbonate of soda");
    });

    it("Should have a property to store its estimatedCostInCents", () => {
        expect(ingredient1.cost).to.be.equal(582);
    });

    it("Should have a method to find an ingredient object from the ingredient data using an id argument", () => {
        let method0 = ingredient1.findIngredientObject(ingredientsData);
        expect(method0).to.be.equal(ingredient1.object);
        expect(ingredient1.object).to.deep.equal({"id": 18372, "name": "bicarbonate of soda", "estimatedCostInCents": 582});
    })

    it("Should have a method to get the cost of an ingredient", () => {
        let method1 = ingredient1.getIngredientCost();
        expect(method1).to.be.equal(582);
    });

    it("Should have a method to get an ingredient name", () => {
        let method2 = ingredient1.getIngredientName();
        expect(method2).to.be.equal("bicarbonate of soda");
    });
});