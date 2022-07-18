export let fetchData = (data) =>  {
  return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${data}`)
    .then(rsp => rsp.json() )
    .catch(error => console.log(error));
}
