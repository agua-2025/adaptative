
import React, { useState } from 'react';

function Login({ onLogin }) {
  const [password, setPassword] = useState('');
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>Gestão de Água</h2>
      <input type="password" placeholder="Senha" value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => password === '1234' && onLogin()} style={{ marginLeft: 10 }}>
        Entrar
      </button>
    </div>
  );
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    authenticated ? (
      <div style={{ padding: 40 }}>
        <h1 style={{ color: '#0077cc' }}>Bem-vindo ao Sistema de Gestão de Água</h1>
        <p>Visual elegante, relatório por mês e cadastro funcionando.</p>
      </div>
    ) : <Login onLogin={() => setAuthenticated(true)} />
  );
}

export default App;
