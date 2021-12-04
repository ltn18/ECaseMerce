import React, { useState } from "react";
import axios from "axios";
import "../css/Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [searchInput, setSearchInput] = useState("");

  const history = useHistory();

  const handleAuthentication = () => {
    if (user) {

    }
  };

  const processInput = (input) => {
    let res = "";
    let s = input.split(" ");
    for (let i = 0; i < s.length - 1; i++) res += s[i] + "%20";
    res += s[s.length - 1];
    return res;
  };

  const handleSearch = async () => {
    if (searchInput !== "") {
      const pinp = processInput(searchInput);
      await axios
        .post(`http://localhost:8080/products?search=${pinp}`)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src="ECaseMerce_edit.jpg"></img>
      </Link>
      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        ></input>
        <SearchIcon
          className="header__searchIcon"
          onClick={handleSearch}
          style={{ cursor: "pointer" }}
        ></SearchIcon>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__flag"></span>
        </div>
        <Link className="text-link" to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {user
                ? "Hi, " +
                  user?.email.substring(0, user?.email.indexOf("@"))
                : "Hi, student"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>
        <Link className="text-link" to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">My</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>
        <Link className="text-link" to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
