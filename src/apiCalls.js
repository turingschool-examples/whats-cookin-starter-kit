function fetchData(dataType) {
  return fetch(`http://localhost:3001/api/v1/${dataType}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
    .catch((error) => console.log(error));
}

function getData() {
  const result = Promise.all([
    fetchData("recipes"),
    fetchData("ingredients"),
    fetchData("users"),
  ]).then((responses) => {
    return responses;
  });
  return result;
}

export { getData };
