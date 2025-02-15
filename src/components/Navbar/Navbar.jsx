import React from "react";
import { Search } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Darkmode from "./Darkmode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Shop",
    link: "./Sub-menus/Shop",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Registrar usuario",
    link: "./Sub-menus/RegistrarUser",
  },
  {
    id: 2,
    name: "Iniciar sesion",
    link: "./Sub-menus/IniciarSesion",
  },
  {
    id: 3,
    name: "Opciones de administrador",
    link: "./Sub-menus/Administracion",
  },
];

const Navbar = () => {
  return (
    <div className="container flex items-center justify-between">
      {/*Logo and links */}

      <div className="relative z-40 bg-white duration-200 dark:bg-gray-900 dark:text-white">
        <div className="py-4">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="tracking-wides text-2xl font-semibold uppercase text-primary sm:text-3xl text-black"
            >
              Farma-nada
            </a>

            {/*Items menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold duration-200 hover:text-gray-600 dark:text-white dark:hover:text-gray-500"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown elements// Elementos Desplegables*/}
                <li className="group relative cursor-pointer">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] py-2 font-semibold hover:text-gray-600 dark:hover:text-white"
                  >
                    Quick Links
                    <span>
                      <ChevronDown className="duration-300 group-hover:rotate-180" />
                    </span>
                  </a>
                  {/*Dropdown Links*/}
                  <div className="absolute z-[9999] hidden w-[200px] rounded-md bg-white p-2 text-black shadow-md group-hover:block dark:bg-gray-900 dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li>
                          <a
                            href={data.link}
                            className="font-semibold text-gray-600 duration-200 hover:text-black dark:hover:text-white"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Navbar right section / Seccion derecha del navbar */}
      <div className="flex items-center justify-between gap-4">
        {/* Seccion de busqueda/Searh bar section */}
        <div className="group relative hidden sm:block">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-0 rounded-full px-3 py-1 transition-all duration-300 focus:outline-none group-hover:w-[300px] group-hover:border group-hover:border-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 group-hover:dark:bg-gray-800"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600 duration-200 group-hover:text-primary dark:text-gray-400" />
        </div>
        {/*Order Button Section */}

        {/* Modo oscuro/Dark mode section */}
        <div>
          <Darkmode />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
