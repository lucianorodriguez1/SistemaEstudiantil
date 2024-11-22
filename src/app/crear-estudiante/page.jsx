import FormularioCrearEstudiante from "@/components/FormularioCrearEstudiante";
import React from "react";

export default function Page() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Crear Estudiante
      </h1>
      <FormularioCrearEstudiante />
    </div>
  );
}
