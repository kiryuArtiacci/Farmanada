import React from "react";



export async function CARGAR(props){
    try {
    const response = await fetch("http://localhost:7000/"+props.table);
    if (!response.ok) throw new Error("Error en la solicitud: " + response.statusText);

    const dataRecibida = await response.json();
    
    return(dataRecibida);

    } catch (error) {
    console.error("Error al cargar:", error);
    }}
   
  

