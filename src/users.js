const getRandomIndex = (usersLength) => {
 return Math.floor(Math.random() * usersLength);
}
const getRandomUser = (userData) => {
  if(userData) {
    return userData.users[getRandomIndex(userData.users.length)];
  } else {
    return 'user data not found';
  };
}

const checkUserForRecipe = (currentUser, recipe) => {
  if (currentUser.recipesToCook.length > 0) {
    return currentUser.recipesToCook.map((recipe) => {
      return recipe.id;
    })
    .some((id)=> {
      return recipe.id === id;
    });
   };
};

export { getRandomUser, getRandomIndex, checkUserForRecipe }