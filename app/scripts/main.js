/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';
import {getProducts} from '../apis/products';

const App = () => {
    const [products, setProducts] = useState([]);
    const [noResults, setNoResults] = useState(false);

    const onSearchSubmit = async searchTerm => {
        const response = await getProducts(searchTerm);
        setNoResults(response.length === 0);
        setProducts(response);
    }

    const clearResults = () => {
        setProducts([]);
        setNoResults(false);
    };

    return (
        <div className="App">
            <Menu onSearchSubmit={onSearchSubmit} clearResults={clearResults}/>
            <Home products={products} noResults={noResults}/>
        </div>
    );

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
