import React from "react";
import moment from "moment";
const MovieDescription = ({ movie }) => {
  return (
    <div className="row">
      <div className="col-md-3 col-lg-3 col-sm-12">
        <img
          style={{ maxWidth: "100%", width: "500px", height: "300px" }}
          className="mb-2"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        />
      </div>
      <div className="col-md-9 col-lg-9 col-sm-12">
        <h3 className="text-white">Film Detay</h3>
        <div style={{ lineHeight: "1.8" }} className="text-white">
          {movie.overview}
        </div>
        <div style={{ display: "flex", marginTop: "4px" }}>
          <div
            style={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Çıkış Tarihi :
          </div>
          <div style={{ marginLeft: "10px", color: "#EF6C00" }}>
            {moment(movie.release_date).format("MMM Do YYYY")}
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "4px" }}>
          <div
            style={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Orjinal Dil :
          </div>
          <div style={{ marginLeft: "18px", color: "#EF6C00" }}>
            {movie.original_language?.toUpperCase()}
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "4px" }}>
          <div
            style={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Hasılat :
          </div>
          <div style={{ marginLeft: "37px", color: "#EF6C00" }}>
            {`$ ${movie.revenue} `}
          </div>
        </div>

        <div style={{ display: "flex", marginTop: "4px" }}>
          <div
            style={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Süre :
          </div>
          <div style={{ marginLeft: "54px", color: "#EF6C00" }}>
            {` ${movie.runtime} Dakika`}
          </div>
        </div>
        <div style={{ display: "flex", marginTop: "4px" }}>
          <div
            style={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            Film Türü :
          </div>
          <div
            style={{
              marginLeft: "24px",
              color: "#EF6C00",
              marginBottom: "10px",
            }}
          >
            {movie && movie.genres.map((g) => <span key={g.id}>{g.name}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
