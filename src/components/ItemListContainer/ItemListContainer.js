import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <ItemCount />
    </>
  );
};

export default ItemListContainer;
