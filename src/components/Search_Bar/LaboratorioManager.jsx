import { useState, useEffect } from "react";

const LaboratorioManager = () => {
  // Estados para el manejo de laboratorios
  const [laboratorios, setLaboratorios] = useState([]);
  const [name_laboratorio, setNameLaboratorio] = useState("");
  const [tlf_laboratorio, setTlfLaboratorio] = useState("");
  const [email_laboratorio, setEmailLaboratorio] = useState("");
  const [direccion_laboratorio, setDireccionLaboratorio] = useState("");
  const [id_update_laboratorio, setIdUpdateLaboratorio] = useState("");
  const [propiedad_laboratorio, setPropiedadLaboratorio] = useState("");
  const [laboratorio_nuevo_valor, setLaboratorioNuevoValor] = useState("");
  const [id_delete_laboratorio, setIdDeleteLaboratorio] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  // Función para obtener la lista de laboratorios
  const getLaboratorios = async () => {
    try {
      const response = await fetch("http://localhost:7000/laboratorio");
      if (response.ok) {
        const data = await response.json();
        setLaboratorios(data);
        console.log("Laboratorios cargados:", data); // Opcional: para depuración
      } else {
        alert("Error al obtener laboratorios");
      }
    } catch (error) {
      console.error("Error al obtener laboratorios:", error);
    }
  };

  // Función para agregar un laboratorio
  const addLaboratorio = async () => {
    try {
      const response = await fetch("http://localhost:7000/laboratorio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name_laboratorio,
          tlf_laboratorio,
          email_laboratorio,
          direccion_laboratorio,
        }),
      });
      if (response.ok) {
        alert("Laboratorio Agregado");
        // Limpiar los campos del formulario después de agregar
        setNameLaboratorio("");
        setTlfLaboratorio("");
        setEmailLaboratorio("");
        setDireccionLaboratorio("");
        getLaboratorios(); // Recargar la lista de laboratorios
      } else {
        alert("Error al agregar laboratorio");
      }
    } catch (error) {
      console.error("Error al agregar laboratorio:", error);
    }
  };

  // Función para modificar un laboratorio
  const modificarLaboratorio = async () => {
    try {
      const response = await fetch("http://localhost:7000/laboratorio", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propiedad_laboratorio,
          laboratorio_nuevo_valor,
          id_update_laboratorio,
        }),
      });
      if (response.ok) {
        alert("Laboratorio Modificado");
        // Limpiar los campos de modificar después de modificar
        setIdUpdateLaboratorio("");
        setPropiedadLaboratorio("");
        setLaboratorioNuevoValor("");
        getLaboratorios(); // Recargar la lista de laboratorios
      } else {
        alert("Error al modificar laboratorio");
      }
    } catch (error) {
      console.error("Error al modificar laboratorio:", error);
    }
  };

  // Función para borrar un laboratorio
  const borrarLaboratorio = async () => {
    try {
      const response = await fetch("http://localhost:7000/laboratorio", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_delete_laboratorio }),
      });
      if (response.ok) {
        alert("Laboratorio Eliminado");
        // Limpiar el campo de borrar después de eliminar
        setIdDeleteLaboratorio("");
        getLaboratorios(); // Recargar la lista de laboratorios
      } else {
        alert("Error al eliminar laboratorio");
      }
    } catch (error) {
      console.error("Error al eliminar laboratorio:", error);
    }
  };

  // Cargar laboratorios al montar el componente (opcional, si quieres mostrar la lista al inicio)
  // useEffect(() => {
  //   getLaboratorios();
  // }, []);

  return (
    <div className="search-bar">
      {" "}
      {/* Apply 'search-bar' class */}
      <fieldset className="search-container">
        {" "}
        {/* Apply 'search-container' class */}
        <h1 className="title">Administrar Laboratorios</h1>{" "}
        {/* Apply 'title' class and update text */}
        <div className="mb-4">
          {" "}
          {/* Add margin bottom for spacing */}
          <h3>Agregar Laboratorio</h3>
          <input
            type="text"
            placeholder="Nombre Laboratorio"
            value={name_laboratorio}
            onChange={(e) => handleInputChange(e, setNameLaboratorio)}
            className="input-field" // Apply input field style
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={tlf_laboratorio}
            onChange={(e) => handleInputChange(e, setTlfLaboratorio)}
            className="input-field" // Apply input field style
          />
          <input
            type="email"
            placeholder="Email"
            value={email_laboratorio}
            onChange={(e) => handleInputChange(e, setEmailLaboratorio)}
            className="input-field" // Apply input field style
          />
          <input
            type="text"
            placeholder="Dirección"
            value={direccion_laboratorio}
            onChange={(e) => handleInputChange(e, setDireccionLaboratorio)}
            className="input-field" // Apply input field style
          />
          <button onClick={addLaboratorio} className="button">
            Agregar Laboratorio
          </button>{" "}
          {/* Apply button style */}
        </div>
        <div className="mb-4">
          {" "}
          {/* Add margin bottom for spacing */}
          <h3>Modificar Laboratorio</h3>
          <input
            type="text"
            placeholder="ID del laboratorio a modificar"
            value={id_update_laboratorio}
            onChange={(e) => handleInputChange(e, setIdUpdateLaboratorio)}
            className="input-field" // Apply input field style
          />
          <input
            type="text"
            placeholder="Propiedad a modificar (ej: nombre)"
            value={propiedad_laboratorio}
            onChange={(e) => handleInputChange(e, setPropiedadLaboratorio)}
            className="input-field" // Apply input field style
          />
          <input
            type="text"
            placeholder="Nuevo valor"
            value={laboratorio_nuevo_valor}
            onChange={(e) => handleInputChange(e, setLaboratorioNuevoValor)}
            className="input-field" // Apply input field style
          />
          <button onClick={modificarLaboratorio} className="button">
            Modificar Laboratorio
          </button>{" "}
          {/* Apply button style */}
        </div>
        <div className="mb-4">
          {" "}
          {/* Add margin bottom for spacing */}
          <h3>Borrar Laboratorio</h3>
          <input
            type="text"
            placeholder="ID del laboratorio a borrar"
            value={id_delete_laboratorio}
            onChange={(e) => handleInputChange(e, setIdDeleteLaboratorio)}
            className="input-field" // Apply input field style
          />
          <button onClick={borrarLaboratorio} className="button">
            Borrar Laboratorio
          </button>{" "}
          {/* Apply button style */}
        </div>
        <div>
          <h3>Listar Laboratorios (Opcional - para pruebas)</h3>
          <button onClick={getLaboratorios} className="button">
            Cargar Laboratorios
          </button>{" "}
          {/* Apply button style */}
          {laboratorios.length > 0 && (
            <ul>
              {laboratorios.map((laboratorio) => (
                <li key={laboratorio.id}>
                  {laboratorio.nombre} - ID: {laboratorio.id}
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

export default LaboratorioManager;
