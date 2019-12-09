class Pantry {
  constructor() {
    this.stockedIngredients = [];
  }

  canCookMeals(user) {
    if (user.pantry !== []) {
      return true;
    }
    return false;
  }

  findIngredients(user) {
    return user.pantry;
  }

  removeAfterCooking() {
    
  }
}
module.exports = Pantry;
