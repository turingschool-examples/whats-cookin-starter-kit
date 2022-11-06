function getData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(() => {
      console.log(response)
      if (!response.ok) {

        throw Error(response.status)
      }
      return response
    })
    .catch(error => {
      // console.log(error)
      if(error instanceof TypeError) {
        alert("Sorry, there is an issue with our data server. Please try again later. 🙈")
      }
    })
}

function postData(body, url) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(() => getData(url))

}

export { getData, postData } 
