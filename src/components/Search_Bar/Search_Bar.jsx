import { Search } from "lucide-react";
import { useState } from "react";



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

/*const Search_Bar = ({ children }) => {
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
        {children}
      </fieldset>
    </div>
  );*/
};

export default Search_Bar;
