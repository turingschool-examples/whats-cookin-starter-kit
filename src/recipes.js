//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later! 
import{recipes, ingredients} from './mock-data';

function getRecipeData(){
  return recipes;
};
function getIngredientsData(){
  return ingredients;
};
function getRecipeInstructions(recipe){
  return recipe["instructions"];
}
export {getRecipeData, getIngredientsData, getRecipeInstructions};

