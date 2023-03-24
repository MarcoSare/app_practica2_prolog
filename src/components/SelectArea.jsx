import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../assets/styles/styles.css";
import areaService from '../services/areaService'
import userServices from '../services/userServices'



export const SelectArea = ({setArea, setListUsers, setUser, setCompu}) => {
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

  const changeChoice = async (idArea)=> {
    setArea(idArea);
    await getUSers(idArea);
  }
  
  const getUSers = async (idArea)=>{
    const response = await userServices.getUserByArea(idArea);
    let options = response.map( item => { 
      return { value: item._id , label : (item.first_name + " " + item.last_name), email:item.email}; 
    });
    setListUsers(options)
    setUser([])
    setCompu([])
  }

  if(listAreas!=null)
  return (
    <Select options={listAreas} className="col-md-8 widthFormulario select" onChange={async (choice) => await  changeChoice(choice.value) } required/>
  );
  else return (
    <Select  className="col-md-8 widthFormulario select" required />
  );
  
};
