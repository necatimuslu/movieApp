import React, { useEffect, useState } from "react";
import MovieCategoryCard from "../components/movie/MovieCategoryCard";

import { getMovieGenres } from "../services/moviesServices";
const Category = () => {
  const [movieCategory, setMovieCategory] = useState([]);

  useEffect(() => {
    getMovieGenres()
      .then((res) => setMovieCategory(res.data.genres))
      .catch((err) => console.log(err));
  }, []);
  console.log(movieCategory);
  return (
    <div className="container-fluid bg-dark">
      <h3 className="text-center text-white pt-2 mb-3">Film Kategoriler</h3>
      <div className="row">
        {movieCategory &&
          movieCategory.map((m, i) => (
            <div key={i} className="col-sm-12 col-md-2 col-lg-2">
              <MovieCategoryCard m={m} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Category;
