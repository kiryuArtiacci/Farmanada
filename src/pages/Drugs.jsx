import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";
import Search_Bar from "../components/Search_Bar/Search_Bar";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import "../components/CRUDS/Leer.jsx";
// import "../components/List/List.css";

const Drugs = () => {
  const [data, Setdata] = useState(null);
  const Drogas = [data];
  const [deployAdd, setDeployAdd] = useState(false);
  const [deployDel, setDeployDel] = useState(false);
  const [deployMod, setDeployMod] = useState(false);

  const toggleDeployAdd = () => {
    // Esta funcion es la que hace el menu desplegable Agregar
    setDeployAdd(!deployAdd);
  };
  const toggleDeployDel = () => {
    // Esta funcion es la que hace el menu desplegable Eliminar
    setDeployDel(!deployDel);
  };
  const toggleDeployMod = () => {
    // Esta funcion es la que hace el menu desplegable Modificar
    setDeployMod(!deployMod);
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

  const borrar_monodroga = async (id_delete) => {
    try {
      const response = await fetch("http://localhost:7000/monodroga", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_delete }),
      });
      if (response.ok) {
        alert(`Monodroga Eliminada ${id_delete}`);
      } else {
        alert("Error al eliminar monodroga");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const modificar_monodroga = async (nuevo_valor, id) => {
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
          <div className="descriptions">
            <h2 className="description-item">ID</h2>
            <h2 className="description-item">Name</h2>
            <h2 className="description-item">Description</h2>
            <h2 className="description-item">Stock</h2>
            <h2 className="description-item">Price</h2>
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
          <button className="button new-item-button" onClick={toggleDeployAdd}>
            Agregar
          </button>

          {deployAdd && <New_drug onSubmit={add_monodroga} />}

          <button
            className="button delete-item-button"
            onClick={toggleDeployDel}
          >
            Eliminar
          </button>
          {deployDel && <Delete_drug onSubmit={borrar_monodroga} />}

          <button
            className="button modify-item-button"
            onClick={toggleDeployMod}
          >
            Modify
          </button>
          {deployMod && <Modify_drug onSubmit={modificar_monodroga} />}
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
          <h2 className="add-title">New</h2>
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

const Delete_drug = ({ onSubmit }) => {
  const [id_delete, setIdDelete] = useState("");

  const handleSubmitDel = (elem) => {
    elem.preventDefault();
    onSubmit(id_delete);
    setIdDelete("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitDel} className="add-item-container">
        <div className="add-title-container">
          <h2 className="add-title">Remove</h2>
        </div>
        <input
          type="text"
          placeholder="Item name"
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

const Modify_drug = ({ onSubmit }) => {
  const [nuevo_valor, setNuevoValor] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nuevo_valor, id);
    setNuevoValor("");
    setId("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-item-container">
        <div className="add-title-container">
          <h2 className="add-title">Modify</h2>
        </div>
        <input
          type="text"
          className="mb-4 text-black"
          value={id}
          placeholder="Ingrese el id"
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="text"
          className="text-black"
          value={nuevo_valor}
          placeholder="Ingrese el nuevo valor"
          onChange={(e) => setNuevoValor(e.target.value)}
          required
        />
        <input type="submit" value="Aceptar" className="submit-button" />
      </form>
    </div>
  );
};
