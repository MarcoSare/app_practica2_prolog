import "../../assets/styles/styles.css";
import { NavBar } from "../../components/NavBar";
import React, { useState, useEffect } from "react";
import loading from "../../assets/images/Loading.gif";
import userServices from "../../services/userServices";

import MUIDataTable from "mui-datatables";

export const UsersView = () => {
  const columns = ["First Name", "Last Name", "Gender", "Telephone", "Email"];

  /* const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];*/

  const [listUsers, setListUsers] = useState(null);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const data = await userServices.getAllUsers();
    console.log(data);
    setListUsers(data);
  };

  return (
    <>
      <NavBar />
      <section className="dash-board-section container_center">
        <div className="container_center_colum">
          {listUsers == null ? (
             <img
             src={loading}
             className="login-logo-itc mb-1"
             alt="logo itc"
           />
          ) : (
            <MUIDataTable
              columns={columns}
              data={listUsers.map((item) => {
                return [item.first_name, item.last_name, item.gender, item.telephone, item.email];
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
