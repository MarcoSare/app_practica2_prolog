import "../../assets/styles/styles.css";
import { NavBar } from "../../components/NavBar";
import React, { useState, useEffect } from "react";
import maintServices from "../../services/maintServices";
import Select from "react-select";

export const DashBoardSupport = () => {

    const id_support = '641d5b9c77ca1e7cdfaa2b56'
    const [maint, setListMaints ] = useState(null)
    const [options, setOptions] = useState(null)
    const [date, setDate] = useState(null)
    const [compu, setCompu] = useState(null)
    
    useEffect(() => {
        getAllData()
      }, []);

      const getAllData = async ()=>{
        const response = await maintServices.getMaintBySupport(id_support);
        let options = response.map( item => { 
          return { value: item.id_computer , label : item.id_computer }; 
        });
        setOptions(options)
        setListMaints(response)
      }

      const getDate = (id_computer)=>{
        const data = maint.find((item) => item.id_computer==id_computer)
        //console.log(data)
        setDate(data.date)
      }

    if (maint != null)
    return( 
        <>
        <NavBar/>
         <section className="dash-board-section container_center">
         <form  className="dash-board-form">
            <div className="col-md-12 centrar">
              <label className="titulo">ADMINISTRADOR</label>
            </div>
            <div className="div_selects">
              <label className="col-md-4 text-align-end">DEPARTAMENTO:</label>
            <Select
            options={options}
            className = 'col-md-8 widthFormulario select'
            onChange={(e) => {
                console.log(e.value)
                setCompu(e.value)
                getDate(e.value)
            }}
                
            />
            </div>
           
           
            
            <div className="col-md-12 margin-bottom10">
              <label className="col-md-4 text-align-end">FECHA:</label>
              <input className="col-md-8 widthFormulario" type="date" value={date!= null ? date:''} name="txtFecha" readOnly={true}/>
            </div>
            <div className="col-md-12 margin-bottom10">
              <label className="col-md-4 text-align-end">PERSONA:</label>
             
            </div>
            <div className="col-md-12 margin-bottom10">
              <label className="col-md-4 text-align-end">Tipo de mantenimiento:</label>
            </div>
            <div className="col-md-12 centrar">
              <input type="submit" className="btn btn-primary btnRegistrar" value="REGISTRAR"/>
            </div>
          </form>
    </section>
        </>
        );
        
}