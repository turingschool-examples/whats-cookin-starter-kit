class RecipeRepository {
  constructor(recipeRepo) {
    this.recipeRepo = recipeRepo
  }

filterByTags(userTag){
  let tagRecipes = [];
   let findTag = userTag.forEach(tag => {
     this.recipeRepo.forEach(recipe => {
       if(recipe.tags.includes(tag) && !tagRecipes.includes(recipe)) {
         tagRecipes.push(recipe)
       }
     })
   })
   return tagRecipes
 }

filterByName(userGeneratedName) {
  let nameRecipes = [];
  let findName = this.recipeRepo.forEach(recipe => {
    if(recipe.name.includes(userGeneratedName)) {
      nameRecipes.push(recipe)
    }
  })
  return nameRecipes
}

filterByIngredients(userGeneratedIngredients, ingredientsData) {
  let ingredientRecipes = []
}

}


export default RecipeRepository;
