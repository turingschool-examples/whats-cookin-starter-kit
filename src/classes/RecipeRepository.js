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
  let ingredientID = []
  let userIngredients = userGeneratedIngredients.split(", ")

  let findIngredient = ingredientsData.forEach(ingredient => {
      userIngredients.forEach(userIngredient => {
        if(ingredient.name === userIngredient) {
          ingredientID.push(ingredient.id)
        }
      })
  })

  let findRecipe = ingredientID.forEach(id => {
    this.recipeRepo.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        if(ingredient.id === id && !ingredientRecipes.includes(recipe)) {
          ingredientRecipes.push(recipe)
        }
      })
    })
  })

  return ingredientRecipes
}

}


export default RecipeRepository;
