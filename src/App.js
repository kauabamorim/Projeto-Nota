import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';

function App() {
  return (
  <section>

    <form>
        <input type="text" placeholder="Titulo"/>
        <textarea placeholder="Escreva sua Nota..."></textarea>
        <button>Criar Nota</button>
    </form>
    <ListaDeNotas></ListaDeNotas>
    </section>
  );
}

// react -> Lib
// React -> ecossistema
export default App;
