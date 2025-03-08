import { Search } from "lucide-react";
import { useState } from "react";
import New_Item from "./New_Item"; // Importamos el componente

const Search_Bar = () => {
  const [id_delete, setIdDelete] = useState("");
  const [nuevo_valor, setNuevoValor] = useState("");
  const [id, setId] = useState("");
  const [deploy, setDeploy] = useState(false);

  const toggleDeploy = () => {
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

  return (
    <div className="search-bar">
      <fieldset className="search-container">
        <h1 className="title">Search bar</h1>

        <div className="group relative flex items-center sm:block">
          <Search className="absolute left-3 top-2 text-xl text-gray-600 duration-200 group-hover:text-primary dark:text-gray-400" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-[300px] rounded-full border border-gray-500 py-2 pl-10 pr-3 transition-all duration-300 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:group-hover:bg-gray-800"
          />
        </div>

        {/* Integrando New_Item aquí */}

        <div className="button">
          <button className="button new-item-button" onClick={toggleDeploy}>
            Agregar
          </button>

          {deploy && <New_Item onSubmit={add_monodroga} />}

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
      </fieldset>
    </div>
  );
};

export default Search_Bar;
