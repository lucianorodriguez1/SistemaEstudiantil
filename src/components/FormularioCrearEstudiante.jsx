"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function FormularioCrearEstudiante() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    fecha_de_nacimiento: "",
    email: "",
    anio_escolar: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Obtener usuarios existentes en localStorage
    const estudiantesGuardados =
      JSON.parse(localStorage.getItem("estudiantes")) || [];
    // Agregar el nuevo usuario
    estudiantesGuardados.push(formData);
    // Guardar en localStorage
    localStorage.setItem("estudiantes", JSON.stringify(estudiantesGuardados));
    // Redirigir a la página de Home
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border rounded-lg bg-gray-50 shadow-md">
      <label className="block mb-4">
        <span className="text-gray-700">Nombre:</span>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Apellido:</span>
        <input
          type="text"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">DNI:</span>
        <input
          type="number"
          name="dni"
          value={formData.dni}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Fecha de Nacimiento:</span>
        <input
          type="date"
          name="fecha_de_nacimiento"
          value={formData.fecha_de_nacimiento}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          required
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Año escolar:</span>
        <select
          name="anio_escolar"
          value={formData.anio_escolar}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200"
          required
        >
          <option value="">Seleccione el año</option>
          <option value="1º Año">1º Año</option>
          <option value="2º Año">2º Año</option>
          <option value="3º Año">3º Año</option>
          <option value="4º Año">4º Año</option>
          <option value="5º Año">5º Año</option>
          <option value="6º Año">6º Año</option>
        </select>
      </label>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
      >
        Registrar
      </button>
    </form>
  );
}

export default FormularioCrearEstudiante;
