import {useState, useEffect} from "react";
import ContainerBackground from "../containerBackground/ContainerBackground";
import infoLateral from "../infoLateral/infoLateral";

import "./Tienda.css";
import { NavLink } from "react-router-dom";

import {getProductos, getProductosPorCategoria, getUnProducto} from '../../asyncmock'
import ItemList from '../ItemList/ItemList';
import ItemDetail from "../ItemDetail/ItemDetail";


import { useParams } from 'react-router-dom';

const Tienda = () => {

  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect(() => {

    setProductos([])

      const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

      funcionProductos(idCategoria)
          .then(res => setProductos(res))
          .catch(error => console.error(error))

       
  }, [idCategoria])

    const [producto, setProducto] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
    }, [idItem])



  return (

    <div>
      <ContainerBackground>
        <div className="navBarTienda">
          <ul className="listaNavBar">
            <li>
              <NavLink className={'liNavLink'} to={"/Tienda/categoria/1"}>Armas Ninja</NavLink>
            </li>
            <li>
              <NavLink className={'liNavLink'} to={"/Tienda/categoria/2"}>Herramientas</NavLink>
            </li>
            <li>
              <NavLink className={'liNavLink'} to={"/Tienda/categoria/3"}>Mascotas</NavLink>
            </li>
          </ul>
        </div>
        <ItemList productos={productos}/>

      </ContainerBackground>

      <infoLateral>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, placeat culpa totam, consectetur maxime quo quam aliquid pariatur voluptatum, nemo inventore sapiente quas quaerat illo eos voluptate nam esse quod! Id cum alias exercitationem incidunt quam provident libero dolore ducimus.</p>

      </infoLateral>


    </div>



  );
};

export default Tienda;
