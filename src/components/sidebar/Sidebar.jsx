// Importación de iconos desde la librería "lucide-react"
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
import React from "react";
// Importación de hooks de React
import { createContext, useContext, useState } from "react";

// Creación de un contexto para manejar el estado del sidebar
const SidebarContext = createContext();

// Componente principal del Sidebar
export default function Sidebar({ children }) {
  // Desestructurar children
  // Estado para controlar si el sidebar está expandido o colapsado
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Contenedor del Sidebar ocupando toda la altura de la pantalla */}
      <aside className="h-screen">
        <nav className="flex h-full flex-col border-r-8 bg-blue-300 shadow-sm">
          {/* Sección superior con el botón para expandir/colapsar el sidebar */}
          <div className="flex items-center justify-between p-4 pb-2">
            <button
              onClick={() => setExpanded((curr) => !curr)} // Alterna entre expandido y colapsado
              className="rounded-lg bg-gray-50 p-1.5 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
              {/* Muestra el icono correspondiente según el estado */}
            </button>
          </div>

          {/* Proveedor de contexto que permite compartir el estado "expanded" */}
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3">{children}</ul>{" "}
            {/* Aquí se renderizan los elementos del sidebar */}
          </SidebarContext.Provider>

          {/* Sección inferior con información del usuario */}
          <div className="flex border-t p-3">
            <div
              className={`flex items-center justify-between overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"} `}
            >
              {/* Datos del usuario */}
              <div className="leading-4">
                <h4 className="font-semibold">FarmaScript</h4>
                <span className="text-xs text-gray-600">
                  Software Solutions
                </span>
              </div>
              {/* Icono de más opciones */}
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

// Componente para los elementos individuales del Sidebar
export function SidebarItem({ icon, text, alert, active = false }) {
  // Obtiene el estado "expanded" del contexto
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`group relative my-12 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "text-white hover:bg-indigo-50"}`}
    >
      {/* Icono del elemento */}
      <img src={icon} alt="icon" />

      {/* Texto del elemento, se muestra o se oculta según el estado del sidebar */}
      <span
        className={`overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"}`}
      >
        {text}
      </span>

      {/* Indicador de alerta si existe */}
      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}
        ></div>
      )}

      {/* Tooltip cuando el sidebar está colapsado */}
      {!expanded && (
        <div
          className={`invisible absolute left-full ml-6 -translate-x-3 rounded-md bg-indigo-100 px-2 py-1 text-sm text-indigo-800 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
