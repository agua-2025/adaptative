import React from 'react';
import { AppProvider } from './context/AppContext';
import ClientForm from './components/Clients/ClientForm';

function App() {
  return (
    <AppProvider>
      <div className='min-h-screen bg-gray-50 p-4'>
        <h1 className='text-2xl font-bold text-center text-blue-700'>Sistema de Gestão de Água</h1>
        <ClientForm />
      </div>
    </AppProvider>
  );
}

export default App;