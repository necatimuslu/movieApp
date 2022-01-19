import React from "react";

import "./Header.css";
import logo from "../logo/movie.png";
import { Link } from "react-router-dom";
import { BiMoviePlay, BiHomeHeart } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";
const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link
          to="/"
          className="navbar-logo"
          style={{ display: "block", textDecoration: "none" }}
        >
          <img style={{ width: "60px" }} src={logo} alt="logo" />
        </Link>
        <ul
          className="navbar-links"
          style={{
            display: "block",
            padding: "0",
            margin: "0",
            listStyle: "none",
          }}
        >
          <li style={{ display: "inline" }}>
            <Link
              className="header-link"
              style={{
                color: "#fff",
                fontSize: "14px",
                marginRight: "14px",
                textDecoration: "none",
              }}
              to="/"
            >
              <BiHomeHeart style={{ fontSize: "20px", marginRight: "2px" }} />
              Anasayfa
            </Link>
          </li>
          <li style={{ display: "inline" }}>
            <Link
              className="header-link"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "14px",
                marginRight: "14px",
              }}
              to="/movie"
            >
              <BiMoviePlay style={{ fontSize: "20px", marginRight: "2px" }} />
              Filmler
            </Link>
          </li>
          <li style={{ display: "inline" }}>
            <Link
              className="header-link"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "14px",
                marginRight: "14px",
              }}
              to="/tv"
            >
              <MdLocalMovies style={{ fontSize: "20px", marginRight: "2px" }} />
              TV dizileri
            </Link>
          </li>
          <li style={{ display: "inline" }}>
            <Link
              className="header-link"
              style={{
                textDecoration: "none",
                color: "#fff",
                fontSize: "14px",
                marginRight: "14px",
              }}
              to="/category"
            >
              <RiMovie2Line style={{ fontSize: "20px", marginRight: "2px" }} />
              Kategoriler
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
