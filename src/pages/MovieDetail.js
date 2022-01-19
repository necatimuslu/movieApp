import React, { useEffect, useState } from "react";
import { Image } from "primereact/image";
import {
  getMovieById,
  getVideoMovie,
  getMovieImages,
} from "../services/moviesServices";
import { AiFillStar } from "react-icons/ai";
import { Tabs } from "antd";

import MovieDescription from "../components/movie/MovieDescription";
import VideoMovie from "../components/movie/VideoMovie";
import MovieCreditsCarousel from "../components/movie/MovieCreditsCarousel";
const { TabPane } = Tabs;
const MovieDetail = ({ match }) => {
  const [movie, setMovie] = useState("");
  const [videoMovie, setVideoMovie] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  useEffect(() => {
    getVideoMovie(match.params.id)
      .then((res) => setVideoMovie(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getMovieById(match.params.id)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getMovieImages(match.params.id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slide">
          <>
            <div className="slide-bg">
              <img
                className="slide-bg-image"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="resim"
              />
            </div>
            <div className="slide-pane">
              <h2 className="movie-name">{movie && movie.original_title}</h2>
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
        </div>
      </div>
      <div>
        <Tabs className="bg-dark" defaultActiveKey="['1','2','3']" type="card">
          <TabPane tab="Açıklama" key="1">
            <MovieDescription movie={movie} />
          </TabPane>
          <TabPane tab="Videolar" key="2">
            <div className="row">
              {videoMovie &&
                videoMovie.map((v, i) => (
                  <div key={i} className="col-md-4 col-lg-4 col-sm-12 ml-3">
                    {" "}
                    <VideoMovie v={v} />{" "}
                  </div>
                ))}
            </div>
          </TabPane>
          <TabPane tab="Fotoğraflar" key="3">
            <Image
              src="https://www.imdb.com/title/tt0068646/mediaviewer/rm746868224/"
              template="Preview Content"
              alt="Film resmi"
            />
          </TabPane>
        </Tabs>
      </div>
      <MovieCreditsCarousel movie={movie} match={match} />
    </>
  );
};

export default MovieDetail;
