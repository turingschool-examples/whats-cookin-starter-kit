const apiCalls = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      return response.json();
    })
    .catch((error) => {
      console.error(`Error fetching ${dataType}: ${error}`);
    });
};
const promises = [
  apiCalls("users"),
  apiCalls("ingredients"),
  apiCalls("recipes"),
];

const addRecipeToUser = (userId, recipeId) => {
  const root = `http://localhost:3001/api/v1/usersRecipes`;
  const recipeBody = { userID: userId, recipeID: recipeId };
  const promise = fetch(root, {
    method: "POST",
    body: JSON.stringify(recipeBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

const updatedUsers = () => {
  return fetch(`http://localhost:3001/api/v1/users`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      console.log("promise complete");
      return response.json();
    })
    .catch((error) => {
      console.error(`Error fetching ${dataType}: ${error}`);
    });
};
const userProm = [updatedUsers()];

export default promises;
export const addRecipe = addRecipeToUser;
export const userPromise = userProm;
