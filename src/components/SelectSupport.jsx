import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../assets/styles/styles.css";
import areaService from '../services/areaService'
import userServices from '../services/userServices'



export const SelectSupport = ({setSupport}) => {
  const [listSupport, setListSupport] = useState(null);
  useEffect(() => {
    getUserByType()
  }, []);

  const getUserByType = async ()=>{
    const response = await userServices.getUserByType('support');
    let options = response.map( item => { 
      return { value: item._id , label :(item.first_name + " " + item.last_name) }; 
    });
    setListSupport(options)
  }

  

  if(listSupport!=null)
  return (
    <Select options={listSupport} className="col-md-8 widthFormulario select" onChange={(choice) => setSupport(choice.value)} required/>
  );
  else return (
    <Select  className="col-md-8 widthFormulario select" required/>
  );
  
};
