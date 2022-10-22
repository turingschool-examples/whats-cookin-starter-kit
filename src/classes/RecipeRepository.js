import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData) {
    this.recipeData = recipeData;
    
  }

  filteredByName(name) {
    // Recipe array > recipe object > name > string
      const justNames = this.recipeData.filter((recipe) => {
      // console.log('Recipe dot name: ', recipe.name)
      return recipe.name.includes(name);
    })
    return justNames;
  }
  filteredByTag(tag) {
     const justTags = this.recipeData.filter((recipe) => {
       return  recipe.tags.includes(tag)  
     })
    return justTags
  }
  returnAllRecipesObjectsArray () {
    let recipeArray = this.recipeData.map((recipe) => {
      return new Recipe(recipe);
    })
    return recipeArray;
  }
}

export default RecipeRepository;
