import List from "../components/List/List";
import "../styles/admin.css";
import List_item from "../components/List/List_item";
import Search_Bar from "../components/Search_Bar/Search_Bar";
import Sidebar from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";

const Drugs = () => {
  const [data, Setdata]= useState(null);

const Drogas =[data];

useEffect(()=>{
  async function cargarMonodrogas() {
    try {
    const response = await fetch("http://localhost:7000/monodroga");
    if (!response.ok) throw new Error("Error en la solicitud: " + response.statusText);

    const dataRecibida = await response.json();
    console.log("Datos recibidos:", dataRecibida);
    Setdata(dataRecibida);

    } catch (error) {
    console.error("Error al cargar los monodrogas:", error);
    }
   
  }
  cargarMonodrogas();

}, [])

  return (
          //parent
    <div className="admin-page-container">
    <Sidebar />
    {data && ( // Verificamos si data tiene un valor
      <List className="list-container">
        <h1 className="title">Drugs: </h1>
        {Array.isArray(data) && data.map((item) => ( //Verificamos si data es un array, y si lo es, lo mapeamos.
          <List_item
            key={item.id} //Agregamos una key unica, al item.
            item_name={item.nombre} //Usamos item.nombre, ya que data es un array de objetos.
            img_src="/public/pill-icon.svg"
            price="200$"
            stock="100U"
            description="Lorem ipsum"
          />
        ))}
      </List>
    )}

    <Search_Bar className="search-bar" />
  </div>
  );
};

export default Drugs;
