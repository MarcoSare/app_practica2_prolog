import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../assets/styles/styles.css";
import areaService from '../services/areaService'



export const SelectArea = ({area, setArea}) => {
  const [listAreas, setListAreas] = useState(null);
  useEffect(() => {
    getAllProducts()
  }, []);

  const getAllProducts = async ()=>{
    const response = await areaService.getAllAreas();
    let options = response.map( item => { 
      return { value: item._id , label : item.name }; 
    });
    setListAreas(options)
    
    
  }

  if(listAreas!=null)
  return (
    <Select options={listAreas} className="col-md-8 widthFormulario select" onChange={(choice) => setArea(choice.value)} />
  );
  else return (
    <Select  className="col-md-8 widthFormulario select" />
  );
  
};
