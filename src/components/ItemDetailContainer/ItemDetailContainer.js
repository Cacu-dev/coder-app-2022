import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getFetch from "../../data/Data";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getFetch.then((res) => setData(res)).catch((err) => console.error(err));
  }, [data]);
  return (
    <>
      <h1>{ItemDetail}</h1>
      <ItemDetail data={data} />
    </>
  );
};

export default ItemDetailContainer;
