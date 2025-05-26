import React from 'react';

const Sidebar = () => {
  return (
    <aside className='w-64 bg-white shadow h-full p-4'>
      <h2 className='text-xl font-bold text-blue-700 mb-6'>Gestão de Água</h2>
      <nav className='space-y-2'>
        <button className='w-full text-left px-4 py-2 rounded hover:bg-blue-50'>Dashboard</button>
        <button className='w-full text-left px-4 py-2 rounded hover:bg-blue-50'>Clientes</button>
        <button className='w-full text-left px-4 py-2 rounded hover:bg-blue-50'>Leituras</button>
        <button className='w-full text-left px-4 py-2 rounded hover:bg-blue-50'>Relatórios</button>
      </nav>
    </aside>
  );
};

export default Sidebar;