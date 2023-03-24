import "../../assets/styles/styles.css";
import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import {SelectArea} from '../../components/SelectArea'
import {SelectUserByArea} from '../../components/SelectUserByArea'
import { SelectCompuByUser } from "../../components/SelectCompuByUser";
import { SelectSupport } from "../../components/SelectSupport";
import maintServices from "../../services/maintServices";
import Select from "react-select";

export const DashBoard = () =>{


  const [area, setArea] = useState(null)
  const [listUsers, setListUsers] = useState([])
  const [user, setUser] = useState([])
  const [listCompu, setListCompus] = useState([])
  const [compu, setCompu] = useState([])
  const [support, setSupport] = useState(null)
  const [date, setDate] = useState(null)
  const [maint, setMaint] = useState(null)
  const optionMaint= [
    {value: "Preventivo", label: 'Preventivo'},
    {value: "Correctivo", label: 'Correctivo'}
  ]
  
  //const []



  const handleMaintenance = async (e) => {
    e.preventDefault();
    try{
        const res = await maintServices.addMaint(area, compu[0].value, date, support, maint)
        console.log(area)
        console.log(compu)
        console.log(date)
        console.log(support)
        
        if(res.status===200){
            alert("insertado")
        }else{
          alert("Error")
        }
    }
    catch(error){
        alert('critical error');
    }
  }

    return( 
    <>
    <NavBar/>
     <section className="dash-board-section container_center">
     <form onSubmit={handleMaintenance} className="dash-board-form">
        <div className="col-md-12 centrar">
          <label className="titulo">ADMINISTRADOR</label>
        </div>
        <div className="div_selects">
          <label className="label_maint">DEPARTAMENTO:</label>
         <SelectArea 
         setArea={setArea}
         setListUsers = {setListUsers}
         setUser = {setUser}
         setCompu = {setCompu}
         />
        </div>
        <div className="div_selects">
          <label className="label_maint">USUARIO:</label>
          <SelectUserByArea 
          listUsers={listUsers}
          setListCompus = {setListCompus}
          user={user}
          setUser = {setUser}
          setCompu = {setCompu}
          />
        </div>
        <div className="div_selects">
          <label className="label_maint">MAQUINA:</label>
          <SelectCompuByUser
          listCompu ={listCompu}
          compu = {compu}
          setCompu = {setCompu}
          />
        </div>
       
        <div className="div_selects">
          <label className="label_maint">EMAIL:</label>
          <input className="col-md-8 widthFormulario" type="email" name="txtEmail" value={user.length > 0? user[0].email:''} readOnly={true} required/>
        </div>
        <div className="div_selects">
          <label className="label_maint">FECHA DE MANTENIMIENTO:</label>
          <input className="col-md-8 widthFormulario" type="date" name="txtFecha" 
          onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className="div_selects">
          <label className="label_maint">PERSONA:</label>
          <SelectSupport
          setSupport = {setSupport}
          />
        </div>
        <div className="div_selects">
          <label className="label_maint">TIPO DE MANTENIMIENTO:</label>
          <Select options={optionMaint} className="col-md-8 widthFormulario select" onChange={(choice) => setMaint(choice.value)} required />
        </div>
        <div className="col-md-12 centrar">
          <input type="submit" className="btn btn-primary btnRegistrar" value="REGISTRAR"/>
        </div>
      </form>
</section>
    </>
    );
   
}