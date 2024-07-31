import React, { useState, useCallback } from 'react';
import ItemCurso from './Edicao';
 
const Lista1 = () => {
  const [lista, setCursos] = useState([]);
  const [newCurso, setNovoCurso] = useState('');
 
  const addCurso = useCallback(() => {
    if (newCurso.trim()) {
      setCursos((prevCurso) => [...prevCurso, newCurso]);
      setNovoCurso('');
    }
  }, [newCurso]);
   
  const remoCurso = useCallback((index) => {
    setCursos((prevCurso) => {
      const newLista = [...prevCurso];
      newLista.splice(index, 1);
      return newLista;
    });
  });
 
  const editCurso = useCallback((index, newValor) => {
    setCursos((prevCurso) => {
      const newLista = [...prevCurso];
      newLista[index] = newValor;
      return newLista;
    });
  });
 
  return (
    <div>
      <input
        type="text"
        value={newCurso}
        onChange={(e) => setNovoCurso(e.target.value)}
        placeholder="Cursos Online"
        id="input"
      />
      <button onClick={addCurso} class="button">Adicionar</button>
 
      <ul>
        {lista.map((lista, index) => (
          <ItemCurso
            key={index}
            lista={lista}
            index={index}
            onEdit={editCurso}
            onRemover={remoCurso}
          />
        ))}
      </ul>
    </div>
  );
};
 
export default Lista1;