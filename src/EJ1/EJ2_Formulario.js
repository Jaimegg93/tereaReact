import React, { useState } from 'react';

function Formulario() {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmittedName(name);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {submittedName && <h2>Bienvenido, {submittedName}!</h2>}
      </div>
    );
  }

  export default Formulario;