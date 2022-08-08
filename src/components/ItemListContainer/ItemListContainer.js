import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import ItemCount from "../ItemCount/ItemCount";
import getFetch from "../../data/Data";
import "./itemListContainer.css";

const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getFetch.then((res) => setData(res)).catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="item__listContainer">
        <ItemList data={data} />
      </div>
      <ItemCount />
    </>
  );
};

export default ItemListContainer;
