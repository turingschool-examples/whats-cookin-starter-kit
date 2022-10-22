
let gatherData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err))
}


console.log('I will be a fetch request!');


export default gatherData