import { useState, useEffect } from "react";

const SucursalManager = () => {
  // Estados para el manejo de sucursales
  const [sucursales, setSucursales] = useState([]);
  const [name, setName] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tlf, setTlf] = useState("");
  const [email, setEmail] = useState("");
  const [id_modificar, setIdModificar] = useState("");
  const [propiedad, setPropiedad] = useState("");
  const [nuevo_valor, setNuevoValor] = useState("");
  const [id_delete, setIdDelete] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  // Función para obtener la lista de sucursales
  const getSucursales = async () => {
    try {
      const response = await fetch("http://localhost:7000/sucursal");
      if (response.ok) {
        const data = await response.json();
        setSucursales(data);
        console.log("Sucursales cargadas:", data); // Opcional: para depuración
      } else {
        alert("Error al obtener sucursales");
      }
    } catch (error) {
      console.error("Error al obtener sucursales:", error);
    }
  };

  // Función para agregar una sucursal
  const addSucursal = async () => {
    try {
      const response = await fetch("http://localhost:7000/sucursal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, direccion, tlf, email }),
      });
      if (response.ok) {
        alert("Sucursal Agregada");
        // Limpiar los campos del formulario después de agregar
        setName("");
        setDireccion("");
        setTlf("");
        setEmail("");
        getSucursales(); // Recargar la lista de sucursales
      } else {
        alert("Error al agregar sucursal");
      }
    } catch (error) {
      console.error("Error al agregar sucursal:", error);
    }
  };

  // Función para modificar una sucursal
  const modificarSucursal = async () => {
    try {
      const response = await fetch("http://localhost:7000/sucursal", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id_modificar, propiedad, nuevo_valor }),
      });
      if (response.ok) {
        alert("Sucursal Modificada");
        // Limpiar los campos de modificar después de modificar
        setIdModificar("");
        setPropiedad("");
        setNuevoValor("");
        getSucursales(); // Recargar la lista de sucursales
      } else {
        alert("Error al modificar sucursal");
      }
    } catch (error) {
      console.error("Error al modificar sucursal:", error);
    }
  };

  // Función para borrar una sucursal
  const borrarSucursal = async () => {
    try {
      const response = await fetch("http://localhost:7000/sucursal", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id_delete }),
      });
      if (response.ok) {
        alert("Sucursal Eliminada");
        // Limpiar el campo de borrar después de eliminar
        setIdDelete("");
        getSucursales(); // Recargar la lista de sucursales
      } else {
        alert("Error al eliminar sucursal");
      }
    } catch (error) {
      console.error("Error al eliminar sucursal:", error);
    }
  };

  // Cargar sucursales al montar el componente (opcional)
  // useEffect(() => {
  //   getSucursales();
  // }, []);

  return (
    <div className="search-bar">
      {" "}
      {/* Apply 'search-bar' class */}
      <fieldset className="search-container">
        {" "}
        {/* Apply 'search-container' class */}
        <h1 className="title">Administrar Sucursales</h1>{" "}
        {/* Apply 'title' class and update text */}
        <div className="mb-4">
          {" "}
          {/* Add margin bottom for spacing */}
          <h3 className="title">Agregar Sucursal</h3>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => handleInputChange(e, setName)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="Dirección"
            value={direccion}
            onChange={(e) => handleInputChange(e, setDireccion)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={tlf}
            onChange={(e) => handleInputChange(e, setTlf)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
            className="input-field" // Apply input field style
            required
          />
          <button onClick={addSucursal} className="button ml-12 bg-black p-4">
            Agregar Sucursal
          </button>{" "}
          {/* Apply button style */}
        </div>
        <div className="mb-4">
          {" "}
          {/* Add margin bottom for spacing */}
          <h3 className="title">Modificar Sucursal</h3>
          <input
            type="text"
            placeholder="ID de Sucursal a modificar"
            value={id_modificar}
            onChange={(e) => handleInputChange(e, setIdModificar)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="Propiedad a modificar (ej: nombre)"
            value={propiedad}
            onChange={(e) => handleInputChange(e, setPropiedad)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="Nuevo valor"
            value={nuevo_valor}
            onChange={(e) => handleInputChange(e, setNuevoValor)}
            className="input-field" // Apply input field style
            required
          />
          <button onClick={modificarSucursal} className="button ml-12">
            Modificar Sucursal
          </button>{" "}
          {/* Apply button style */}
        </div>
        <div className="mb-4">
          {" "}
          {/* Add margin bottom for spacing */}
          <h3 className="title">Borrar Sucursal</h3>
          <input
            type="text"
            placeholder="ID de Sucursal a borrar"
            value={id_delete}
            onChange={(e) => handleInputChange(e, setIdDelete)}
            className="input-field" // Apply input field style
            required
          />
          <button onClick={borrarSucursal} className="button ml-12">
            Borrar Sucursal
          </button>{" "}
          {/* Apply button style */}
        </div>
        <div>
          <h3 className="title">Listar Sucursales</h3>
          <button onClick={getSucursales} className="button ml-12">
            Cargar Sucursales
          </button>{" "}
          {/* Apply button style */}
          {sucursales.length > 0 && (
            <ul>
              {sucursales.map((sucursal) => (
                <li key={sucursal.id}>
                  {sucursal.nombre} - ID: {sucursal.id}
                </li>
              ))}
            </ul>
          )}
        </div>
      </fieldset>
      <style jsx>{`
        .search-bar {
          display: flex;
          justify-content: center;
          padding: 20px;
        }

        .search-container {
          padding: 20px;
          border: 1px solid #ccc; /* Example border style */
          border-radius: 8px;
          width: 80%; /* Adjust width as needed */
          max-width: 900px;
        }

        .title {
          font-size: 1.5rem;
          margin-bottom: 20px;
          text-align: center;
        }

        .input-field {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box; /* to include padding and border in element's total width and height */
        }

        .button {
          padding: 10px 15px;
          background-color: #007bff; /* Example button color */
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #0056b3;
        }

        /* You can add more styles as needed, for example for labels, etc. */
      `}</style>
    </div>
  );
};

export default SucursalManager;
