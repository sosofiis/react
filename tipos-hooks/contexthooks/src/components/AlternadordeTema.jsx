import React, { useContext } from 'react';
import { TemaContexto } from '../App';

function AlternadorDeTema() {
  const { temaEscuro, alternarTema } = useContext(TemaContexto);

  return (
    <div className={temaEscuro ? 'tema-escuro' : 'tema-claro'}>
      <p>O tema atual é {temaEscuro ? 'Escuro' : 'Claro'}</p>
      <button onClick={alternarTema}>Alternar Tema</button>
    </div>
  );
}

export default AlternadorDeTema;