import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ counter, setCounter }) => {
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
      <div className="counterContainer__btns">
        <button className="counterContainer__btn" onClick={onRemove}>
          -
        </button>
        <p className="counterContainer__num">{counter}</p>
        <button className="counterContainer__btn" onClick={onAdd}>
          +
        </button>
      </div>
      <div>
        {counter > 0 && (
          <Link to={`/cart`}>
            <button className="counterContainer__btn-comprar">
              Terminar compra
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
