import React, { useEffect, useState } from "react";
import BannerCard from "../components/banner/BannerCard";

import {
  searchMovies,
  getMovieGenreById,
  getMovieSearch,
} from "../services/moviesServices";
import { Paginator } from "primereact/paginator";
import { AiOutlineSearch } from "react-icons/ai";
const Movie = ({ match }) => {
  const [movies, setMovies] = useState([]);
  const [movieGenre, setMovieGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    fetchSearch(1);
    fethcGenreMovie(page);
  }, []);
  const fetchSearch = (p) => {
    searchMovies(p)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };

  const fethcGenreMovie = (p) => {
    getMovieGenreById(match.params.id, p)
      .then((res) => setMovieGenre(res.data.results))
      .catch((err) => console.log(err));
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovieSearch(page, keyword)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container-fluid" style={{ backgroundColor: "#212121" }}>
      <div className="row">
        <div className="col-md-12 col-sm-12 pt-2">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
              type="search"
              className="form-control bg-dark "
              placeholder="Arama..."
              onChange={handleSearch}
              style={{ width: "97%", color: "#fff" }}
              value={keyword}
            />
            <AiOutlineSearch
              style={{ fontSize: "28px", color: "#fff", width: "3%" }}
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
      <div className="row">
        {match.params.id
          ? movieGenre &&
            movieGenre.map((m, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-12">
                {" "}
                <BannerCard p={m} />{" "}
              </div>
            ))
          : movies &&
            movies.map((m, i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-12">
                {" "}
                <BannerCard p={m} />{" "}
              </div>
            ))}
      </div>
      <div>
        <Paginator
          rows={20}
          totalRecords={1000}
          onPageChange={(e) => fetchSearch(e.page + 1)}
        ></Paginator>
      </div>
    </div>
  );
};

export default Movie;
