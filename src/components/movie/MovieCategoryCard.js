import React from "react";
import { Link } from "react-router-dom";

const MovieCategoryCard = ({ m }) => {
  return (
    <Link to={`/movie/genres/${m.id}`} className="category-link">
      {m.name}
    </Link>
  );
};

export default MovieCategoryCard;
