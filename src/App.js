import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import { Component } from 'react';

class App extends Component {
  render()  {
    return(
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    )
  }
}

// react -> Lib
// React -> ecossistema
export default App;
