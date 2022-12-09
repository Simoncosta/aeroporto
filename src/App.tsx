import { useState } from 'react';

import Lottie from 'lottie-react';
import Airport from './assets/airport.json';

import Airplane from "./Airplane";

function App() {

  const [hangar, setHangar] = useState(true);
  const [liberado, setLiberado] = useState(false);

  function handle() {
    setHangar(!hangar);
  }

  return (
    <div>
      <h1>AEROPORTO</h1>
      {hangar &&
        (<Lottie animationData={Airport} loop />)
      }
      {hangar ? '' : <Airplane flanelinha={liberado} />}
      <button onClick={() => setHangar(!hangar)}>
        {hangar ? "Levar pra Pista" : "Levar pro Hangar"}
      </button>
      <br />
      <button onClick={() => setLiberado(!liberado)}>
        {liberado ? "Aguardar" : "Liberar"}
      </button>
    </div>
  )
}

export default App