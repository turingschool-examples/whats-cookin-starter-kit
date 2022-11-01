var loadData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) =>
      console.log("There was an error loading the data!", error)
    );
};

export default loadData;
