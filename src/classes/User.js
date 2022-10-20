class User {
  constructor() {
   this.favorites = [] 
  }

  addToFavorites(recipe) {
    this.favorites.push(recipe)
    return this.favorites
  }

  removeFromFavorites(recipe) {
    this.favorites.splice(recipe)
    return this.favorites
  }

  filterFavsByTag() {

  }

  filterFavsByName() {

  }
}

export default User