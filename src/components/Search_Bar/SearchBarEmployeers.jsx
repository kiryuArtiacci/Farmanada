import { useState, useEffect } from "react";
import { Search } from "lucide-react"; // Import Search icon if you want to add a search bar within EmpleadoManager later

const EmpleadoManager = () => {
  // Estados para el manejo de empleados
  const [empleados, setEmpleados] = useState([]);
  const [cedula_empleado, setCedulaEmpleado] = useState("");
  const [name_empleado, setNameEmpleado] = useState("");
  const [apellido_empleado, setApellidoEmpleado] = useState("");
  const [tlf_empleado, setTlfEmpleado] = useState("");
  const [email_empleado, setEmailEmpleado] = useState("");
  const [direccion_empleado, setDireccionEmpleado] = useState("");
  const [fecha_ingreso_empleado, setFechaIngresoEmpleado] = useState("");
  const [img_empleado, setImgEmpleado] = useState("");
  const [cedula_empleado_modificar, setCedulaEmpleadoModificar] = useState("");
  const [propiedad_empleado, setPropiedadEmpleado] = useState("");
  const [empleado_nuevo_valor, setEmpleadoNuevoValor] = useState("");
  const [delete_cedula_empleado, setDeleteCedulaEmpleado] = useState("");

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  // Función para obtener la lista de empleados
  const getEmpleados = async () => {
    try {
      const response = await fetch("http://localhost:7000/empleado");
      if (response.ok) {
        const data = await response.json();
        setEmpleados(data);
        console.log("Empleados cargados:", data); // Opcional: para depuración
      } else {
        alert("Error al obtener empleados");
      }
    } catch (error) {
      console.error("Error al obtener empleados:", error);
    }
  };

  // Función para agregar un empleado
  const addEmpleado = async () => {
    try {
      const response = await fetch("http://localhost:7000/empleado", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cedula_empleado,
          name_empleado,
          apellido_empleado,
          tlf_empleado,
          email_empleado,
          direccion_empleado,
          fecha_ingreso_empleado,
          img_empleado,
        }),
      });
      if (response.ok) {
        alert("Empleado Agregado");
        // Limpiar los campos del formulario después de agregar
        setCedulaEmpleado("");
        setNameEmpleado("");
        setApellidoEmpleado("");
        setTlfEmpleado("");
        setEmailEmpleado("");
        setDireccionEmpleado("");
        setFechaIngresoEmpleado("");
        setImgEmpleado("");
        getEmpleados(); // Recargar la lista de empleados
      } else {
        alert("Error al agregar empleado");
      }
    } catch (error) {
      console.error("Error al agregar empleado:", error);
    }
  };

  // Función para modificar un empleado
  const modificarEmpleado = async () => {
    try {
      const response = await fetch("http://localhost:7000/empleado", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cedula_empleado_modificar,
          propiedad_empleado,
          empleado_nuevo_valor,
        }),
      });
      if (response.ok) {
        alert("Empleado Modificado");
        // Limpiar los campos de modificar después de modificar
        setCedulaEmpleadoModificar("");
        setPropiedadEmpleado("");
        setEmpleadoNuevoValor("");
        getEmpleados(); // Recargar la lista de empleados
      } else {
        alert("Error al modificar empleado");
      }
    } catch (error) {
      console.error("Error al modificar empleado:", error);
    }
  };

  // Función para borrar un empleado
  const borrarEmpleado = async () => {
    try {
      const response = await fetch("http://localhost:7000/empleado", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ delete_cedula_empleado }),
      });
      if (response.ok) {
        alert("Empleado Eliminado");
        // Limpiar el campo de borrar después de eliminar
        setDeleteCedulaEmpleado("");
        getEmpleados(); // Recargar la lista de empleados
      } else {
        alert("Error al eliminar empleado");
      }
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    }
  };

  // Cargar empleados al montar el componente (opcional, si quieres mostrar la lista al inicio)
  // useEffect(() => {
  //   getEmpleados();
  // }, []);

  return (
    <div className="search-bar">
      {" "}
      {/* Apply 'search-bar' class */}
      <fieldset className="search-container">
        {" "}
        {/* Apply 'search-container' class */}
        <h1 className="title">Administrar Empleados</h1>{" "}
        {/* Apply 'title' class and update text */}
        <div className="mb-4">
          {" "}
          {/* Add margin bottom for spacing */}
          <h3 className="sub-title">Agregar Empleado</h3>
          <input
            type="text"
            placeholder="Cédula"
            value={cedula_empleado}
            onChange={(e) => handleInputChange(e, setCedulaEmpleado)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="Nombre"
            value={name_empleado}
            onChange={(e) => handleInputChange(e, setNameEmpleado)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="Apellido"
            value={apellido_empleado}
            onChange={(e) => handleInputChange(e, setApellidoEmpleado)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="Teléfono"
            value={tlf_empleado}
            onChange={(e) => handleInputChange(e, setTlfEmpleado)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email_empleado}
            onChange={(e) => handleInputChange(e, setEmailEmpleado)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="Dirección"
            value={direccion_empleado}
            onChange={(e) => handleInputChange(e, setDireccionEmpleado)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="date"
            placeholder="Fecha de Ingreso"
            value={fecha_ingreso_empleado}
            onChange={(e) => handleInputChange(e, setFechaIngresoEmpleado)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="URL de Imagen"
            value={img_empleado}
            onChange={(e) => handleInputChange(e, setImgEmpleado)}
            className="input-field" // Apply input field style
            required
          />
          <button onClick={addEmpleado} className="button button ml-16">
            Agregar Empleado
          </button>{" "}
          {/* Apply button style */}
        </div>
        <div className="mb-4">
          {" "}
          {/* Add margin bottom for spacing */}
          <h3>Modificar Empleado</h3>
          <input
            type="text"
            placeholder="Cédula del empleado a modificar"
            value={cedula_empleado_modificar}
            onChange={(e) => handleInputChange(e, setCedulaEmpleadoModificar)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="Propiedad a modificar (ej: nombre)"
            value={propiedad_empleado}
            onChange={(e) => handleInputChange(e, setPropiedadEmpleado)}
            className="input-field" // Apply input field style
            required
          />
          <input
            type="text"
            placeholder="Nuevo valor"
            value={empleado_nuevo_valor}
            onChange={(e) => handleInputChange(e, setEmpleadoNuevoValor)}
            className="input-field" // Apply input field style
            required
          />
          <button onClick={modificarEmpleado} className="button button ml-16">
            Modificar Empleado
          </button>{" "}
          {/* Apply button style */}
        </div>
        <div className="mb-4">
          {" "}
          {/* Add margin bottom for spacing */}
          <h3 className="sub-title">Borrar Empleado</h3>
          <input
            type="text"
            placeholder="Cédula del empleado a borrar"
            value={delete_cedula_empleado}
            onChange={(e) => handleInputChange(e, setDeleteCedulaEmpleado)}
            className="input-field" // Apply input field style
            required
          />
          <button onClick={borrarEmpleado} className="button ml-16">
            Borrar Empleado
          </button>{" "}
          {/* Apply button style */}
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

export default EmpleadoManager;
