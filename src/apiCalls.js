// Your fetch requests will live here!


const fetchData = (type, link, fn) => {
  return fetch(link)
    .then(response => response.json())
    .then(data => {
      return fn(data[type]);
    })
    .catch(error => console.log("An error occurred. Oh dear!:", error)) //Fix sad path... what should happen if error
};

export {
  fetchData
};



  



