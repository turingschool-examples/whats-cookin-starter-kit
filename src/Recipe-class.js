class Recipe {
  constructor() {
    // id -> number
    // image -> string
    // ingredients -> [{}]
    // instructions -> [{}]
    // name -> string
    // tags -> []
    // isFav -> boolean (false)
    // savedToCook -> boolean (false)
  }

  // updateFavStatus
    // change the isFav to true
        // user.moveToFavArray();
    // or change it back to false

  // updateSavedToCookStatus
    // toggle the status of savedToCook
    //  if savedToCook is true,
    // invoke the user.moveToCookArray
    // method
}

module.exports = Recipe;
