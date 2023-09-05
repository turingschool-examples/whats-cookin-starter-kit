// Your fetch requests will live here!


const fetchUsers = (fn) => {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
    .then(response => response.json())
    .then(data => {
      return fn(data.users);
    });
};


const fetchRecipes = (fn) => {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
    .then(response => response.json())
    .then(data => {
      return fn(data.recipes);
    });
};

const fetchIngredients = (fn) => {
  return fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
    .then(response => response.json())
    .then(data => {
      return fn(data.ingredients);
    });
};

export {
  fetchUsers,
  fetchRecipes,
  fetchIngredients
};



  



