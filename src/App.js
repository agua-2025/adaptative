import React from 'react';
import Sidebar from './components/Layout/Sidebar';
import Topbar from './components/Layout/Topbar';

export default function App() {
  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar />
      <div className='flex flex-col flex-1'>
        <Topbar />
        <main className='flex-1 p-6'>
          <h1 className='text-2xl font-bold text-blue-800'>Dashboard do Sistema de Água</h1>
        </main>
      </div>
    </div>
  );
}