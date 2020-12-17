import React, { useState } from 'react';
import Typist from 'react-typist';

const App = () => {
  const [texto, setTexto] = useState('');

  function flavio(){
    if (!texto) {
      const p = <Typist>
                Que Deus nos abençoe e nos proteja &#129305; &#9917; &#128421;
              </Typist>
      setTexto(p)
    } else {
      setTexto('')
    }
    
  }

  return (
    <div className="card text-center bg-success mb-3 card-flavio">
      <div className="card-header">
        Fala Flávio!
      </div>
      <div className="card-body">
        <button className="btn btn-warning" onClick={flavio}>Chama o Flávio!</button>
        <p className="card-text mt-3">{texto}</p>
      </div>
      <div className="card-footer text-light">
        &copy; Nathally Souza
      </div>
    </div>
  );
}

export default App;
