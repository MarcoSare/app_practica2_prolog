import "../../assets/styles/styles.css";
import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import {SelectArea} from '../../components/SelectArea'
import {SelectUserByArea} from '../../components/SelectUserByArea'
export const DashBoard = () =>{


  const [area, setArea] = useState(null)
  const [users, setUsers] = useState(null)

    return( 
    <>
    <NavBar/>
        
     <section className="dash-board-section container_center">

     <form role="form" method="post" action="" className="dash-board-form">
        <div className="col-md-12 centrar">
          <label className="titulo">ADMINISTRADOR</label>
        </div>
        <div className="col-md-12 margin-bottom10">
          <label className="col-md-4 text-align-end">DEPARTAMENTO:</label>
         <SelectArea 
         area={area}
         setArea={setArea}
         />
        </div>
        <div className="col-md-12 margin-bottom10">
          <label className="col-md-4 text-align-end">MAQUINA:</label>
          <select className="col-md-8 widthFormulario" type="text" name="sctMachine"></select>
        </div>
        <div className="col-md-12 margin-bottom10">
          <label className="col-md-4 text-align-end">USUARIO:</label>
          <SelectUserByArea 
          idArea={area}
          users={users}
          setUsers={setUsers}
          />
        </div>
        <div className="col-md-12 margin-bottom10">
          <label className="col-md-4 text-align-end">EMAIL:</label>
          <input className="col-md-8 widthFormulario" type="email" name="txtEmail"/>
        </div>
        <div className="col-md-12 margin-bottom10">
          <label className="col-md-4 text-align-end">FECHA DE MANTENIMIENTO:</label>
          <input className="col-md-8 widthFormulario" type="date" name="txtFecha"/>
        </div>
        <div className="col-md-12 margin-bottom10">
          <label className="col-md-4 text-align-end">PERSONA:</label>
          <input className="col-md-8 widthFormulario" type="text" name="txtPersona"/>
        </div>
        <div className="col-md-12 centrar">
          <input type="submit" className="btn btn-primary btnRegistrar" value="REGISTRAR"/>
        </div>
      </form>
</section>
    </>
    );
   
}