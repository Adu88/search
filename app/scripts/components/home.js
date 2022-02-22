import React from 'react';
import Product from "./product";


const Home = ({ products, noResults }) => {
    const renderProducts = (product => {
        return <Product key={product._id} product={product}/>
    })
    const productsShown = products.length > 4 ? 4 : products.length;
    return (
        <section id="home">
            {products.length ?
                <div>
                    <h3>{`DISPLAYING ${productsShown} OF ${products.length} RESULTS SEE ALL RESULTS`}</h3>
                    <div className='search-results'>
                        {products.slice(0, 4).map(renderProducts)}
                    </div>
                </div>
                : null
            }

            {noResults &&
                <p id="no-results">No results found</p>
            }
        </section>
    );
}


export default Home;
