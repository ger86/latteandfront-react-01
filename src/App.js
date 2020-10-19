import React from 'react';
import AppView from './AppView'

function App() {
  const message = "Estamos hablando de componentes en React";
  function handleClick() {
    alert('Se ha pulsado el botón');
  }
  return <AppView handleClick={handleClick} message={message} />
}

export default App;