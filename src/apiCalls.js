// Your fetch requests will live here!
console.log("I will be a fetch request!");

var loadData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) =>
      console.log("There was an error loading the data!", error)
    );
};

// fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// fetch("https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

export default loadData;
