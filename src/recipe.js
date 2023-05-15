import { ingredientTestData } from "./data/testData"
import { recipieTestData } from "./data/testData"


const filterByTag = (recipes,tag) => {
    const findRecipe = recipes.filter(recipe => {

       return recipe.tags.includes(tag)
   })
   
   return findRecipe
}


const filterByName = (recipes,name) => {
    const findName = recipes.filter(recipe => {

       return recipe.name === name
   })
   
   return findName
}

const returnInstructions = recipe => {

    return recipe.instructions

}


///need to return 

export {returnInstructions,
    filterByTag,
    filterByName}
    