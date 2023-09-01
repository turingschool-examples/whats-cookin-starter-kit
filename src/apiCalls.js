
const apiCalls = (dataType) => {
  return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${dataType}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      
      return response.json();
    })
    .catch(error => {
      console.error(`Error fetching ${dataType}: ${error}`);
    });
}
const promises = [
  apiCalls('users'),
  apiCalls('ingredients'),
  apiCalls('recipes')
];
export default promises;
