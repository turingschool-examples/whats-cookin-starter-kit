import { sampleRecipeData } from "../test/sampleIngredients"

const returnDirections = sampleRecipeData => sampleRecipeData['instructions']
console.log('REturn', returnDirections(sampleRecipeData[0]))

export { returnDirections }