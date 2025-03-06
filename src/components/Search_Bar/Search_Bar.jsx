import React from "react";
import { Search } from "lucide-react";

const Search_Bar = () => {
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
          <button className="button new-item-button">Agregar</button>
          <button className="button delete-item-button">Eliminar</button>
          <button className="button modify-item-button">Modificar</button>
        </div>
      </fieldset>
    </div>
  );
};

export default Search_Bar;
