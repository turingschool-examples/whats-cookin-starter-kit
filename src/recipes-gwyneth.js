import { getIngredientsData, getRecipeData} from "./recipes";
function findRecipeIngredients(){
    const recipe = getRecipeData()
    const ingredientsData = getIngredientsData()
};
export {findRecipeIngredients};