function getData(url) {
  return fetch(url)
    .then(response => {
      console.log(response)
      if(response.ok) {
        return response.json()
      } else if(response.status === 404) {
        return Promise.reject(' error 404')
      }
      // else if(response.status ) {
      //   return Promise.reject(' some other error: ' + response.status)
      // } 
      else {
        console.log(response.status)
      }
    })
    .catch(error => alert("There was an error, please refresh the page and try again."))
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
