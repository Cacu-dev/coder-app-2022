const Data = [
  {
    id: 1,
    title: "ZAPATILLAS RUNFALCON",
    description:
      "ZAPATILLAS DE MÁXIMA SUJECIÓN PARA TUS SALIDAS DIARIAS A CORRER",
    price: "$16.999",
    pictureUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/449c838942da409f8ba9a97f00d3cffe_9366/Zapatillas_Runfalcon_Negro_F36199_01_standard.jpg",
  },
  {
    id: 2,
    title: "ZAPATILLAS DURAMO SL 2.0",
    description:
      "ZAPATILLAS DE RUNNING PARA TU DÍA A DÍA HECHAS PARCIALMENTE CON MATERIALES RECICLADOS",
    price: "$17.999",
    pictureUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/cde9362a09ba4dd38c9ead6600ac074e_9366/Zapatillas_Duramo_SL_2.0_Negro_GW8336_01_standard.jpg",
  },
  {
    id: 3,
    title: "Zapatillas Asics Gel-Nagoya 2",
    description:
      "La tecnología ASICS GEL™ reduce los impactos, aumentando su absorción y comodidad al talón.",
    price: "$25.199",
    pictureUrl:
      "https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5e33da6f/products/AS_1012B113002/AS_1012B113002-1.JPG",
  },
  {
    id: 4,
    title: "Nike Zapatillas Running Revolution 6 NN",
    description:
      "COMODIDAD INTUITIVA CON AMORTIGUACIÓN FLEXIBLE. La comodidad es la clave de tu rutina de carrera.",
    price: "$18.450",
    pictureUrl:
      "https://www.tradeinn.com/f/13855/138552292/nike-zapatillas-running-revolution-6-nn.jpg",
  },
  {
    id: 5,
    title: "Nike Air Max Bolt",
    description:
      "Sal a jugar a la ciudad y diviértete como nunca con las zapatillas casuales Nike Air Max Bolt. Con un diseño rompedor e irreverente y una gran comodidad, estas zapatillas se harán parte de tu día a día sin que apenas te des cuenta.",
    price: "$22.199",
    pictureUrl:
      "https://www.tradeinn.com/f/13798/137982264/nike-air-max-bolt.jpg",
  },
  {
    id: 6,
    title: "ZAsics Zapatillas Running Noosa Tri 14",
    description:
      "El calzado NOOSA TRI™ 14 remezcla la inspiración archivada con un calce similar al de un calcetín. Está formado con una construcción ligera y un andar eficiente bajo los pies. Los colores y patrones llamativos en la parte superior de malla técnica están inspirados en los primeros estilos GEL-NOOSA™ de la década de 2000.",
    price: "$19.199",
    pictureUrl:
      "https://www.tradeinn.com/f/13865/138653990/asics-zapatillas-running-noosa-tri-14.jpg",
  },
];

const getFetch = new Promise((response, reject) => {
  let resp = true;
  if (resp) {
    setTimeout(() => {
      response(Data);
    }, 2000);
  } else {
    reject(console.error("No hay datos"));
  }
});

export default getFetch;
