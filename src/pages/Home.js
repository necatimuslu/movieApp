import React, { useEffect, useState } from "react";
import ItemBanner from "../components/banner/ItemBanner";
import Slider from "../components/slider/Slider";

import { getPopulerMovie } from "../services/moviesServices";
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopulerMovie()
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="slider">
        {movies &&
          movies.map((movie, i) => {
            return (
              <div key={i}>
                {" "}
                <Slider movie={movie} i={i} />{" "}
              </div>
            );
          })}
      </div>
      <ItemBanner />
    </>
  );
};

export default Home;
