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

  filterFavsByTag(tag) {
    let favByTagResult = this.favorites.filter((tag) => {
     this.favorites
    })
    return
  }

  filterFavsByName(name) {
     let favByNameResult = this.favorites.filter((name) => {

    })
    return
  }
}

export default User