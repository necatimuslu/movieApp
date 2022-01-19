import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.5rem 1rem",
        height: "65px",
        backgroundColor: "#212121",
        margin: "0px",
        borderBottom: "1px solid #333",
      }}
    >
      <span style={{ color: "#fff" }}>
        © 2022 Tüm hakları saklıdır. Necati MUSLU
      </span>
    </footer>
  );
};

export default Footer;
