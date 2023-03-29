import React, { useState } from "react";
// import Swal from "sweetalert2";
import "./ContainerBackground.css";
import logoGenerico from '../../media/img/logoshinobi.png'
import ItemCount from "../ItemCount/ItemCount";
import ItemListContainer from "../ItemListContainer/ItemListContainer"



const ContainerBackground = () => {

  return (
    <div className="container-md containerBackground">
      
      <h1>No tenemos más productos, estamos pobres</h1>
      <ItemListContainer greeting="Bienvenido a la Tienda Chinovis"/>

      <div className="productoGenerico">
        <img src={logoGenerico} alt="producto"/>
        <p className="infoProducto">Es solo una imagen. No la compres, aunque quizas sirva como NFT, si te gustan los NFT, eres tonto, pero puedes comprarlo</p>

        <div className="compraOptions">
          <ItemCount/>
          <div className="ComprarButton">Comprar</div>
        </div>


      </div>

    </div>
  );
};

export default ContainerBackground;
