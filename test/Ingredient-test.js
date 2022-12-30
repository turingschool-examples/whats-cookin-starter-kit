import { expect } from "chai";
import Ingredient from "../src/classes/Ingredient";

describe("Ingredient", () => {
    let ingredient1;
    let ingredient1Data = {"id": 18372, "name": "bicarbonate of soda", "estimatedCostInCents": 582};

    beforeEach(function() {
        ingredient1 = new Ingredient(18372, ingredient1Data);
    });

    it("Should be a function", () => {
        expect(Ingredient).to.be.a("function");
    });

    it("Should instantiate our good friend Ingredient", () => {
        expect(ingredient1).to.be.an.instanceOf(Ingredient);
    });

    it("Should have a property to store an ingredient's id", () => {
        expect(ingredient1.id).to.be.equal(18372);
        expect(ingredient1.id).to.be.equal(ingredient1Data.id);
    });

    // it("Should have a property to store the ingredient name", () => {
    //     expect(ingredient1.name).to.be.equal("bicarbonate of soda");
    // });

    // it("Should have a property to store its estimatedCostInCents", () => {
    //     expect(ingredient1.cost).to.be.equal(582);
    // });

    // it("Should have a method to get an ingredient name", () => {
    //     let method2 = ingredient1.getIngredientName();
    //     expect(method2).to.be.equal("bicarbonate of soda");
    // });

    // it("Should have a method to get the cost of an ingredient", () => {
    //     let method1 = ingredient1.getIngredientCost();
    //     expect(method1).to.be.equal(582);
    // });
});