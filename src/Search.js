import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import "./Search.css";
import { useStateValue } from './StateProvider';

const Search = () => {
    const [{db, searchValue}, dispatch] = useStateValue();
    return (
        <div className="search">
            <div>
                    <h2 className="search__result">Search result</h2>
                        {db.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map(item => (
                            <Link className="text-link" to="/">
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                hideButton
                            />
                            </Link>
                        ))}
            </div>
            
        </div>
    );
};

export default Search;