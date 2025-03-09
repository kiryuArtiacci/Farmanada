import { Search } from "lucide-react";
import { useState } from "react";

const MonodrogaManager = () => {
  const [id_delete, setIdDelete] = useState("");
  const [nuevo_valor, setNuevoValor] = useState("");
  const [id, setId] = useState("");
  const [deploy, setDeploy] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const toggleDeploy = () => {
    setDeploy(!deploy);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const add_monodroga = async () => {
    try {
      const response = await fetch("http://localhost:7000/monodroga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, quantity }),
      });
      if (response.ok) {
        alert("Monodroga Agregada");
        setName(""); // Limpiar el input después de agregar
        setQuantity(""); // Limpiar el input después de agregar
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
        body: JSON.stringify({ id: id_delete }), // Corregir: el backend espera 'id' no 'id_delete'
      });
      if (response.ok) {
        alert("Monodroga Eliminada");
        setIdDelete(""); // Limpiar el input después de eliminar
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
        setNuevoValor(""); // Limpiar el input después de modificar
        setId(""); // Limpiar el input después de modificar
      } else {
        alert("Error al modificar monodroga");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Administrar Monodrogas</h2>

      <div>
        <h3>Agregar Monodroga</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => handleInputChange(e, setName)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) => handleInputChange(e, setQuantity)}
        />
        <button onClick={add_monodroga}>Agregar</button>
      </div>

      <div>
        <h3>Borrar Monodroga</h3>
        <input
          type="text"
          placeholder="ID a borrar"
          value={id_delete}
          onChange={(e) => handleInputChange(e, setIdDelete)}
        />
        <button onClick={borrar_monodroga}>Borrar</button>
      </div>

      <div>
        <h3>Modificar Monodroga</h3>
        <input
          type="text"
          placeholder="ID a modificar"
          value={id}
          onChange={(e) => handleInputChange(e, setId)}
        />
        <input
          type="text"
          placeholder="Nuevo valor"
          value={nuevo_valor}
          onChange={(e) => handleInputChange(e, setNuevoValor)}
        />
        <button onClick={modificar_monodroga}>Modificar</button>
      </div>
    </div>
  );
};

const SearchBarVisual = ({ children }) => {
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
  );
};

export default SearchBarVisual;
export { MonodrogaManager };
