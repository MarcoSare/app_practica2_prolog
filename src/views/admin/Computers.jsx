import "../../assets/styles/styles.css";
import { NavBar } from "../../components/NavBar";
import React, { useState, useEffect } from "react";
import loading from "../../assets/images/Loading.gif";
import computerService from "../../services/computerService";

import MUIDataTable from "mui-datatables";

export const CompusView = () => {
  const columns = ["Serial number", "Brand", "Model", "Procesador", "Ram" , "Storage"];

  /* const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];*/

  const [listCompu, setListCompu] = useState(null);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const data = await computerService.getAllComputer();
    console.log(data);
    setListCompu(data);
  };

  return (
    <>
      <NavBar />
      <section className="dash-board-section container_center">
        <div className="container_center_colum">
          {listCompu == null ? (
             <img
             src={loading}
             className="login-logo-itc mb-1"
             alt="logo itc"
           />
          ) : (
            <MUIDataTable
              columns={columns}
              data={listCompu.map((item) => {
                return [item.serail_number, item.brand, item.model, item.processor, item.ram, item.storage];
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
