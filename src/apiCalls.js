export let getData = ( dataType ) => {
    return fetch( `https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${ dataType }` )
        .then( response => response.json() )
        .catch( error => console.log( error ) );
}