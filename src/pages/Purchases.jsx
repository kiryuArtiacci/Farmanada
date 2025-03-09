import React from "react";
import { useEffect, useState } from "react";
import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";
import Search_Bar from "../components/Search_Bar/Search_Bar";
import Sidebar from "../components/sidebar/Sidebar";

//------------COMPONENTE PRINCIPAL PEDIDOS------------
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
* ||_|__ |_|_\_\___|_|_\_|\____|___|_|_/_/ \_\_____| | 
* || _\| ____| _ \_ _| _ \ / _ \/ ___| | 
* || |_) | _| | | | | || | | | | | \___ \ | 
* || __/| |___| |_| | || |_| | |_| |___) | | 
* ||_| |____|____/___|____/ \___/|____/ | 
* '-----------------------------------------------------------------------' 
*/

const Purchases = () => {
const [data, Setdata] = useState(null);

const [deployMod, setDeployMod] = useState(false);

//****---useEffect CARGAR DATOS--****
  useEffect(() => {
    async function cargarMonodrogas() {
      try {
        const response = await fetch("http://localhost:7000/pedido");
        if (!response.ok)
          throw new Error("Error en la solicitud: " + response.statusText);

        const dataRecibida = await response.json();
        console.log("Datos recibidos:", dataRecibida);
        Setdata(dataRecibida);
      } catch (error) {
        console.error("Error al cargar los Empleados:", error);
      }
    }
    cargarMonodrogas();
  }, []);

  const toggleDeployMod = () => {
    // Esta funcion es la que hace el menu desplegable Modificar
    setDeployMod(!deployMod);
  };

  return (
    //parent
    <div className="admin-page-container">
      <Sidebar />
      {data && ( // RENDERIZADO DE LA DATA
        <List className="list-container">
          <h1 className="title">PEDIDOS: </h1>
            {Array.isArray(data) &&
              data.map(
                  (
                  item, //Verificamos si data es un array, y si lo es, lo mapeamos.
                              ) => (
                   <div>
                
                    <List_item
                        key={item.id}
                        item_id={item.id} //Agregamos una key unica, al item. y la mostramos
                        item_name='{item.forma_pago} '//Usamos item.nombre, ya que data es un array de objetos.
                        img_src="/public/pill-icon.svg"
                        price="200$"
                        stock="100U"
                        description="Lorem ipsum"
                        DeleteOnClick={toggleDeployMod}
                        ChangeOnClick={toggleDeployMod}
                    />
                                  
                    </div>
                                
                              ),
                            )}
                        </List>
                      )}

      <Search_Bar className="search-bar" />
    </div>
  );
};

export default Purchases;
