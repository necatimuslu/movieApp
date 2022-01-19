import React from "react";

const VideoMovie = ({ v }) => {
  return (
    <>
      <iframe
        width="100%"
        height="315px"
        src={`https://www.youtube.com/embed/${v?.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default VideoMovie;
