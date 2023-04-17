import React from "react";
// import Swal from "sweetalert2";
import "./ContainerBackground.css";




const ContainerBackground = ({ children }) => {

  return (
    <div className="container-md containerBackground">

      {children}


    </div>
  );
};

export default ContainerBackground;

