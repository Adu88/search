import React, {useState, useEffect} from 'react';

const Menu = ({ onSearchSubmit, clearResults }) => {
    const [showingSearch, setShowingSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    // update 'searchTerm' value after 1 second from the last update of 'debouncedTerm'
    useEffect(() => {
        const timer = setTimeout(() => setSearchTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm])

    useEffect(() => {
        if(searchTerm !== ''){
            onSearchSubmit(searchTerm);
        } else {
            clearResults();
        }
    }, [searchTerm]);

    const closeSearch = () => {
        setShowingSearch(!showingSearch);
        clearResults();
        setDebouncedTerm('');
    }
    return (
        <header className="menu">
            <div className="menu-container">
                <div className="menu-holder">
                    <h1>ELC</h1>
                    <nav>
                        <a href="#" className="nav-item">HOLIDAY</a>
                        <a href="#" className="nav-item">WHAT'S NEW</a>
                        <a href="#" className="nav-item">PRODUCTS</a>
                        <a href="#" className="nav-item">BESTSELLERS</a>
                        <a href="#" className="nav-item">GOODBYES</a>
                        <a href="#" className="nav-item">STORES</a>
                        <a href="#" className="nav-item">INSPIRATION</a>

                        <a href="#" onClick={() => closeSearch()}>
                            <i className="material-icons search">search</i>
                        </a>
                    </nav>
                </div>
            </div>
            {showingSearch &&
                <div className="search-container">
                    <input type="text"
                           value={debouncedTerm}
                           placeholder='SEARCH'
                           onChange={(e) => setDebouncedTerm(e.target.value)} />
                    <a href="#" onClick={() => closeSearch()}>
                        <i className="material-icons close">close</i>
                    </a>
                </div>
            }
        </header>
    );
}

// Export out the React Component
export default Menu;