const productos = [
  {
    id: "1",
    nombre: "Shuriken Convencional",
    precio: 300,
    img: "/media/img/tienda/shurikenNormal.webp",
    idCat: "1",
  },
  {
    id: "1",
    nombre: "Katana Convencional",
    precio: 1000,
    img: "/media/img/tienda/Katana.webp",
    idCat: "1",
  },
  {
    id: "2",
    nombre: "Pergamino",
    precio: 350,
    img: "/media/img/tienda/Pergamino.png",
    idCat: "2",
  },
  {
    id: "2",
    nombre: "MedKit",
    precio: 600,
    img: "/media/img/tienda/medkit.jpg",
    idCat: "2",
  },
  {
    id: "3",
    nombre: "Gato Blanco",
    precio: 10000,
    img: "/media/img/tienda/gatoBlanco.jpg",
    idCat: "3",
  },
  {
    id: "3",
    nombre: "Gato Negro",
    precio: 10000,
    img: "/media/img/tienda/gatoNegro.png",
    idCat: "3",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
