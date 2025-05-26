import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const initialClient = {
  name: '',
  cpf: '',
  rg: '',
  address: '',
  neighborhood: '',
  city: '',
  state: '',
  postalCode: '',
  meterId: '',
  active: true,
};

export default function ClientForm() {
  const { clients, setClients } = useAppContext();
  const [newClient, setNewClient] = useState(initialClient);

  const handleAddClient = (e) => {
    e.preventDefault();
    const requiredFields = ['name', 'cpf', 'rg', 'address', 'neighborhood', 'city', 'state', 'postalCode', 'meterId'];
    const isValid = requiredFields.every((field) => newClient[field].trim());

    if (!isValid) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const newId = clients.length ? Math.max(...clients.map(c => c.id)) + 1 : 1;
    const client = { ...newClient, id: newId };
    setClients([...clients, client]);
    setNewClient(initialClient);
    alert('Cliente adicionado com sucesso!');
  };

  return (
    <div className="bg-white p-6 rounded shadow max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Cadastro de Cliente</h2>
      <form onSubmit={handleAddClient} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Nome completo *" value={newClient.name} onChange={(e) => setNewClient({ ...newClient, name: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="CPF *" value={newClient.cpf} onChange={(e) => setNewClient({ ...newClient, cpf: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="RG *" value={newClient.rg} onChange={(e) => setNewClient({ ...newClient, rg: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="Matrícula do hidrômetro *" value={newClient.meterId} onChange={(e) => setNewClient({ ...newClient, meterId: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="Endereço *" value={newClient.address} onChange={(e) => setNewClient({ ...newClient, address: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="Bairro *" value={newClient.neighborhood} onChange={(e) => setNewClient({ ...newClient, neighborhood: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="Cidade *" value={newClient.city} onChange={(e) => setNewClient({ ...newClient, city: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="Estado *" value={newClient.state} onChange={(e) => setNewClient({ ...newClient, state: e.target.value })} className="p-2 border rounded" />
        <input type="text" placeholder="CEP *" value={newClient.postalCode} onChange={(e) => setNewClient({ ...newClient, postalCode: e.target.value })} className="p-2 border rounded" />

        <label className="flex items-center col-span-2">
          <input type="checkbox" checked={newClient.active} onChange={(e) => setNewClient({ ...newClient, active: e.target.checked })} className="mr-2" />
          Cliente ativo
        </label>

        <button type="submit" className="col-span-2 mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Adicionar Cliente
        </button>
      </form>
    </div>
  );
}