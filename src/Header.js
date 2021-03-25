import React from 'react';
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {

    const[{basket, user}, dispatch] = useStateValue();

    const history = useHistory();

    const searchFilter = (e) => {
        history.push("/search");
        dispatch({
            type: 'SEARCH',
            value: e.target.value,
        })
    };

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="icon"></img>
            </Link>
            <div
                className="header__search"
            >
                <input className="header__searchInput" type="text" onChange={searchFilter}></input>    
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div> 

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__flag"></span>
                </div>
                <Link className="text-link" to={!user && "/login"} >
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">{user ? "Welcome, " + user?.email.substring(0, user?.email.indexOf('@')) : "Welcome, guest"}</span>
                    <span className="header__optionLineTwo">{user ? "Sign out" : "Sign in"}</span>
                </div>
                </Link>
                <Link className="text-link" to="/orders">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
                </Link>
                <Link className="text-link" to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;