import React from "react";

const Item = ({ title, description, price, pictureUrl }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <img src={pictureUrl} />
    </>
  );
};

export default Item;
