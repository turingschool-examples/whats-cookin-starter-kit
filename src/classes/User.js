import Recipe from '../classes/Recipe'

class User {
  constructor(recipeData) {
   this.favorites = this.createFavoritesArray() 
   this.recipeData = recipeData
  }

  // createFavoritesArray() {
  //   let favoritesArray = []
  //   this.recipeData.forEach((recipe) => {
  //     let modifiedRecipes = new Recipe(recipe)
  //     favoritesArray.push(modifiedRecipes)
  //   })
  //   return favoritesArray
  // }

  addToFavorites(recipe) {
    this.favorites.push(recipe)
    return this.favorites
  }

  removeFromFavorites(recipe) {
    this.favorites.splice(recipe)
    return this.favorites
  }

  filterFavsByTag(tag) {
    let favByTagResult = this.favorites.filter((favorites) => {
     favorites.tags.includes(tag)
    })
    return favByTagResult
  }

  filterFavsByName(name) {
     let favByNameResult = this.favorites.filter((favorites) => {
      favorites.name.includes(name)
    })
    return favByNameResult
  }
}

export default User