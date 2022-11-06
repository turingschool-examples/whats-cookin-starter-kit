function getData(url) {
  return fetch(url)
    .then(response => {
      console.log(response.status)
      if(response.ok) {
        return response.json()
      } else if(response.status === 404) {
        return Promise.reject('error 404')
      } else {
        return Promise.reject('some other error: ' + response.status)
      } 
    })
    .then(data => console.log('data is', data))
    .catch(error => console.log('error is', error))
}
// "There was an error, please refresh the page and try again."

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
