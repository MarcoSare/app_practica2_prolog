import "../../assets/styles/styles.css";
import { NavBar } from "../../components/NavBar";
import qr from "../../assets/images/qr.png";
import React, { useState, useEffect } from "react";


export const QrView = () => {

  return (
    <>
      <NavBar />
      <section className="dash-board-section container_center">
        <div className="container_center_colum">
         
            <img
            src={qr}
            className="qr-img mb-1"
            alt="logo itc"
          />
        </div>
      </section>
    </>
  );
};
