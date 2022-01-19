import React from "react";

import { Card, Tooltip } from "antd";
import { AiFillStar } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { Link } from "react-router-dom";
const { Meta } = Card;
const BannerCard = ({ p }) => {
  return (
    <Card
      style={{ width: "100%", marginTop: 16 }}
      cover={
        <img
          style={{ width: "100%", height: "150px" }}
          alt="Logo"
          src={`https://image.tmdb.org/t/p/original/${p.backdrop_path}`}
        />
      }
      actions={[
        <>
          <AiFillStar className="fas" key="star" />
          <p>{p.vote_average} / 10</p>
        </>,
        <Tooltip title="Film Detay">
          <Link to={`/movie/${p.id}`}>
            <p style={{ padding: 0, margin: 0 }}>Film Detay</p>
            <GrFormView
              style={{ fontSize: "30px", color: "blue" }}
              key="edit"
            />
          </Link>
        </Tooltip>,
      ]}
    >
      <Meta
        title={p.original_title}
        description={
          p.overview
            ? p.overview && p.overview.substring(0, 30) + "..."
            : "Necati Muslu test için yazıldı"
        }
      />
    </Card>
  );
};

export default BannerCard;
