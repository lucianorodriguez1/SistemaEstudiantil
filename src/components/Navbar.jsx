import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-blue-500 p-4">
      <div className="flex items-center">
        <span className="text-white text-xl font-bold ml-2">Sistema Estudiantil</span>
      </div>

      <ul className="flex space-x-4">
        <li>
          <Link
            href="/"
            className="text-white text-lg hover:underline hover:text-blue-300"
          >
            Inicio
          </Link>
        </li>
        <li>
          <a
            href="/crear-estudiante"
            className="text-white text-lg hover:underline hover:text-blue-300"
          >
            Crear Estudiante
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
