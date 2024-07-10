import React, { useState, createContext } from 'react';
import './App.css';
import AlternadordeTema from './components/AlternadordeTema';

export const TemaContexto = createContext();

function ProvedorDeTema({ children }) {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarTema = () => {
    setTemaEscuro(prevTema => !prevTema);
  };

  return (
    <TemaContexto.Provider value={{ temaEscuro, alternarTema }}>
      {children}
    </TemaContexto.Provider>
  );
}

function App() {
  return (
    <ProvedorDeTema>
      <AlternadordeTema />
    </ProvedorDeTema>
  );
}

export default App;
