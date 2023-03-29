import "../../assets/styles/styles.css";
import { NavBar } from "../../components/NavBar";
import loading from "../../assets/images/Loading.gif";
import React, { useState, useEffect } from "react";
import areaService from "../../services/areaService";

import MUIDataTable from "mui-datatables";

export const DepasView = () => {
  const columns = ["Name"];

  /* const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];*/

  const [listAreas, setListAreas] = useState(null);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const data = await areaService.getAllAreas();
    console.log(data);
    setListAreas(data);
  };

  return (
    <>
      <NavBar />
      <section className="dash-board-section container_center">
        <div className="container_center_colum">
          {listAreas == null ? (
            <img
            src={loading}
            className="login-logo-itc mb-1"
            alt="logo itc"
          />
          ) : (
            <MUIDataTable
              columns={columns}
              data={listAreas.map((item) => {
                return [item.name];
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
