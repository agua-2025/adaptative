import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const initialClient = {
  name: '', cpf: '', rg: '', address: '', neighborhood: '', city: '', state: '', postalCode: '', meterId: '', active: true,
};

export default function ClientForm() {
  const { clients, setClients } = useAppContext();
  const [newClient, setNewClient] = useState(initialClient);

  const handleAddClient = () => {
    if (!newClient.name.trim() || !newClient.cpf.trim() || !newClient.meterId.trim()) return;
    const newId = clients.length ? Math.max(...clients.map(c => c.id)) + 1 : 1;
    setClients([...clients, { ...newClient, id: newId }]);
    setNewClient(initialClient);
  };

  return (
    <div className='mt-6'>
      <input className='border p-2 w-full mb-2' placeholder='Nome' value={newClient.name} onChange={e => setNewClient({ ...newClient, name: e.target.value })} />
      <input className='border p-2 w-full mb-2' placeholder='CPF' value={newClient.cpf} onChange={e => setNewClient({ ...newClient, cpf: e.target.value })} />
      <input className='border p-2 w-full mb-2' placeholder='Hidrômetro' value={newClient.meterId} onChange={e => setNewClient({ ...newClient, meterId: e.target.value })} />
      <button onClick={handleAddClient} className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>Adicionar Cliente</button>
    </div>
  );
}