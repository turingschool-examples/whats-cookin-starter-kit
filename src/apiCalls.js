function getData(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.log("Fetch error: ", error)
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
}

export { getData, postData } 