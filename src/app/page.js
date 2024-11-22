"use client"; 

import TablaDeEstudiantes from "@/components/TablaDeEstudiantes";
import { useEffect,useState } from "react";

export default function Home() {
  const [estudiantes,setEstudiantes] = useState([]);

  useEffect(() =>{
    const estudiantesGuardados = JSON.parse(localStorage.getItem("estudiantes")) || [];
    setEstudiantes(estudiantesGuardados);
  },[])

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Lista de estudiantes
      </h1>
      <TablaDeEstudiantes estudiantes = {estudiantes}/>
    </div>
  );
}
