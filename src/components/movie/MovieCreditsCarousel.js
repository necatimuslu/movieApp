import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
import { getMovieCredits } from "../../services/moviesServices";
const MovieCreditsCarousel = ({ movie, match }) => {
  const [movieCredits, setMovieCredits] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  useEffect(() => {
    getMovieCredits(match.params.id)
      .then((res) => setMovieCredits(res.data.cast))
      .catch((err) => console.log(err));
  }, []);
  const itemTemplate = (movie) => {
    return (
      <div style={{ margin: 0 }}>
        <img src={`https://image.tmdb.org/t/p/w300/${movie.profile_path}`} />
        <span style={{ display: "block", textAlign: "center", color: "#fff" }}>
          {movie.name}
        </span>
      </div>
    );
  };

  return (
    <div className="bg-dark">
      <Carousel
        numVisible={4}
        responsiveOptions={responsiveOptions}
        value={movieCredits}
        itemTemplate={itemTemplate}
        autoplayInterval={3000}
      ></Carousel>
    </div>
  );
};

export default MovieCreditsCarousel;
