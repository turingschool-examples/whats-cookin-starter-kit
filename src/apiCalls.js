// Your fetch requests will live here!
function fetchApiData(url) {
    return fetch(url)
        .then(data => data.json())
};
export { fetchApiData }
console.log('I will be a fetch request!')