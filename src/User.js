const data = require('../data/users.js');
const usersData = data.usersData;
const userData = usersData.sort((a, b) => 0.5 - Math.random())[0];
const ingredientsData = require('../data/ingredients.js')
const ingredients = ingredientsData.ingredientsData;

class User {
  constructor(userData) {
    //console.log(userData);  UNDEFINED
    this.user = userData;
    this.name = userData.name;
    this.id = userData.id;
    this.pantry = userData.pantry;
    this.favorites = [];
    this.planned = [];
  }
  addFavorite(recipe) {
    this.favorites.push(recipe);
  }
  removeFavorite(recipe) {
    if(this.favorites[0]) {
      const index = this.favorites.indexOf(recipe);
      this.favorites.splice(index, 1);
    }
  }
  getFavoritesByTags(tags) {
    let filteredFavorites = this.favorites.filter(recipe => {
      return tags.filter(tag => {
        return recipe.tags.includes(tag);
      });
    });
    return filteredFavorites;
  }
  // getFavoritesByTags(tags) {
  //   let filteredTags = tags.filter(tag => recipe.tags.includes(tag));
  //   let filteredFavorites = this.favorites.filter(recipe => {
  //     return filteredTags;
  //     });
  //   return filteredFavorites;
  // }
  getFavoritesByName(name) {
    return this.favorites.filter(recipe => recipe.name === name);
  }
  getFavoritesByIngredient(ingredient) {
    const ingredientIds = this.favorites.map(currentIngredient => currentIngredient.id);

    const ingredientNames = ingredientIds.map(id => {
      if (ingredients.find(el => el.id === id)) {
        return ingredients[ingredients.findIndex(el => el.id === id)].name;
      }
    });
    console.log(ingredientNames)
    let filteredFavorites = ingredientNames.map(ingredientName => {
      ingredientIds.map(id => ingredientName);
    });


    return filteredFavorites;

  }
  addPlanned(recipe) {
    this.planned.push(recipe);
  }
}

module.exports = User;
