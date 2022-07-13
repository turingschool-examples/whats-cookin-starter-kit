import Ingredient from "./ingredient"

class Recipe {
    constructor(id, image, ingredientsList, instruction, name, tag) {
        this.id = id
        this.image = image
        this.ingredients = ingredientsList
        this.instructions = instruction
        this.name = name
        this.tags = tag
    }
    filterTags() {}
    filterNames() {}
    calculateCosts() {
        // let totalCost = this.ingredients
        // .map(() =>
        // Ingredient.cost * this.quantity.amount
        // )
        // .reduce()


        // return totalCost
    }
}

export default Recipe;