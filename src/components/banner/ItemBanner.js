import React, { useEffect, useState } from "react";

import { getMovies } from "../../services/moviesServices";
import BannerCard from "./BannerCard";
const ItemBanner = () => {
  const [populerRatedMovie, setPopulerRatedMovie] = useState([]);
  const [newPlayinMovie, setNowPlayinMovie] = useState([]);

  useEffect(() => {
    getMovies().then((res) => setPopulerRatedMovie(res.data.results));
    getMovies("now_playing").then((res) => setNowPlayinMovie(res.data.results));
  }, []);
  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#212121",
      }}
    >
      <h4
        style={{ fontSize: "35px", fontWeight: "bold" }}
        className="text-center text-white bg-secondary "
      >
        Yüksek Oy Alan Filmler
      </h4>
      <div className="row">
        {populerRatedMovie &&
          populerRatedMovie.slice(0, 12).map((p, i) => (
            <div key={i} className="col-sm-12 col-lg-2 col-md-3 mt-2 mb-2 ">
              <BannerCard p={p} />
            </div>
          ))}
      </div>
      <h4
        style={{ fontSize: "35px", fontWeight: "bold" }}
        className="text-center text-white bg-secondary"
      >
        Sinemadaki Filmler
      </h4>
      <div className="row mt-2">
        {newPlayinMovie &&
          newPlayinMovie.slice(0, 12).map((p, i) => (
            <div key={i} className="col-sm-12 col-lg-2 col-md-3 mt-2 mb-2 ">
              <BannerCard p={p} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemBanner;
