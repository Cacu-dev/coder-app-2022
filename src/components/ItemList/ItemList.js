import React from "react";
import Item from "../Item/Item";

const ItemList = ({ data }) => {
  console.log("Data", data);
  return data.map((item) => {
    <div key={item.id}>
      <Item
        title={item.title}
        description={item.description}
        price={item.price}
        pictureUrl={item.pictureUrl}
      />
    </div>;
  });
};

export default ItemList;
