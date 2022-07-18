// Your fetch requests will live here!
const ingredients = fetch(
  "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients"
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })
  .then((data) => data)
  .catch((err) => console.log(err));

const recipe = fetch(
  "https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes"
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })
  .then((data) => data)
  .catch((err) => console.log(err));

const users = fetch(
  "	https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users"
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })
  .then((data) => data)
  .catch((err) => console.log(err));

export {ingredients, recipe, users};