import { Search } from "lucide-react";
import { useEffect, useState } from "react";



const Search_Bar = () => {
  const [id_delete, Setid_delete] = useState("");
  const [name, Setname] = useState("");
  const [nuevo_valor, Setnuevo_valor] = useState("");
  const [id, Setid] = useState("");

  const add_monodroga = async () => {
    // Función asíncrona para eliminar una monodroga en la base de datos
    fetch("http://localhost:7000/monodroga", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((response) => response.json())
      .then((data) => alert("Monodroga Agregada"))
      .catch((error) => console.error("Error:", error));
  };

  const borrar_monodroga = async () => {
    // Función asíncrona para eliminar una monodroga en la base de datos

    fetch("http://localhost:7000/monodroga", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_delete }),
    })
      .then((response) => response.json())
      .then((data) => alert("Monodroga Eliminada"))
      .catch((error) => console.error("Error:", error));
  };

  const modificar_monodroga = async () => {
    // Función asíncrona para eliminar una monodroga en la base de datos

    fetch("http://localhost:7000/monodroga", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nuevo_valor, id }),
    })
      .then((response) => response.json())
      .then((data) => alert("Monodroga Modificada"))
      .catch((error) => console.error("Error:", error));
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

        <div className="button">

          <input
            type="text"
            className="text-black"
            value={name}
            placeholder="Agregar monodroga"
            onChange={(e) => {
              Setname(e.target.value);
            }}
          />
          <button className="button new-item-button" onClick={add_monodroga}>
            Agregar
          </button>
          <input
            type="number"
            className="text-black"
            value={id_delete}
            placeholder="Eliminar monodroga"
            onChange={(e) => {
              Setid_delete(e.target.value);
            }}
          />
          <button
            className="button delete-item-button"
            onClick={borrar_monodroga}
          >
            Eliminar
          </button>

          <form id="registroFormUpdate_monodroga">
            <label for="id">Código de la Monodroga:</label>
            <input type="number" className="text-black" value={id} placeholder="Ingrese el id" onChange={(e) => { Setid(e.target.value) }} required />
            <br></br>
            <label for="nuevo_valor">Nombre nuevo:</label>
            <input type="text" className="text-black" value={nuevo_valor} placeholder="Ingrese el nuevo valor" onChange={(e) => { Setnuevo_valor(e.target.value) }} required />
            <br></br>
            <button type="submit">Actualizar</button>
          </form>

          <button className="button modify-item-button" onClick={modificar_monodroga}>Modificar</button>
        </div>
      </fieldset>
    </div>
  );
};

export default Search_Bar;
