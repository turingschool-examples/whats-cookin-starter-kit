const fetchAPI = (dataType) => {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      return response.json();
    })
    .catch((err) => errorHandling(err));
};

const errorHandling = (err) => {
  alert(`${err.name}: ${err.message}!\nWhat's Cookin failed to obtain data from the server.`);
};

const postAPI = (user) => {
  fetch('http://localhost:3001/api/v1/usersRecipes', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch(() => alert("Your recipe couldn't be saved!"));
};

export { fetchAPI, postAPI };
