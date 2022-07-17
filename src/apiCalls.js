// Your fetch requests will live here!
// const finalDestination = 'https://what-s-cookin-starter-kit.herokuapp.com';

function loadUsers() {
  return fetch(`${finalDestination}/api/v1/users`)
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log(error));
};

function loadIngredients() {
  return fetch(`${finalDestination}/api/v1/ingredients`)
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log(error));
};

function loadRecipes() {
  return fetch(`${finalDestination}/api/v1/recipes`)
  .then(response => response.json())
  .then(data => data.recipes)
  .catch(error => console.log(error))
}

export { loadUsers, loadIngredients, loadRecipes };


// function fetchData(url) {
//   return fetch(url)
//     .then(checkStatus)
//     .then(res => res.json())
//     .catch(error => console.log('Looks like there was a problem', error))
// }

// Promise.all([
//   fetchData('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
//     .then(data => generateOptions(data.message)),
//   fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/recipes')
//     .then(data => generateImage(data.message)),
//   fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/ingredients')
//     .then(data => generateImage(data.message))
// ])
//   .then(data => {
//     const breedList = data[0].message;
//     const randomImage = data[1].message;

//     generateOptions(breedList);
//     generateImage(randomImage);
//   })

// function checkStatus(response) {
//   if (response.ok) {
//     return Promise.resolve(response);
//   } else {
//     return Promise.reject(new Error(response.statusText));
//   }
// }

// function generateOptions(data) {
//   const options = data.map(item => `<option value='${item}'>${item}</option>`).join();
//   select.innerHTML = options;
// }

// function generateImage(data) {
//   const html =
//     `<img src='${data} alt>
//         <p>Click to view images of ${select.value}s</p>`;
//   card.innerHTML = html;
// }