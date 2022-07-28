import { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
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
    <div className="counterContainer">
      <button className="counterContainer__btn" onClick={onRemove}>
        -
      </button>
      <p className="counterContainer__num">{counter}</p>
      <button className="counterContainer__btn" onClick={onAdd}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
