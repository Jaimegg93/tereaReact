import React, { useState } from 'react';

function Esconder() {
    const [visible, setVisible] = useState(true);

    return (
      <div>
        <button onClick={() => setVisible(!visible)}>
          {visible ? 'Ocultar' : 'Mostrar'} elemento
        </button>
        {visible && <div>¡Aquí estoy!</div>}
      </div>
    );
  }

  export default Esconder;