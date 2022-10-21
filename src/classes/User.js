// import Recipe from '../classes/Recipe'

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