import "./ItemCount.css";

const ItemCount = ({ onAdd, onRemove, counter }) => {
  return (
    <div>
      <button onClick={onRemove}>-</button>
      <button>{counter}</button>
      <button onClick={onAdd}>+</button>
    </div>
  );
};

export default ItemCount;
