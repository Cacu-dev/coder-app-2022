import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";
import getFetch from "../../data/Data";

const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getFetch.then((res) => setData(res)).catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>{title}</h1>
      <ItemList data={data} />
      <ItemCount />
    </>
  );
};

export default ItemListContainer;
