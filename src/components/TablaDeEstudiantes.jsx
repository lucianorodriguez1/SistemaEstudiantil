import React from "react";

function TablaDeEstudiantes({ estudiantes }) {
  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto border-collapse border border-gray-300 w-full text-left">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border border-gray-300 px-4 py-2">Nombre</th>
            <th className="border border-gray-300 px-4 py-2">Apellido</th>
            <th className="border border-gray-300 px-4 py-2">DNI</th>
            <th className="border border-gray-300 px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estudiantes.map((estudiante, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
            >
              <td className="border border-gray-300 px-4 py-2">
                {estudiante.nombre}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {estudiante.apellido}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {estudiante.dni}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => onActualizar(estudiante)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                >
                  Actualizar
                </button>
                <button
                  onClick={() => onEliminar(estudiante)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaDeEstudiantes;
