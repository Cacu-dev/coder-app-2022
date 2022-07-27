import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";

const ItemListContainer = ({ title }) => {
  const [counter, setCounter] = useState(0);
  let stockTotal = 5;
  let initialStock = 0;

  const onAdd = () => {
    if (counter < stockTotal) setCounter(counter + 1);
  };

  const onRemove = () => {
    if (counter > initialStock) setCounter(counter - 1);
  };

  return (
    <>
      <h1>{title}</h1>
      <ItemCount onAdd={onAdd} onRemove={onRemove} counter={counter} />
    </>
  );
};

export default ItemListContainer;
