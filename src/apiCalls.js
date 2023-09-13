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

  // Make the POST request
  return fetch(root, {
    method: "POST",
    body: JSON.stringify(recipeBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((postResponse) => {
      if (!postResponse.ok) {
        throw new Error(`Network response was not ok: ${postResponse.status}`);
      }

      // Wait for the POST request to complete, then make the GET request
      return fetch(`http://localhost:3001/api/v1/users`);
    })
    .then((getUsersResponse) => {
      if (!getUsersResponse.ok) {
        throw new Error(
          `Network response was not ok: ${getUsersResponse.status}`
        );
      }

      // Parse and return the updated users data
      return getUsersResponse.json();
    })
    .catch((error) => {
      console.error(`Error: ${error}`);
      throw error;
    });
};


export default promises;
export const addRecipe = addRecipeToUser;
