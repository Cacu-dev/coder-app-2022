import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getFetch from "../../data/Data";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getFetch
      .then((res) => setData(res.find((p) => p.id === +id)))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <h1>{ItemDetail}</h1>
      <ItemDetail {...data} />
    </>
  );
};

export default ItemDetailContainer;
