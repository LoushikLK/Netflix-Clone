import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./common.css";
import searchicon from "../../image/nav/searchbox.png";
import bellicon from "../../image/nav/bellicon.png";
import user from "../../image/nav/user.png";
import netflixlogo from "../../image/nav/netflixicon.png";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [searchvalue, setSearchvalue] = useState("");

  const [showsearchbar, setShowsearchbar] = useState(false);

  console.log(searchvalue);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark px-5 py-3 navbar-main">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img
              src={netflixlogo}
              alt="Netflix"
              className="img-fluid pe-2"
              style={{ height: "1.5rem" }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/tvshows">
                  TV shows
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/popular">
                  New & Popular
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mylist">
                  My List
                </NavLink>
              </li>
            </ul>
            <div className="searchbox d-flex">
              <form className="d-flex ">
                <div className="searchbox-icon">
                  <img src={searchicon} alt="search" />
                </div>

                <input
                  className="form-control me-2 searcharea"
                  type="search"
                  placeholder="Search"
                  value={searchvalue}
                  aria-label="Search"
                  onChange={(e) => {
                    e.preventDefault();
                    if (e.target.value === "" || null | undefined) {
                      setShowsearchbar(false);
                      setSearchvalue("");
                    } else {
                      setShowsearchbar(true);
                      setSearchvalue(e.target.value);
                    }
                  }}
                />

                {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </form>
              <div className="d-flex px-2">
                <img src={bellicon} alt="Notification" />
              </div>
              <div className="d-flex">
                <img src={user} alt="User" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      {showsearchbar ? <Searchbar value={searchvalue} /> : ""}
    </>
  );
};

export default Navbar;

// export { Searchbarstate, Searchstate };
