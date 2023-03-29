import "../../assets/styles/styles.css";
import { NavSupp } from "../../components/NavSupp";
import loading from "../../assets/images/Loading.gif";
import React, { useState, useEffect } from "react";
import areaService from "../../services/areaService";
import maintServices from "../../services/maintServices";

import MUIDataTable from "mui-datatables";

export const PendeView = () => {
  const columns = ["Area", "Computer", "Date" , "Type", "User"];
  const id_support = localStorage.getItem("support");
  /* const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];*/

  const [list, setList] = useState(null);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const response = await maintServices.getMaintBySupport(id_support);
    console.log(response)
    let options = []
     response.map((item) => {
      if(!item.is_completed){
        options.push ({ id_area: item.id_area, id_computer: item.id_computer, date: item.date, type: item.type, user: item.user})
      }
    });
    setList(options)
    
  };

  return (
    <>
      <NavSupp />
      <section className="dash-board-section container_center">
        <div className="container_center_colum">
          {list == null ? (
            <img
            src={loading}
            className="login-logo-itc mb-1"
            alt="logo itc"
          />
          ) : (
            <MUIDataTable
              columns={columns}
              data={list.map((item) => {
                return [item.id_area, item.id_computer, item.date, item.type, item.user];
              })}
              options={{
                rowsPerPage: 6,
                rowsPerPageOptions: [10, 15, 20, 25, 30, 35]
              }}
            />
          )}
        </div>
      </section>
    </>
  );
};
