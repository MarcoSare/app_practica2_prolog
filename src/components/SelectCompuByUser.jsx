import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../assets/styles/styles.css";

export const SelectCompuByUser = ({ listCompu ,compu, setCompu }) => {
  let isEmpty = true;
  if (compu.length > 0) {
    isEmpty = false;
    console.log(compu);
  }

  return (
    <Select
      options={listCompu}
      value={
        isEmpty
          ? { label: "Select", value: "Select" }
          : { label: compu[0].label, value: compu[0].value }
      }
      className="col-md-8 widthFormulario select"
      onChange={(e) => {
        setCompu([
          {
            label: e.label,
            value: e.value,
            
          },
        ]);

      }}
      required
    />
  );
};
