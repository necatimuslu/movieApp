import React, { useEffect, useState } from "react";

import { AiFillStar } from "react-icons/ai";
const Slider = ({ movie, i }) => {
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentSliderIndex((c) => (c = ++c % 20));
    }, 5000);
  }, []);
  return (
    <div key={i} className="slide">
      {i === currentSliderIndex && (
        <>
          <div className="slide-bg">
            <img
              className="slide-bg-image"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="resim"
            />
          </div>
          <div className="slide-pane">
            <h2 className="movie-name text-white">
              {movie && movie.original_title}
            </h2>
            <div className="meta">
              <div className="info">
                <span className="rating">
                  <AiFillStar className="fas" />
                  <span className="rating-value">
                    {movie && movie.vote_average}
                  </span>
                  <span>/10</span>
                </span>
                <span>{movie && movie.vote_count} Reviews</span>
                <span>{movie && movie.release_date}</span>
              </div>
            </div>
            <div className="desc mt-3">{movie && movie.overview}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
