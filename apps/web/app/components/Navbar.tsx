import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-black text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      {/* Close button not functional in this static example */}
      <button className="text-white text-3xl">×</button>

      {/* Navigation links */}
      <nav>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Página Inicial</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Explorar</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Notificações</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Mensagens</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Listas</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Itens salvos</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Premium</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Perfil</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Mais</a>
      </nav>

      {/* Action button */}
      <button className="bg-blue-500 text-white w-full py-3 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Postar</button>

      {/* User info (bottom) */}
      <div className="pt-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-500 p-2 rounded-full"></div>
          <div>
            <div className="text-sm font-semibold">caie</div>
            <div className="text-xs text-gray-400">@caie_allant</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
