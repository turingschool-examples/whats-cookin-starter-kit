// Your fetch requests will live here!

function getData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log("Fetch error: ", error))
}

function postData(body) {
  return fetch('http://localhost:3001/api/v1/users', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => {return response.json()})
}
// export default {getData, postData}
export {getData, postData} 
// export {postData 
