import "../../assets/styles/styles.css";
import { NavSupp } from "../../components/NavSupp";
import loading from "../../assets/images/Loading.gif";
import React, { useState, useEffect } from "react";
import maintServices from "../../services/maintServices";
import Select from "react-select";

export const DashBoardSupport = () => {
  const id_support = localStorage.getItem("support");
  const [maint, setListMaints] = useState(null);
  const [user, setUser] = useState(null);
  const [type, setType] = useState(null);
  const [options, setOptions] = useState(null);
  const [date, setDate] = useState(null);
  const [compu, setCompu] = useState(null);
  const [desc, setDesc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    const response = await maintServices.getMaintBySupport(id_support);
  
    let options = []
     response.map((item) => {
      if(!item.is_completed)
       options.push ({ value: item.id_computer, label: item.id_computer})
    });
    if(options!= 'undefined')
    setOptions(options)
    setListMaints(response);
  };

  const getDate = (id_computer) => {
    const data = maint.find((item) => item.id_computer == id_computer);
    //console.log(data)
    setDate(data.date);
    setUser(data.user);
    setType(data.type);
  };

  const handle = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      //console.log('Email: ' + email);
      //console.log('Password: ' + password);
      const res = await maintServices.completedMaint(compu, desc);
      //console.log('RES: ' + res);
      if (res.status === 200) {
        window.location.reload();
        setIsLoading(false);
      } else {
      }
    } catch (error) {
      alert("Login fallido intente otra vez");
      setIsLoading(false);
    }
  };

  if (maint != null)
    return (
      <>
        <NavSupp />
        <section className="dash-board-section container_center">
          <form className="dash-board-form" onSubmit={handle}>
            <div className="col-md-12 centrar">
              <label className="titulo">ADMINISTRADOR</label>
            </div>
            <div className="div_selects">
              <label className="col-md-4 text-align-end">DEPARTAMENTO:</label>
              {options.length==0?
                 <label className="col-md-4 text-align-end">No hay mantenimientos pendientes</label>:
<Select
                options={options}
                className="col-md-8 widthFormulario select"
                onChange={(e) => {
                  console.log(e.value);
                  setCompu(e.value);
                  getDate(e.value);
                }}
              />
            }
              
            </div>
            <div className="col-md-12 margin-bottom10">
              <label className="col-md-4 text-align-end">FECHA:</label>
              <input
                className="col-md-8 widthFormulario"
                type="date"
                value={date != null ? date : ""}
                name="txtFecha"
                readOnly={true}
              />
            </div>
            <div className="col-md-12 margin-bottom10 lbl">
              <label className="col-md-4 text-align-end">PERSONA: </label>
              <label className="col-md-4 text-align-end">
                {user != null ? user : ""}
              </label>
            </div>
            <div className="col-md-12 margin-bottom10 lbl">
              <label className="col-md-4 text-align-end">
                Tipo de mantenimiento:{" "}
              </label>
              <label className="col-md-4 text-align-end">
                {type != null ? type : ""}
              </label>
            </div>
            <div className="col-md-12 margin-bottom10 lbl">
              <label className="col-md-4 text-align-end">Description: </label>
              <textarea
                id="story"
                name="story"
                rows="5"
                cols="33"
                required
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="col-md-12 centrar">
              {isLoading ? (
                <img
                  src={loading}
                  className="login-logo-itc mb-1"
                  alt="logo itc"
                />
              ) : (
                <input
                  type="submit"
                  className="btn btn-primary btnRegistrar"
                  value="ENVIAR"
                />
              )}
            </div>
          </form>
        </section>
      </>
    );
};
