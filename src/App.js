import './App.css';
import React, { useState } from 'react';
import EJ1 from './EJ1/EJ1_contador';
import EJ2 from './EJ1/EJ2_Formulario';
import EJ3 from './EJ1/EJ3_Esconder';
import EJ4 from './EJ1/EJ4_Lista';
import EJ5 from './EJ1/EJ5_buscar';


/*

import './App.css';
import React from'react';
import Saludo from './Saludos.js';
import Despedida from './Despedida.js';

const App = () => {
  const coches = [
      { Matricula: '1425BTY', Marca: 'Peugeot', Modelo: '3008', Tipo: 'híbrido' },
      { Matricula: '1762MNY', Marca: 'Mercedes', Modelo: 'EQS', Tipo: 'diesel' },
      { Matricula: '9882TPK', Marca: 'Renault', Modelo: '4 E-Tech', Tipo: 'eléctrico' },
      { Matricula: '6634TRV', Marca: 'Volkswagen', Modelo: 'Golf', Tipo: 'gasolina' },
      { Matricula: '2285RPL', Marca: 'Toyota', Modelo: 'RAV4', Tipo: 'híbrido' },
      { Matricula: '1782PRT', Marca: 'Peugeot', Modelo: '5008', Tipo: 'diesel' }
  ];

  return (
      <div>
          {coches.map((coche, index) => (
              <div key={index} className="StyledTextComponent">
                  {`${coche.Matricula} - ${coche.Modelo} ${coche.Marca} (${coche.Tipo})`}
              </div>
          ))}
      </div>
  );
};



export default App;
*/

function App() {
  return (
    <div>
      <section>
        <EJ1/>
      </section>
      <section>
        <h2> Saludo </h2>
        <EJ2/>
      </section>
      <section>
        <h2>Ocultar</h2>
        <EJ3/>
      </section>
      <section>
        <EJ4/>
      </section>
      <section>
        <EJ5/>
      </section>
    </div>
  );
}

export default App;
