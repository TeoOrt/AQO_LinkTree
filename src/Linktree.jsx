import React from "react";
import LinkItem from "./LinkItem";

const Linktree = () => {
  const links = [
    {
      title: "instagram",
      url: "https://www.instagram.com/aqo.balloons/",
    },
    {
      title: "facebook",
      url: "https://www.facebook.com/marketplace/profile/100003196782318",
    },
    {
      title: "cashapp",
      url: "https://cash.me/$aylinquintanaa",
    },
    {
      title: "venmo",
      url: "https://venmo.com/u/mateomx",
    },
    // {
    //   title: "paypal",
    //   url: "https://example.com/link3",
    // },
  ];

  return (
    <div>
      {links.map((link, index) => (
        <LinkItem key={index} title={link.title} url={link.url} />
      ))}
    </div>
  );
};

export default Linktree;
