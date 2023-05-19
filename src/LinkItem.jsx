import React from "react";
import Banners from "./images/banners.png";
const LinkItem = (props) => {
  return (
    <div
      className="LinkItem"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        padding: "50px 10px",
      }}
    >
      <a href={props.url} rel="noopener noreferrer">
        <img src={Banners} alt={props.title} />

        <p>{props.title}</p>
      </a>
    </div>
  );
};

export default LinkItem;
