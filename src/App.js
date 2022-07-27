import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  let title =
    "Soy el ItemListContainer. Por el momento te muestro un Contador. Próximamente tendré más contenido.";
  return (
    <>
      <NavBar />
      <ItemListContainer title={title} />
    </>
  );
}

export default App;
