import React, { useState } from 'react';
 
const ItemCurso = ({ lista, index, onEdit, onRemover }) => {
  const [editando, setEditando] = useState(false);
  const [newValor, setNovoValor] = useState(lista);
 
  const handleEdit = () => {
    setEditando(true);
  };
 
  const handleSave= () => {
    onEdit(index, newValor);
    setEditando(false);
  };
 
  const handleCancelar = () => {
    setNovoValor(lista);
    setEditando(false);
  };
 
  const handleChange = (e) => {
    setNovoValor(e.target.value);
  };
 
  return (
    <li>
      {editando ? (
        <div>
          <input type="text" id="input2" value={newValor} onChange={handleChange} />
          <button onClick={handleSave} class="button">Salvar</button>
          <button onClick={handleCancelar} class="button">Cancelar</button>
        </div>
      ) : (
        <div>
          {lista}
          <button onClick={handleEdit} class="button">Editar</button>
          <button onClick={() => onRemover(index)} class="button">Remover</button>
        </div>
      )}
    </li>
  );
};
 
export default ItemCurso;