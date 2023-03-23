import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../assets/styles/styles.css";
import userServices from '../services/userServices'



export const SelectUserByArea = ({idArea, users, setUsers}) => {
  const [listUsers, setListUsers] = useState(null);
  useEffect(() => {
    console.log(idArea)
    if(idArea=!undefined)
    getUserByArea()
  }, []);

  const getUserByArea = async ()=>{
    const response = await userServices.getUserByArea(idArea);
    let options = response.map( item => { 
      return { value: item._id , label : (item.first_name + " " + item.last_name)}; 
    });
    setListUsers(options)
    
    
  }

  if(idArea!=null)
  return (
    <Select options={listUsers} className="col-md-8 widthFormulario select" />
  );
  else
  return (
    <Select className="col-md-8 widthFormulario select" onChange={(choice) => setUsers(choice.value)} />
  );
};
