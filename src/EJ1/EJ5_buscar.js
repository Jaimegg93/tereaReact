import React, { useState } from 'react';

function Busqueda() {
    const [keyword, setKeyword] = useState('');
    const [coches] = useState([
      'Peugeot 3008',
      'Mercedes EQS',
      'Renault 4 E-Tech',
      'Volkswagen Golf',
      'Toyota RAV4',
      'Peugeot 5008'
    ]);

    const filtro = coches.filter(product =>
      product.toLowerCase().includes(keyword.toLowerCase())
    );

    return (
      <div>
        <input
          type="text"
          placeholder="Buscar producto"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <ul>
          {filtro.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    );
  }

  export default Busqueda;