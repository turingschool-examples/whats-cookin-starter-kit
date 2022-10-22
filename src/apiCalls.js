// Your fetch requests will live here!

function getData(url) {
  console.log("getData is working!")
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log("Fetch error: ", error))
}

export default getData

console.log('I will be a fetch request!')