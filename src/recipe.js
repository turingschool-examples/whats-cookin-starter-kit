import { ingredientTestData } from "./data/testData"
import { recipieTestData } from "./data/testData"

const returnInstructions = recipe => recipe 

const filterByTag = (recipes,tag) => {
    const findRecipe = recipes.filter(recipe => {

       return recipe.tags.includes(tag)
   })
   
   return findRecipe
}


export {returnInstructions,
filterByTag}

