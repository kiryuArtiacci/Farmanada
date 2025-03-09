import React from "react";
import { useEffect, useState } from "react";
import List from "../components/List/List";
import "../styles/admin.css";
import List_User from "../components/List/List_User";
import Sidebar from "../components/sidebar/Sidebar";
import SearchBarEmployeer from "../components/Search_Bar/SearchBarEmployeers";


//------------COMPONENTE PRINCIPAL EMPLEADOS------------
/** 
* .---------------------------------------------------------------------. 
* | ____ ___ __ __ ____ ___ _ _ _____ _ _ _____ _____ | 
* | / ___/ _ \| \/ | _\/_\| \ | | ____| \ | |_ _| ____|| 
* || | | | | | |\/| | |_) | | | | \| | _| | \| | | | | _| | 
* || |__| |_| | | | | __/| |_| | |\ | |___| |\ | | | | |___ | 
* | \____\___/|_|__|_|_|_ _\___/|_|_\_|_____|_|_\_| |_| |_____|| 
* || _\| _ \|_ _| \ | |/ ___|_ _| _\/\ | | | 
* || |_) | |_) || || \| | | | || |_) / _ \ | | | 
* || __/| _ < | || |\ | |___ | || __/ ___ \| |___ | 
* ||_|___|_| \_\___|_| \_|\____|___|_|_/_/ __\_\_____| ____ | 
* || ____| \/ | _\| | | ____| /\ | _ \ / _ \/ ___| | 
* || _| | |\/| | |_) | | | _| / _ \ | | | | | | \___ \ | 
* || |___| | | | __/| |___| |___ / ___ \| |_| | |_| |___) | | 
* ||_____|_| |_|_| |____|_____/_/ \_\____/ \___/|____/ | 
* '-----------------------------------------------------------------------' 
*/
const Employeers = () => {
  const [data, Setdata] = useState(null);

//****---useEffect CARGAR DATOS--****
  useEffect(() => {
    async function cargarEmpleados() {
      try {
        const response = await fetch("http://localhost:7000/empleado");
        if (!response.ok)
          throw new Error("Error en la solicitud: " + response.statusText);

        const dataRecibida = await response.json();
        console.log("Datos recibidos:", dataRecibida);

        Setdata(dataRecibida);
      } catch (error) {
        console.error("Error al cargar los Empleados:", error);
      }
    }
    cargarEmpleados();
  }, []);

  return (
    //parent
    <div className="admin-page-container">
      <Sidebar />
     
      {data && ( // RENDERIZADO DE LA DATA
        <List className="list-container">
          <h1 className="title">Employeers: </h1>
          {Array.isArray(data) &&
            data.map(
              (
                item, //Verificamos si data es un array, y si lo es, lo mapeamos.
              ) => (
                <List_User
                  key={item.id} //Agregamos una key unica, al item.
                  item_name={item.nombre} //Usamos item.nombre, ya que data es un array de objetos.
                  img_src={item.img}
                  price={item.email}
                  stock={item.telefono}
                  description={item.apellido}
                />
              ),
            )}
        </List>
      )}

      <SearchBarEmployeer />
    </div>
  );
};

export default Employeers;
