import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";
import Search_Bar from "../components/Search_Bar/Search_Bar";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import "../components/CRUDS/Leer.jsx";

const Drugs = () => {
  const [data, Setdata] = useState(null);
  const Drogas = [data];
  const [id_delete, setIdDelete] = useState("");
  const [nuevo_valor, setNuevoValor] = useState("");
  const [id, setId] = useState("");
  const [deploy, setDeploy] = useState(false);

  const toggleDeploy = () => {
    // Esta funcion es la que hace el menu desplegable
    setDeploy(!deploy);
  };

  const add_monodroga = async (name, quantity) => {
    try {
      const response = await fetch("http://localhost:7000/monodroga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, quantity }),
      });
      if (response.ok) {
        alert("Monodroga Agregada");
      } else {
        alert("Error al agregar monodroga");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const borrar_monodroga = async () => {
    try {
      const response = await fetch("http://localhost:7000/monodroga", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_delete }),
      });
      if (response.ok) {
        alert("Monodroga Eliminada");
      } else {
        alert("Error al eliminar monodroga");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const modificar_monodroga = async () => {
    try {
      const response = await fetch("http://localhost:7000/monodroga", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nuevo_valor, id }),
      });
      if (response.ok) {
        alert("Monodroga Modificada");
      } else {
        alert("Error al modificar monodroga");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    async function cargarMonodrogas() {
      try {
        const response = await fetch("http://localhost:7000/monodroga");
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

  return (
    //parent
    <div className="admin-page-container">
      <Sidebar />
      {data && ( // Verificamos si data tiene un valor
        <List className="list-container">
          <h1 className="title">Drugs: </h1>
          {Array.isArray(data) &&
            data.map(
              (
                item, //Verificamos si data es un array, y si lo es, lo mapeamos.
              ) => (
                <List_item
                  key={item.id} //Agregamos una key unica, al item.
                  item_name={item.nombre} //Usamos item.nombre, ya que data es un array de objetos.
                  img_src="/public/pill-icon.svg"
                  price="200$"
                  stock="100U"
                  description="Lorem ipsum"
                />
              ),
            )}
        </List>
      )}

      <Search_Bar>
        <div className="button">
          <button className="button new-item-button" onClick={toggleDeploy}>
            Agregar
          </button>

          {deploy && <New_drug onSubmit={add_monodroga} />}

          <input
            type="number"
            className="text-black"
            value={id_delete}
            placeholder="Eliminar monodroga"
            onChange={(e) => setIdDelete(e.target.value)}
          />
          <button
            className="button delete-item-button"
            onClick={borrar_monodroga}
          >
            Eliminar
          </button>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              modificar_monodroga();
            }}
          >
            <label htmlFor="id">ID Monodroga:</label>
            <input
              type="number"
              className="text-black"
              value={id}
              placeholder="Ingrese el id"
              onChange={(e) => setId(e.target.value)}
              required
            />
            <br />
            <label htmlFor="nuevo_valor">Nombre nuevo:</label>
            <input
              type="text"
              className="text-black"
              value={nuevo_valor}
              placeholder="Ingrese el nuevo valor"
              onChange={(e) => setNuevoValor(e.target.value)}
              required
            />
            <br />
            <button type="submit">Actualizar</button>
          </form>
        </div>
      </Search_Bar>
    </div>
  );
};

export default Drugs;

const New_drug = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name, quantity);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-item-container">
        <div className="add-title-container">
          <h2 className="add-title">New item</h2>
        </div>
        <input
          type="text"
          placeholder="Item name"
          className="form-item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          className="form-item"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input type="submit" value="Aceptar" className="submit-button" />
      </form>
    </div>
  );
};
