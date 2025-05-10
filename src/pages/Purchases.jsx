import React from "react";
import { useEffect, useState } from "react";
import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";
import PedidoManager from "../components/Search_Bar/PedidoManager";
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

  useEffect(() => {
    async function cargarPedidos() {
      // Updated function name to cargarPedidos
      try {
        const response = await fetch("http://localhost:7000/pedido"); // Updated endpoint to /pedido
        if (!response.ok)
          throw new Error("Error en la solicitud: " + response.statusText);

        const dataRecibida = await response.json();
        console.log("Datos de pedidos recibidos:", dataRecibida); // Updated console log message
        Setdata(dataRecibida);
      } catch (error) {
        console.error("Error al cargar los Pedidos:", error); // Updated error message
      }
    }
    cargarPedidos(); // Call cargarPedidos function
  }, []);

  return (
    //parent
    <div className="admin-page-container">
      <Sidebar />
      {data && ( // RENDERIZADO DE LA DATA
        <List className="list-container">
          <h1 className="title">PEDIDOS: </h1>
          <div className="descriptions">
            {" "}
            {/* Added descriptions div for headers */}
            <h2 className="description-item">ID Pedido</h2>
            <h2 className="description-item">Empleado</h2>
            <h2 className="description-item">Sucursal</h2>
            <h2 className="description-item">Fecha</h2>
            <h2 className="description-item">Forma Pago</h2>
          </div>
          {Array.isArray(data) &&
            data.map(
              (
                item, //Verificamos si data es un array, y si lo es, lo mapeamos.
              ) => (
                <List_item
                  key={item.id}
                  item_id={item.id} // Muestra el ID del pedido
                  item_name={`${item.nombre_empleado} ${item.apellido_empleado}`} // Muestra nombre y apellido del empleado
                  img_src={item.img} // Updated icon - you might need to add this to your public folder
                  price={item.sucursal} // Muestra el nombre de la sucursal
                  stock={item.fecha} // Muestra la fecha del pedido
                  description={item.forma_pago} // Muestra la forma de pago
                />
              ),
            )}
        </List>
      )}

      <PedidoManager className="search-bar" />
    </div>
  );
};

export default Purchases;
