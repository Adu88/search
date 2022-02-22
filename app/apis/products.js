import _ from 'lodash';

//we use the memoize method from Lodash so that we cache the api calls and only call it 1 time / search term
export const getProducts = _.memoize( async searchTerm => {
    const res = await fetch(`http://localhost:3035/products/search?searchTerm=${searchTerm}`);
    return await res.json();
})