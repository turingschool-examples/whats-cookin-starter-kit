function shuffle(usersData) {
  var userLength = array.length, t, i;
  while (userLength) {
    i = Math.floor(Math.random() * userLength--);
    t = array[userLength];
    array[userLength] = array[i];
    array[i] = t;
  }
  return usersData;
}
//when calling RecipeRepo class
// shuffle usersData first,
// new RecipeRepo > send usersData[0]
