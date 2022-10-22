// Your fetch requests will live here!

function getData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log("Fetch error: ", error))
}

export default getData
