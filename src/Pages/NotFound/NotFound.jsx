import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-2">Página no encontrada</h2>
      <p className="text-gray-400 mt-2 text-center max-w-md">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};
