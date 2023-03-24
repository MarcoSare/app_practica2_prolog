import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../assets/styles/styles.css";
import computerServices from "../services/computerService";

export const SelectUserByArea = ({ listUsers, setListCompus,user, setUser, setCompu }) => {
  let isEmpty = true;
  console.log(user.length);
  if (user.length > 0) {
    isEmpty = false;
    console.log(user);
  }

  const getCompuByUser = async (idUser)=>{
    const response = await computerServices.getCompByUser(idUser);
    let options = response.map( item => { 
      return { value: item._id , label : item.serail_number }; 
    });
    setListCompus(options)
    setCompu([])
  }

  return (
    <Select
      options={listUsers}
      value={
        isEmpty
          ? { label: "Select", value: "Select" }
          : { label: user[0].label, value: user[0].value }
      }
      className="col-md-8 widthFormulario select"
      onChange={async (e) => {
        setUser([
          {
            label: e.label,
            value: e.value,
            email: e.email
          },
        ]);
        await getCompuByUser(e.value);
      }}
      required
    />
  );
};
