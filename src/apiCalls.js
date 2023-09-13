// Your fetch requests will live here!

import { printError } from "./domUpdates";


const fetchData = (type, link, fn) => {
  return fetch(link)
    .then(response => response.json())
    .then(data => {
      return fn(data[type]);
    })
    .catch(error => {
       console.error(`An error occurred: ${error}`);
       printError(error, type)
    })
};

export {
  fetchData
};



  



