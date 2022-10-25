import Recipe from "../classes/Recipe";

class RecipeRepository {
  constructor(dataSet) {
    this.listOfAllRecipes = dataSet;
  }

  filterByTag(tag) {
    return this.listOfAllRecipes.filter((recipe) =>
      recipe["tags"].includes(tag)
    );
  }

  filterByName(name) {
    let recipeMatch = this.listOfAllRecipes.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
    
    if (recipeMatch !== undefined) {
      return this.listOfAllRecipes.filter(recipe => recipe.name.toLowerCase() === name.toLowerCase());
    } else {
      const nameComponents = name.toLowerCase().split(' ').filter(element => element !== '');
      const recipesThatMatch = nameComponents.reduce((acc, element) => {
        let matchingRecipes = this.listOfAllRecipes.filter(recipe => recipe.name.toLowerCase().includes(element))
        matchingRecipes.forEach(element => {
         if (!acc.includes(element)) {
          acc.push(element)
         }
       });
        return acc;
      }, []);
      return recipesThatMatch
    }
  }
}

export default RecipeRepository;
