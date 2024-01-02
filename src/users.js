export const saveRecipe = (recipesToCook, currentRecipe) => {
    recipesToCook.push(currentRecipe);
  }
  
  export const removeRecipe = (recipesToCook, currentRecipe) => {
    const i = recipesToCook.indexOf(currentRecipe);
    recipesToCook.splice(i, 1);
  }