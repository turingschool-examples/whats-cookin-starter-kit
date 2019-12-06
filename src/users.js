class User {
  constructor(id, name, pantry) {
    this.id = id;
    this.name = name;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.weeklyMenu = [];
  }
  addToFavorites(fave) {
    console.log('tedst')
    this.favoriteRecipes.push(fave)
  }
}

if (typeof module !== 'undefined') {
  module.exports = User;
}

//add event listener to button that fires off addtofaves methid
// the method is going to take the id 