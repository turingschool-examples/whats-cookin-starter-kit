// Your fetch requests will live here!
export const getUsersAPIData = fetch(
  "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users"
)
  .then((response) => response.json())
  .catch((err) => console.log(err));

export const getRecipesAPIData = fetch(
  "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes"
)
  .then((response) => response.json())
  .catch((err) => console.log(err));

export const getIngredientsAPIData = fetch(
  "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients"
)
  .then((response) => response.json())
  .catch((err) => console.log(err));
