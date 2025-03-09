import React from "react";
import { useEffect, useState } from "react";
import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";
import Search_Bar from "../components/Search_Bar/Search_Bar";
import Sidebar from "../components/sidebar/Sidebar";
import "../components/CRUDS/Leer.jsx";



//---COMPONENTE SECUNDARIO AGREGAR_SUCURSALES---
const New_sucursal = ({ onSubmit }) => {
  // Renamed component
  const [name, setName] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tlf, setTlf] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, direccion, tlf, email); // Updated onSubmit call with sucursal fields
    setName("");
    setDireccion("");
    setTlf("");
    setEmail("");
  };
  //lo que sale si aprietas Agregar
  return (
    <div>
      <form onSubmit={handleSubmit} className="add-item-container">
        <div className="add-title-container">
          <h2 className="add-title">New Sucursal</h2> {/* Updated title */}
        </div>
        <input
          type="text"
          placeholder="Nombre Sucursal" // Updated placeholder
          className="form-item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Dirección" // Updated placeholder
          className="form-item"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Teléfono" // Updated placeholder
          className="form-item"
          value={tlf}
          onChange={(e) => setTlf(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email" // Updated placeholder
          className="form-item"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input type="submit" value="Aceptar" className="submit-button" />
      </form>
    </div>
  );
};
//---COMPONENTE SECUNDARIO DELETE_SUCURSALES---
const Delete_sucursal = ({ onSubmit }) => {
  // Renamed component
  const [id_delete, setIdDelete] = useState("");

  const handleSubmitDel = (elem) => {
    elem.preventDefault();
    onSubmit(id_delete);
    setIdDelete("");
  };
  //lo que sale si aprietas Eliminar
  return (
    <div>
      <form onSubmit={handleSubmitDel} className="add-item-container">
        <div className="add-title-container">
          <h2 className="add-title">Remove Sucursal</h2> {/* Updated title */}
        </div>
        <input
          type="text"
          placeholder="Sucursal ID" // Updated placeholder
          className="form-item"
          required
          value={id_delete}
          onChange={(elem) => setIdDelete(elem.target.value)}
        />
        <input type="submit" value="Aceptar" className="submit-button" />
      </form>
    </div>
  );
};

//---COMPONENTE SECUNDARIO MODIFICAR_SUCURSALES---
const Modify_sucursal = ({ onSubmit }) => {
  // Renamed component
  const [nuevo_valor, setNuevoValor] = useState("");
  const [id, setId] = useState("");
  const [propiedad, setPropiedad] = useState(""); // Added state for propiedad

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nuevo_valor, id, propiedad); // Updated onSubmit call to include propiedad
    setNuevoValor("");
    setId("");
    setPropiedad(""); // Clear propiedad state
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="add-item-container">
        <div className="add-title-container">
          <h2 className="add-title">Modify Sucursal</h2> {/* Updated title */}
        </div>
        <input
          type="text"
          className="form-item mb-2 text-black" // Added form-item class for styling
          value={id}
          placeholder="Ingrese el id de sucursal" // Updated placeholder
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-item mb-2 text-black" // Added form-item class for styling
          value={propiedad}
          placeholder="Propiedad a modificar (nombre, direccion...)" // Updated placeholder
          onChange={(e) => setPropiedad(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-item text-black" // Added form-item class for styling
          value={nuevo_valor}
          placeholder="Ingrese el nuevo valor" // Updated placeholder
          onChange={(e) => setNuevoValor(e.target.value)}
          required
        />
        <input type="submit" value="Aceptar" className="submit-button" />
      </form>
    </div>
  );
};

//------------COMPONENTE PRINCIPAL SUCURSALES------------
/** 
* .--------------------------------------------------------------. 
* | ____ ___ __ __ ____ ___ _ _ _____ _ _ _____ _____ | 
* | / ___/ _ \| \/ | _\/_\| \ | | ____| \ | |_ _| ____| | 
* || | | | | | |\/| | |_) | | | | \| | _| | \| | | | | _| | 
* || |__| |_| | | | | __/| |_| | |\ | |___| |\ | | | | |___ | 
* | \____\___/|_|__|_|_|_ _\___/|_|_\_|_____|_|_\_| |_| |_____| | 
* || _\| _ \|_ _| \ | |/ ___|_ _| _\/\ | | | 
* || |_) | |_) || || \| | | | || |_) / _ \ | | | 
* || __/| _ < | || |\ | |___ | || __/ ___ \| |___ | 
* ||_|__ |_| \_\___|_|_\_|\____|___|_| /_/_ \_\_____|____ ____ | 
* |/ ___|| | | |/ ___| | | | _\/ ___| /\ | | | ____/ ___| | 
* |\___ \| | | | | | | | | |_) \___ \ / _ \ | | | _| \___ \ | 
* | ___) | |_| | |___| |_| | _ < ___) / ___ \| |___| |___ ___) || 
* ||____/ \___/ \____|\___/|_| \_\____/_/ \_\_____|_____|____/ | 
* '--------------------------------------------------------------' 
*/

const Sucursales = () => {
  const [data, Setdata] = useState(null);
  const SucursalesData = [data]; // Renamed variable for clarity
  const [deployAdd, setDeployAdd] = useState(false);
  const [deployDel, setDeployDel] = useState(false);
  const [deployMod, setDeployMod] = useState(false);

  const toggleDeployAdd = () => {
    setDeployAdd(!deployAdd);
  };
  const toggleDeployDel = () => {
    setDeployDel(!deployDel);
  };
  const toggleDeployMod = () => {
    setDeployMod(!deployMod);
  };

  const add_sucursal = async (name, direccion, tlf, email) => {
    // Updated function to match sucursal fields
    try {
      const response = await fetch("http://localhost:7000/sucursal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, direccion, tlf, email }), // Updated body
      });
      if (response.ok) {
        alert("Sucursal Agregada");
        cargarSucursales(); // Reload data after adding
      } else {
        alert("Error al agregar sucursal");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const borrar_sucursal = async (id_delete) => {
    // Updated function name
    try {
      const response = await fetch("http://localhost:7000/sucursal", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id_delete }), // Updated body to match backend expectation of 'id'
      });
      if (response.ok) {
        alert(`Sucursal Eliminada ${id_delete}`);
        cargarSucursales(); // Reload data after deleting
      } else {
        alert("Error al eliminar sucursal");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const modificar_sucursal = async (nuevo_valor, id, propiedad) => {
    // Updated function name and parameters
    try {
      const response = await fetch("http://localhost:7000/sucursal", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nuevo_valor, id, propiedad }), // Updated body and included 'propiedad'
      });
      if (response.ok) {
        alert("Sucursal Modificada");
        cargarSucursales(); // Reload data after modifying
      } else {
        alert("Error al modificar sucursal");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

//****---useEffect CARGAR DATOS--****
  useEffect(() => {
    async function cargarSucursales() {
      // Updated function name to fetch sucursales
      try {
        const response = await fetch("http://localhost:7000/sucursal"); // Updated endpoint to /sucursal
        if (!response.ok)
          throw new Error("Error en la solicitud: " + response.statusText);

        const dataRecibida = await response.json();
        console.log("Datos de sucursales recibidos:", dataRecibida); // Updated console log
        Setdata(dataRecibida);
      } catch (error) {
        console.error("Error al cargar las Sucursales:", error); // Updated error message
      }
    }
    cargarSucursales(); // Call the function to load sucursales
  }, []);

  return (
    //parent
    <div className="admin-page-container">
      <Sidebar />
      {data && ( // Verificamos si data tiene un valor
        <List className="list-container">
          <h1 className="title">Sucursales: </h1> {/* Updated title */}
          <div className="descriptions">
            <h2 className="description-item">ID</h2>
            <h2 className="description-item">Nombre</h2>{" "}
            {/* Updated description labels */}
            <h2 className="description-item">Email</h2>
            <h2 className="description-item">Dirección</h2>
            <h2 className="description-item">Telefono</h2>
          </div>
          {Array.isArray(data) &&
            data.map(
              (
                item, //Verificamos si data es un array, y si lo es, lo mapeamos.
              ) => (
                <List_item
                  key={item.id}
                  item_id={item.id} //Agregamos una key unica, al item. y la mostramos
                  item_name={item.nombre} //Usamos item.nombre, ya que data es un array de objetos.
                  img_src="/public/warehouse-icon.svg" // Updated icon or you can remove img if not needed
                  price={item.telefono} // Display telefono as price for example, adjust as needed
                  stock={item.direccion} // Display direccion as stock, adjust as needed
                  description={item.email} // Display email as description, adjust as needed
                />
              ),
            )}
        </List>
      )}

      <Search_Bar>
        <div className="button">
          <button className="button new-item-button" onClick={toggleDeployAdd}>
            Agregar
          </button>
          {deployAdd && <New_sucursal onSubmit={add_sucursal} />}{" "}
          {/* Updated to New_sucursal and add_sucursal */}
          <button
            className="button delete-item-button"
            onClick={toggleDeployDel}
          >
            Eliminar
          </button>
          {deployDel && <Delete_sucursal onSubmit={borrar_sucursal} />}{" "}
          {/* Updated to Delete_sucursal and borrar_sucursal */}
          <button
            className="button modify-item-button"
            onClick={toggleDeployMod}
          >
            Modify
          </button>
          {deployMod && <Modify_sucursal onSubmit={modificar_sucursal} />}{" "}
          {/* Updated to Modify_sucursal and modificar_sucursal */}
        </div>
      </Search_Bar>
    </div>
  );
};

export default Sucursales; 
