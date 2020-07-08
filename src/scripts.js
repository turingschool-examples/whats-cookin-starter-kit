

//function below needed to convert ingredient search term to an id so can then use recipe class to check if recipe ingredients have that id  
const convertSearchTermToId = searchTerm => {
  ingredientsData.forEach(ingredient => {
    if (ingredient.name === searchTerm) {
      return ingredient.id;
    } 
  });
}
