import { useState, useEffect } from "react";
import ContainerBackground from "../containerBackground/ContainerBackground";
import "./Tienda.css";
import { NavLink, useParams } from "react-router-dom";

import {
  getProductos,
  getProductosPorCategoria,
  getUnProducto,
} from "../../asyncmock";
import ItemList from "../ItemList/ItemList";


const Tienda = () => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    setProductos([]);

    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProductos;

    funcionProductos(idCategoria)
      .then((res) => setProductos(res))
      .catch((error) => console.error(error));
  }, [idCategoria]);


  return (
    <div>
      <ContainerBackground>
        <div className="navBarTienda">
          <ul className="listaNavBar">
            <li>
              <NavLink className={"liNavLink"} to={"/Tienda/categoria/1"}>
                Armas Ninja
              </NavLink>
            </li>
            <li>
              <NavLink className={"liNavLink"} to={"/Tienda/categoria/2"}>
                Herramientas
              </NavLink>
            </li>
            <li>
              <NavLink className={"liNavLink"} to={"/Tienda/categoria/3"}>
                Mascotas
              </NavLink>
            </li>
          </ul>
        </div>
        <ItemList productos={productos} />
      </ContainerBackground>



    </div>
  );
};

export default Tienda;

