class RecipeRepository {
  constructor(recipeRepo) {
    this.data = recipeRepo
  }

filterByTags(userTag){
  let tagRecipes = [];
   let findTag = userTag.forEach(tag => {
     this.data.forEach(recipe => {
       if(recipe.tags.includes(tag) && !tagRecipes.includes(recipe)) {
         tagRecipes.push(recipe)
       }
     })
   })
   return tagRecipes
 }

filterByName(userGeneratedName) {
  let nameRecipes = [];
  let findName = this.data.forEach(recipe => {
    if(recipe.name.includes(userGeneratedName)) {
      nameRecipes.push(recipe)
    }
  })
  return nameRecipes
}

}


export default RecipeRepository;
