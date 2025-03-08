import { Search } from "lucide-react";
import { useState } from "react";
import New_item from "./New_Item";

const Search_Bar = () => {
  const [mostrarElemento, setElemento] = useState(false);
  const [values, setValues] = useState({
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    direccion: '',
    fecha_ingreso	:('YYYY/MM/DD'),
  })

  const Guardar = async () => {
    {/*fetch("http://localhost:7000/monodroga", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({name})
  })
  .then(response => response.json())
  .then(data => alert('Guardado'))
  .catch(error => console.error("Error:", error));*/}
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
          <button onClick={()=>{console.log('hola mundo')}} className="button new-item-button">
            Agregar
          </button>
          <button className="button delete-item-button">Eliminar</button>
          <button className="button modify-item-button">Modificar</button>
          {mostrarElemento ? <New_item /> : null}
        </div>
      </fieldset>
    </div>
  );
};

export default Search_Bar;
