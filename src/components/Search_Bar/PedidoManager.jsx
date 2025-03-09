import { useState, useEffect } from "react";

const PedidoManager = () => {
  // Estados para el manejo de pedidos
  const [pedidos, setPedidos] = useState([]);
  const [empleado_pedido, setEmpleadoPedido] = useState("");
  const [sucursal_pedido, setSucursalPedido] = useState("");
  const [fecha_pedido, setFechaPedido] = useState("");
  const [forma_pago_pedido, setFormaPagoPedido] = useState("");
  const [id_update_pedido, setIdUpdatePedido] = useState("");
  const [propiedad_pedido, setPropiedadPedido] = useState("");
  const [nuevo_valor_pedido, setNuevoValorPedido] = useState("");
  const [id_delete_pedido, setIdDeletePedido] = useState("");
  // Nuevos estados para las opciones de dropdowns
  const [sucursalOptions, setSucursalOptions] = useState([]);
  const [empleadoOptions, setEmpleadoOptions] = useState([]);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  // Función para obtener la lista de pedidos
  const getPedidos = async () => {
    try {
      const response = await fetch("http://localhost:7000/pedido");
      if (response.ok) {
        const data = await response.json();
        setPedidos(data);
        console.log("Pedidos cargados:", data);
      } else {
        alert("Error al obtener pedidos");
      }
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
    }
  };

  // Función para obtener la lista de sucursales para el dropdown (with names)
  const getSucursalOptions = async () => {
    try {
      const response = await fetch("http://localhost:7000/sucursal");
      if (response.ok) {
        const data = await response.json();
        // Mapear la respuesta para obtener IDs y nombres de sucursales
        const options = data.map((sucursal) => ({
          id: sucursal.id,
          nombre: sucursal.nombre, // Assuming 'nombre' is the name field in sucursal
        }));
        setSucursalOptions(options);
        console.log("Opciones de sucursales cargadas:", options);
      } else {
        alert("Error al obtener opciones de sucursales");
      }
    } catch (error) {
      console.error("Error al obtener opciones de sucursales:", error);
    }
  };

  // Función para obtener la lista de empleados para el dropdown (with names)
  const getEmpleadoOptions = async () => {
    try {
      const response = await fetch("http://localhost:7000/empleado");
      if (response.ok) {
        const data = await response.json();
        // Mapear la respuesta para obtener IDs y nombres de empleados
        const options = data.map((empleado) => ({
          id: empleado.id,
          nombre: empleado.nombre + " " + empleado.apellido, // Assuming 'nombre' and 'apellido' are name fields
        }));
        setEmpleadoOptions(options);
        console.log("Opciones de empleados cargadas:", options);
      } else {
        alert("Error al obtener opciones de empleados");
      }
    } catch (error) {
      console.error("Error al obtener opciones de empleados:", error);
    }
  };

  // Función para agregar un pedido
  const addPedido = async () => {
    try {
      const response = await fetch("http://localhost:7000/pedido", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          empleado_pedido,
          sucursal_pedido,
          fecha_pedido,
          forma_pago_pedido,
        }),
      });
      if (response.ok) {
        alert("Pedido Agregado");
        // Limpiar los campos del formulario después de agregar
        setEmpleadoPedido("");
        setSucursalPedido("");
        setFechaPedido("");
        setFormaPagoPedido("");
        getPedidos(); // Recargar la lista de pedidos
      } else {
        alert("Error al agregar pedido");
      }
    } catch (error) {
      console.error("Error al agregar pedido:", error);
    }
  };

  // Función para modificar un pedido
  const modificarPedido = async () => {
    try {
      const response = await fetch("http://localhost:7000/pedido", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propiedad_pedido,
          nuevo_valor_pedido,
          id_update_pedido,
        }),
      });
      if (response.ok) {
        alert("Pedido Modificado");
        // Limpiar los campos de modificar después de modificar
        setIdUpdatePedido("");
        setPropiedadPedido("");
        setNuevoValorPedido("");
        getPedidos(); // Recargar la lista de pedidos
      } else {
        alert("Error al modificar pedido");
      }
    } catch (error) {
      console.error("Error al modificar pedido:", error);
    }
  };

  // Función para borrar un pedido
  const borrarPedido = async () => {
    try {
      const response = await fetch("http://localhost:7000/pedido", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_delete_pedido }),
      });
      if (response.ok) {
        alert("Pedido Eliminado");
        // Limpiar el campo de borrar después de eliminar
        setIdDeletePedido("");
        getPedidos(); // Recargar la lista de pedidos
      } else {
        alert("Error al eliminar pedido");
      }
    } catch (error) {
      console.error("Error al eliminar pedido:", error);
    }
  };

  // Cargar pedidos y opciones de sucursales y empleados al montar el componente
  useEffect(() => {
    getPedidos();
    getSucursalOptions();
    getEmpleadoOptions();
  }, []);

  return (
    <div className="search-bar">
      <fieldset className="search-container">
        <h1 className="title">Administrar Pedidos</h1>

        <div className="mb-4">
          <h3>Agregar Pedido</h3>
          <select
            className="input-field"
            value={empleado_pedido}
            onChange={(e) => handleInputChange(e, setEmpleadoPedido)}
          >
            <option value="">Seleccione Empleado</option>
            {empleadoOptions.map((empleado) => (
              <option key={empleado.id} value={empleado.id}>
                {empleado.nombre} {/* Mostrar el nombre del empleado */}
              </option>
            ))}
          </select>
          <select
            className="input-field"
            value={sucursal_pedido}
            onChange={(e) => handleInputChange(e, setSucursalPedido)}
          >
            <option value="">Seleccione Sucursal</option>
            {sucursalOptions.map((sucursal) => (
              <option key={sucursal.id} value={sucursal.id}>
                {sucursal.nombre} {/* Mostrar el nombre de la sucursal */}
              </option>
            ))}
          </select>
          <input
            type="date"
            placeholder="Fecha (YYYY-MM-DD)"
            value={fecha_pedido}
            onChange={(e) => handleInputChange(e, setFechaPedido)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Forma de Pago"
            value={forma_pago_pedido}
            onChange={(e) => handleInputChange(e, setFormaPagoPedido)}
            className="input-field"
          />
          <button onClick={addPedido} className="button">
            Agregar Pedido
          </button>
        </div>

        <div className="mb-4">
          <h3>Modificar Pedido</h3>
          <input
            type="text"
            placeholder="ID del pedido a modificar"
            value={id_update_pedido}
            onChange={(e) => handleInputChange(e, setIdUpdatePedido)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Propiedad a modificar (ej: forma_pago)"
            value={propiedad_pedido}
            onChange={(e) => handleInputChange(e, setPropiedadPedido)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Nuevo valor"
            value={nuevo_valor_pedido}
            onChange={(e) => handleInputChange(e, setNuevoValorPedido)}
            className="input-field"
          />
          <button onClick={modificarPedido} className="button">
            Modificar Pedido
          </button>
        </div>

        <div className="mb-4">
          <h3>Borrar Pedido</h3>
          <input
            type="text"
            placeholder="ID del pedido a borrar"
            value={id_delete_pedido}
            onChange={(e) => handleInputChange(e, setIdDeletePedido)}
            className="input-field"
          />
          <button onClick={borrarPedido} className="button">
            Borrar Pedido
          </button>
        </div>

        <div>
          <h3>Listar Pedidos (Opcional - para pruebas)</h3>
          <button onClick={getPedidos} className="button">
            Cargar Pedidos
          </button>
          {pedidos.length > 0 && (
            <ul>
              {pedidos.map((pedido) => (
                <li key={pedido.id}>
                  Pedido ID: {pedido.id}, Empleado ID: {pedido.idEmpleado},
                  Sucursal ID: {pedido.idSucursal}
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

export default PedidoManager;
