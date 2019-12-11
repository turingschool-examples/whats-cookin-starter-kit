class Pantry{
  constructor(pantry) {
    // this.id = id;
    this.pantry = pantry;
    this.totalNeededIngredients = [];

  }
  checkPantry() {
    for (var i = 0; i < user.recipesToCook.length; i++) {
      for (var i = 0; i < user.recipesToCook[i].ingredients.length; i++) {
        console.log(user.recipesToCook[i].ingredients);
      }
      // this.neededIngredients.unshift(user.recipesToCook[i].ingredients);
      // console.log(this.neededIngredients);
    }
    // check to see if the ingredients needed in the recipesToCook are contained within the pantry

  }
  makeGroceryList() {
    // all of the ingredients not contained in the pantry are added to another list, where a list of each ingredient and its cost is added, as well as the total cost.
  }
  removeUsedIngredients() {
    //update pantry inrgedients after some get used for a recipe
  }
};



if (typeof module !== 'undefined') {
  module.exports = Pantry;
};
